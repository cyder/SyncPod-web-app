interface Config {
  GRAPHQL_API: string;
}

const config: Config = {
  GRAPHQL_API: process.env.GRAPHQL_API || 'http://localhost:4000/graphql',
};

export default config;
