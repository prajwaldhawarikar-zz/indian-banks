const { Model } = require('../../db');

class BankModel extends Model {
    constructor() {
        super();
    }

    getBankByName(name) {
        return new Promise(async (resolve, reject) => {
            const query = `SELECT * from banks where name = UPPER('${name}') limit 1;`;
            const result = await this.executeRaw(query);
            if (result.length) {
                resolve(result[0]);
            } else {
                resolve(null);
            }
        });
    }
}

module.exports.BankModel = BankModel;

