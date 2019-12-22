const branchController = require('./branch.controller');
const { ensureAuthorizedUser } = require('../../middlewares')


class Branch {
    constructor(app) {
        this.app = app;
        this.initRoutes();
    }

    initRoutes() {
        this.app.get('/api/branches', (req, res, next) => {
            ensureAuthorizedUser(req, res, next);
        }, (req, res, next) => {
            branchController.getBranchesByNameAndCity(req, res, next);
        });

        this.app.get('/api/banks', (req, res, next) => {
            ensureAuthorizedUser(req, res, next);
        }, (req, res, next) => {
            branchController.getBranch(req, res, next);
        });
    }
}

module.exports.Branch = Branch;