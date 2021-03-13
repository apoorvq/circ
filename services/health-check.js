// // const { DATABASE: { name: databaseName } } = require('./../config');
// const { version } = require('./../package.json');

// global.fetch = require('node-fetch');
// const cc = require('cryptocompare');
// const { CRYPTOCOMPARE_API_KEY } = require('../config/index');

// cc.setApiKey({ CRYPTOCOMPARE_API_KEY });

// const getDatabaseDetails = async () => {
//   try {
//     return ({
//       // name: databaseName,
//       status: 'success',
//       type: 'database',
//       version: null,
//     });
//   } catch (error) {
//     return ({
//       // name: databaseName,
//       status: 'failure',
//       type: 'database',
//       version,
//     });
//   }
// };

// const checkCryptoCompare = async () => {
//   try {
//     await new Promise((resolve, reject) => {
//       cc.price('BTC', [ 'USD', 'EUR' ])
//         .then((price) => { resolve(price); })
//         .catch((error) => { reject(error); });
//     });

//     return ({
//       name: 'crypto_compare',
//       status: 'success',
//       type: 'service',
//       version: '1.0.0',
//     });
//   } catch (error) {
//     return ({
//       name: 'crypto_compare',
//       status: 'failure',
//       type: 'service',
//       version: '1.0.0',
//     });
//   }
// };

// module.exports = { getDatabaseDetails, checkCryptoCompare };
