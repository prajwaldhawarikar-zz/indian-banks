const { Model } = require('../../db');
const { BankModel } = require('../bank/bank.model');

class BranchModel extends Model {
    constructor() {
        super();
    }

    getBankDetailsByIfsc(ifsc) {
        return new Promise(async (resolve, reject) => {
            const query = `SELECT ifsc, bank_id, name, branch, address, city, district, state FROM branches INNER JOIN banks ON branches.bank_id = banks.id WHERE ifsc = '${ifsc}' LIMIT 1`;
            const result = await this.executeRaw(query);
            if (result.length) {
                resolve(result[0]);
            } else {
                resolve(null);
            }
        });
    }

    getBranches(name, city, limit, offset) {
        return new Promise(async (resolve, reject) => {
            const bank = await new BankModel().getBankByName(name);
            if (!bank) {
                resolve(null);
            } else {
                const query = `SELECT ifsc,branch, address, city, district, state FROM branches WHERE bank_id = '${bank.id}' AND city = UPPER('${city}') LIMIT ${limit} OFFSET ${offset}`;
                const result = await this.executeRaw(query);
                if (result.length) {
                    resolve(result);
                } else {
                    resolve(null);
                }
            }
        });
    }
}

module.exports.BranchModel = BranchModel;

