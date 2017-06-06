module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'Sandbox',
      script    : './index.js'
    },
    {
      name      : 'Sandbox2',
      script    : './index.js'
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ec2-user',
      host : 'ec2-35-167-71-208.us-west-2.compute.amazonaws.com',
      key  : '~/Desktop/keys/Admin-key-pair-uswest2.pem',
      ref  : 'origin/master',
      repo : 'git@github.com:BlakeGuilloud/sandbox.git',
      path : '/home/ec2-user/sandbox',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
