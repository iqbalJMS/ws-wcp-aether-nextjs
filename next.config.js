module.exports = {
  async rewrites() {
    return [
      {
        source: "/aether",
        destination: "/",
      },
    ];
  },
};
