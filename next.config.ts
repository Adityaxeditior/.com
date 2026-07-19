import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/.com";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  basePath: isGitHubPagesBuild ? githubPagesBasePath : undefined,
  assetPrefix: isGitHubPagesBuild ? `${githubPagesBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: isGitHubPagesBuild ? true : undefined,
};

export default nextConfig;
