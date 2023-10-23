module.exports = {
  async rewrites() {
    return [
      {
        source: '/page',
        destination: '/app/page', // Adjust the path to your Page component inside the 'app' folder
      },
    ];
  },
};
