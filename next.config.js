const {hostname} = require("os");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dummyimage.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig
