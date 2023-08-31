/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = 'lagunablues'
const nextConfig = {
    output: "export",
    assetPrefix: isGithubActions ? `/${repo}/` : "",
    basePath: isGithubActions ? `/${repo}` : "",
    images: { unoptimized: true },
}

module.exports = nextConfig
