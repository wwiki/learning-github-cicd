import type { NextConfig } from "next";

const nextConfig = {
    output: 'export', // 启用静态导出
    basePath: '/learning-github-cicd', // 你的 GitHub 仓库名
    assetPrefix: '/learning-github-cicd',
}

export default nextConfig;
