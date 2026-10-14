// Renders /resume from the production build to public/pdf/Kurt Mansperger Resume.pdf.
//
//   npm run build && npm run resume:pdf
//
// Uses Playwright's bundled Chromium. If the browser isn't installed yet, run
// `npx playwright install chromium` once, or point CHROMIUM_PATH at a local
// Chrome/Chromium binary.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'public/pdf/Kurt Mansperger Resume.pdf');
const port = 4399;
const url = `http://127.0.0.1:${port}/resume`;

if (!existsSync(resolve(root, 'dist/resume/index.html'))) {
  console.error('dist/resume/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

// Spawn the Astro binary directly (not via npx) so there is exactly one
// process to stop when we're done.
const astroBin = resolve(root, 'node_modules/.bin/astro');
const preview = spawn(astroBin, ['preview', '--port', String(port), '--host', '127.0.0.1'], {
  cwd: root,
  stdio: ['ignore', 'ignore', 'inherit'],
});

const withTimeout = (promise, ms) =>
  Promise.race([promise, new Promise((r) => setTimeout(r, ms))]);

const waitForServer = async () => {
  for (let i = 0; i < 80; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server did not start at ${url}`);
};

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: out,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`Wrote ${out}`);
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  // Headless Chromium occasionally stalls on shutdown; don't let that block us.
  if (browser) await withTimeout(browser.close(), 5000);
  preview.kill('SIGTERM');
  process.exit(process.exitCode ?? 0);
}
