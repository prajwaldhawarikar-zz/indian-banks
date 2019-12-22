const { BranchModel } = require('./branch.model');

const Branch = new BranchModel()

exports.getBranch = async (req, res, next) => {
    let ifsc = req.query.ifsc || null;
    if (!ifsc) {
        return res.status(400).json({'message': 'Please provide ifsc'});
    }
    ifsc = ifsc.trim();
    const bankDetails = await Branch.getBankDetailsByIfsc(ifsc);
    if (!bankDetails) {
        return res.status(404).json({'message': 'Bank not found'});
    }
    res.json(bankDetails);
};

exports.getBranchesByNameAndCity = async (req, res, next) => {
    let name = req.query.name;
    let city = req.query.city;
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;

    if (!(name && city)) {
        return res.status(400).json({'message': 'Please provide name and city'});
    }

    name = name.trim();
    city = city.trim();

    const bankDetails = await Branch.getBranches(name, city, limit, offset);
    if (!bankDetails) {
        return res.status(404).json({'message': 'Branch not found'});
    }
    res.json(bankDetails);
};