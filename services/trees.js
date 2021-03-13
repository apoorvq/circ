const Web3 = require('web3');

const { BSC_RPC_PROVIDER, GANJA_CONTRACT_ADDRESS } = require('../config')
const { ContractABI } = require('../utils/contract-abi')

const web3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_PROVIDER));

const getBalance = async (payload) => {
  const { address1, address2, address3, address4, address5, address6 } = payload;

  const tokenContract = new web3.eth.Contract(ContractABI, GANJA_CONTRACT_ADDRESS);
  const decimal = 18;
  const balance1 = await tokenContract.methods.balanceOf(address1).call();
  const balance2 = await tokenContract.methods.balanceOf(address2).call();
  const balance3 = await tokenContract.methods.balanceOf(address3).call();
  const balance4 = await tokenContract.methods.balanceOf(address4).call();
  const balance5 = await tokenContract.methods.balanceOf(address5).call();
  const balance6 = await tokenContract.methods.balanceOf(address6).call();

  const address1Bal = balance1 / Math.pow(10, decimal);
  const address2Bal = balance2 / Math.pow(10, decimal);
  const address3Bal = balance3 / Math.pow(10, decimal);
  const address4Bal = balance4 / Math.pow(10, decimal);
  const address5Bal = balance5 / Math.pow(10, decimal);
  const address6Bal = balance6 / Math.pow(10, decimal);

  return { doc: { address1Bal, address2Bal, address3Bal, address4Bal, address5Bal, address6Bal } };
};

const getCirculatingSupply = 
async () => {
  const { doc } = await getBalance({address1: '0x0274530AF75c489aEa7242eB72E8185E96A89f5c', address2: '0x98B58134671b9219B461dD02191585F65753972e', address3: '0x2104B45Cb222b7Bd27D3c39c4e98e9A47E5704a1', address4: '0xf9892C4A9df295c3961c61Ffc0CF806f4DF11253', address5: '0xc69e8d772485867d2bfdfa1847f2ea9acda77633', address6: '0x000000000000000000000000000000000000dead'});

  const circulatingSupply = 5000-doc.address1Bal-doc.address2Bal-doc.address3Bal-doc.address4Bal-doc.address5Bal-doc.address6Bal;

  return {doc: circulatingSupply}
}

module.exports = {
  getCirculatingSupply,
};
