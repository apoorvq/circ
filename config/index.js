const { version } = require('../package.json');

module.exports = {
  VERSION: version,
  SERVER: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3001,
  },
  BSC_RPC_PROVIDER: process.env.BSC_RPC_PROVIDER || 'https://bsc-dataseed.binance.org',
  GANJA_CONTRACT_ADDRESS: process.env.GANJA_CONTRACT_ADDRESS || '0x447c324f7eb99e512ff18308203b36d3c2607e0e'
};
