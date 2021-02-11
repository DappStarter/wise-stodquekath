require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot dance dash mushroom concert grace force fringe spider'; 
let testAccounts = [
"0xf13895f73ba785ef8166e4189b8a2292c64b098f8249e748278616338b4e672c",
"0x8f0c2ee27824446682d73b9506267d36608659cf3934e511d984d5b489d6a606",
"0x28be5c620d581a786d137f48cce67ca34c332c7064142077ad349fdcaead6b1e",
"0x91503a7219d8660ec442eb75992cf95aaeab765107a19a74c2d32ea5f1bd4bac",
"0xfc50c805951a29d4bc145a55d93457fa7b88a263f0fb67a07c4fa47177c64a90",
"0x3b6853f53b3627ab3afc91ceff9fff44474b6371a6171339e9257dc8972bbfbc",
"0xe8513d93fff75d2557d54131cfce53914110d6d481d29738082a009664c0e4b5",
"0x399928be5bd2c57a7eae9249f643aadfe2b45aabbe2c6db7b320e17b737ebd1a",
"0x3f151116e15161ae512de2ecc349f2178ff1d32d99b4fc4fb28697a9c7405933",
"0xb77090db4b8353b459992fcfb421118c2b79dc046e2ec195bcf4233fc1d3eb55"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
