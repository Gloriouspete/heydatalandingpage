module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/layout/home/Home', // Adjust the path to your App component
      },
    ];
  },
};
