const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = (phase, defaultConfig) => {
    return withBundleAnalyzer(
        withMDX({
            pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

            webpack: (
                config,
                { buildId, dev, isServer, defaultLoaders, webpack },
            ) => {
                // Important: return the modified config
                return config;
            },
        }),
    );
};
