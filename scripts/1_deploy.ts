import { ethers } from "hardhat";
import CollectionConfig from "../config/CollectionConfig";
import { NftContractType } from "../lib/NftContractProvider";

async function main() {

  console.log("Deploying contract..");

  // We get the contract to deploy
  const Contract = await ethers.getContractFactory(CollectionConfig.contractName);
  const contractArguments = [
    CollectionConfig.platformAddressForLocalHost,
    CollectionConfig.domainEip712,
    CollectionConfig.versionDomain
  ]

  // Use explicit gas limit to avoid gas estimation issues on the testnet
  const deployTx = await Contract.deploy(...contractArguments, {
    gasLimit: 3000000,
  }) as unknown as NftContractType;

  await deployTx.waitForDeployment();

  console.log("Greeter deployed to:", await deployTx.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});