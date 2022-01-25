
var dayjs = require('dayjs');

async function get(req, res) {
    
}

async function post(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress,who = req.headers['user-agent'] || "Undefined (1.0.0)";
    
    return;
}

module.exports = { get, post };