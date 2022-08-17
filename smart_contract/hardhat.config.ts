//https://eth-goerli.g.alchemy.com/v2/0Ybg8Pp3QsDjy2uV1-QF-SUnp6cn7Jjy

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url :'https://eth-goerli.g.alchemy.com/v2/0Ybg8Pp3QsDjy2uV1-QF-SUnp6cn7Jjy',
      accounts: ['c0582e0794d5d6db94fc540a4e3a163204b68571189b0b729d90bffff41ac744']
    }
  }
}