import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Aditya Kumar portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Aditya Kumar - Graphic Designer &amp; Video Editor<\/title>/i);
  assert.match(html, /Make people stop\./);
  assert.match(html, /Then make them feel\./);
  assert.match(html, /01 \/ Selected Work/);
  assert.match(html, /02 \/ Video Editing/);
  assert.match(html, /03 \/ Services/);
  assert.match(html, /04 \/ About Me/);
  assert.match(html, /Start a WhatsApp chat/);
  assert.match(html, /https:\/\/www\.instagram\.com\/ez_made\.design\//);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("keeps portfolio projects, media, and animation scoped correctly", async () => {
  const [page, css, workReveal, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/WorkReveal.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const siteConfig = \{/);
  assert.match(page, /const designWork = \[/);
  assert.match(page, /const services = \[/);
  assert.equal((page.match(/type: "/g) ?? []).length, 4);
  assert.match(page, /sample-reel\.mp4/);
  assert.match(page, /green-screen-edit\.mp4/);
  assert.match(page, /controls/);
  assert.match(page, /playsInline/);
  assert.match(page, /wa\.me\/918287980293/);

  assert.doesNotMatch(css, /\.hero\s*\{[^}]*position:\s*sticky/is);
  assert.match(css, /\.work-section\s*\{/);
  assert.match(css, /\.project-card:nth-child\(even\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);

  assert.match(workReveal, /requestAnimationFrame/);
  assert.match(workReveal, /passive:\s*true/);
  assert.match(workReveal, /data-work-card/);
  assert.doesNotMatch(workReveal, /setState|useState/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
