import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = "out";
const indexPath = join(outputDir, "index.html");
const notFoundPath = join(outputDir, "404.html");

if (!existsSync(indexPath)) {
  throw new Error(
    `GitHub Pages export failed: ${indexPath} does not exist. The artifact must contain a static index.html.`,
  );
}

writeFileSync(join(outputDir, ".nojekyll"), "");

copyFileSync(indexPath, notFoundPath);

const indexHtml = readFileSync(indexPath, "utf8");
const disallowedRootPaths = [
  'href="/_next',
  'src="/_next',
  'href="/favicon.svg',
  'src="/favicon.svg',
  'content="/portfolio',
  'poster="/portfolio',
  'src="/portfolio',
];

const badPath = disallowedRootPaths.find((path) => indexHtml.includes(path));

if (badPath) {
  throw new Error(
    `GitHub Pages export contains a root-relative asset path (${badPath}). Assets must resolve under /.com/.`,
  );
}

console.log(`GitHub Pages static artifact is ready in ${outputDir}`);
