const { HealthCheck } = require('../services');
const { VERSION } = require('../config');

const status = async (req, res) => {
  const response = [];

  const checkDbConnection = await HealthCheck.getDatabaseDetails();
  const checkCC = await HealthCheck.checkCryptoCompare();

  response.push(checkDbConnection);
  response.push(checkCC);

  return res.status(200).send({
    dependsOn: response,
    version: `${VERSION}`,
  });
};

module.exports = { status };
