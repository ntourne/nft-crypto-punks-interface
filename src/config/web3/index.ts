import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

import CHAIN_ID from './chainId';

const { RINKEBY } = CHAIN_ID

const supportedChainIds = [
    RINKEBY, // id: 4
];

const getLibrary = (provider: any) => new Web3(provider);

const connector = new InjectedConnector({
    supportedChainIds,
});

export { connector, getLibrary };