import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";

const CollectionConfig: CollectionConfigInterface = {
    testnet: Networks.mandalaTestnet,
    mainnet: Networks.arbitrumOne,
    contractName: "DataSharing",
    platformAddress: "0xdDf7d12Ec6eEDa6B3350eFeD3e9DC432412ecDf5", // account test
    platformAddressForLocalHost: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    domainEip712: "DataSharing",
    versionDomain: "1",
    contractAddress: "0xa1615f4A35dbc308912daD91ECBF9373a5213242",
};

export default CollectionConfig;