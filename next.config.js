const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');

module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    runtimeCaching: require('next-pwa/cache'),
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });
    return config;
  },
});
