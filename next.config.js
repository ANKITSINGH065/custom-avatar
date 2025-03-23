const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');

module.exports = withPWA({
  i18n,
  reactStrictMode: true,
  // Remove the pwa property here
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });
    return config;
  },
  // Specify PWA options using next-pwa plugin directly
  pwa: {
    dest: 'public', // Cache is stored here
    runtimeCaching: require('next-pwa/cache'),
  },
});
