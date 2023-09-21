const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
})
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "webneed-images-uat.s3.ap-south-1.amazonaws.com",
      "commondatastorage.googleapis.com",
      "webneed-dev-qa.s3.ap-south-1.amazonaws.com",
      "bitbucket.org",
      "dcnqdypyrlfrh.cloudfront.net",
      "static.vecteezy.com",
      "bitbucket.org",
      "pixabay.com",
      "fonts.googleapis.com",
    ],
  },
  optimizeFonts: false,
  transpilePackages: ["@acme/ui", "lodash-es"],
  swcMinify: true,
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
};

module.exports = nextConfig