 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'j2xHwIKQ#_QwwD1y1skrvkp4xrErrW9K9JJxLMZNkMf7Q3zm7zjc', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb://mongo:eAMADLypGVQPgLcWRGBiYmWolbYgPTKj@autorack.proxy.rlwy.net:28696',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94768725104',    // Enter Your Owner Number
};
