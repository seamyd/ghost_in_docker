var path = require('path'),
    config;

config = {
    production: {
        url: 'http://blogaboutit.nl',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: 'db',
                user: 'amaes',
                password : 'mypassword',
                database : 'ghost_production',
                port: '3306',
                charset  : 'utf8'
            },
            debug: false
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;