module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/app/page', // Adjust the path to your Page component inside the 'app' folder
      },
    ];
  },
};
