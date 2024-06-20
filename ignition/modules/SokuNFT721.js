const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("SokuNFT721", (m) => {
  
  const name = m.getParameter("name","SokuNFT721");
  const symbol = m.getParameter("symbol","SNFT");
  const baseTokenURI = m.getParameter("baseTokenURI","https://example.com/api/token/");
  const operator = m.getParameter("operator","0x1234567890123456789012345678901234567890");

  const SokuNFT721 = m.contract("SokuNFT721", [name, symbol, baseTokenURI, operator]);

  return { SokuNFT721 };
});
