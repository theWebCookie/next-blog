const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        db_username: 'newblog',
        db_password: 'pEVYWno5Tz2DiB4O',
        db_name: 'my-blog-dev',
        db_cluster: 'cluster0',
      },
    };
  }
  return {
    env: {
      db_username: 'newblog',
      db_password: 'pEVYWno5Tz2DiB4O',
      db_name: 'my-blog',
      db_cluster: 'cluster0',
    },
  };
};
