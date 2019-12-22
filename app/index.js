const express = require('express');

const { config } = require('./config');
const { Components } =require('./components');

class App {
    constructor() {
        this.port = config.getPort()
        this.init();
        this.startServer();
    }

    init() {
        this.app = express();
        new Components(this.app);
    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log('server is up on port', this.port);
        });
        this.app.get('/', (req, res) => {
            res.send('Server is up');
        });
    }
}

module.exports.App = App
