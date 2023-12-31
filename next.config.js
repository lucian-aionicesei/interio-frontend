if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `);
}

/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["da-DK"],
    defaultLocale: "da-DK",
  },
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      "interio-db.graphite.dk",
    ],
  },
  reactStrictMode: true,
};
