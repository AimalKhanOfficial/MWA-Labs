var crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

let decrypted = '';
decipher.on('readable', () => {
    const data = decipher.read();
    if (data)
        decrypted += data.toString('utf8');
});
decipher.on('end', () => {
    console.log(decrypted);
});

module.exports = decipher;