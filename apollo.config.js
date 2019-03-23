module.exports = {
  client: {
    service: {
      name: 'syncpod-BFF',
      url: 'https://engine.apollographql.com/service/syncpod-BFF/explorer',
    },
    includes: ['src/queries/**/*.{ts,tsx,graphql}'],
    addTypename: true,
  },
};
