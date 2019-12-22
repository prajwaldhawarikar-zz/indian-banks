
const { Pool } = require('pg')
const { config } = require('../config');

const pool = new Pool(config.getDbConfig());

class Model {
    constructor() {}

    executeRaw(query) {
        return new Promise((resolve, reject) => {
            // console.log(`SELECT ${projectionString} FROM ${this.table} WHERE ${filterString} LIMIT 1`);
            pool.query(query, (error, results) => {
                if (error) {
                    console.log(error);
                    throw error;
                } else {
                    resolve(results.rows);
                }
            })
        });
    }
}

module.exports.Model = Model;