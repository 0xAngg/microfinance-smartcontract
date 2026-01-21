import CollectionConfig from "./CollectionConfig";
import { network } from "hardhat";

const chainId = network.config.chainId;
let ContractArguments: readonly [string, string, string];

if (chainId === 31337 || chainId === 1337) {
  ContractArguments = [
    CollectionConfig.platformAddressForLocalHost,
    CollectionConfig.domainEip712,
    CollectionConfig.versionDomain,
  ] as const;
} else {
  ContractArguments = [
    CollectionConfig.platformAddress,
    CollectionConfig.domainEip712,
    CollectionConfig.versionDomain,
  ] as const;
}

export default ContractArguments;
