module.exports = {
  client: {
    service: {
      name: 'syncpod',
      url: 'http://localhost:4000/graphql',
    },
    includes: ['src/queries/**/*.{ts,tsx,graphql}'],
    addTypename: true,
  },
};
