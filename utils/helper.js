const axios = require('axios');

const getRequest = async ({ url }) => {
  try {
    const response = await axios({
      url: `${url}`,
      method: 'GET',
    });

    return { response: response.data.result };
  } catch (error) {
    return { error: [ { name: 'server', message: 'There is some issue, Please try after some time' } ] };
  }
};

module.exports = { getRequest };
