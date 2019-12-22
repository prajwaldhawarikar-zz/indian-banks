const { Branch } = require('./branch/branch.routes');

class Components {
    constructor(app) {
        this.app = app;
        this.init();
    }

    init() {
        new Branch(this.app);
    }
}

module.exports.Components = Components;