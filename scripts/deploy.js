const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Fraction = await hre.ethers.getContractFactory("Fraction");
  const fraction = await Fraction.deploy(
    '',
    '',
    '',
    ''
    );

  const res = await fraction.deployed();

  console.log(`contract deployed on ${res.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
