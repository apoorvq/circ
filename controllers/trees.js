const { treesService } = require('../services');

const getCirculatingSupply = async ({ res }) => {
  try {
    const { doc, error } = await treesService.getCirculatingSupply()

    if(error) {
      return res.badRequest('error', error);
    }

    return res.getSuccessfully({ data: doc })
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  getCirculatingSupply,
};
