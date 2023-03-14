require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
	solidity: '0.8.17',
	networks: {
		hardhat: {
			chainId: 1337,
		},
		goerli: {
			url: process.env.ALCHEMY_GOERLI_URL,
			accounts: [process.env.GOERLI_PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
			goerli: ETHERSCAN_KEY,
		},
	},
};
