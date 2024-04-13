const fs = require('fs');
const customersData = JSON.parse(fs.readFileSync('./src/data/customers.json'));

exports.getCities = (req, res) => {
    // Implementation of the /cities route
};
