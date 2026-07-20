import type { NextConfig } from "next";

const deploymentTarget =
  process.env.DEPLOYMENT_TARGET ??
  (process.env.VERCEL === "1" ? "vercel" : "local");
const isGitHubPagesBuild =
  deploymentTarget === "github-pages" || process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/.com";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  basePath: isGitHubPagesBuild ? githubPagesBasePath : "",
  assetPrefix: isGitHubPagesBuild ? `${githubPagesBasePath}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: isGitHubPagesBuild,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
