class Config {
    constructor() {}
    getPort() {
        return process.env.PORT || 3000;
    }

    getSecretKey() {
        return 'do not share with anyone'
    }

    getDbConfig() {
        return {
            user: '<user_name>',
            host: '<host>',
            database: '<database>',
            password: '<password>',
            port: 5432,
            ssl: true
        };
    }
}

module.exports.config = new Config();