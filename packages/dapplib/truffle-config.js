require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid glove flower smooth name rival mean proof grace light army genre'; 
let testAccounts = [
"0xc4fd4ab545ae9c752415ab7dee311490d10990a21c5d4d3b6f976245d1000e7a",
"0x6bc8bb20a28ee5f057c0e7b7d4f8810a2a47902e850efcc1a70d119c1f4c6247",
"0x19e74f54d760159232a65ddc2759ad75adfc1c1bb6f28d972d11876d58ecd6dd",
"0x8e13afb33374219bc7368ca80282e1a904e1a9627ba6550dd2172c2f6b9e582b",
"0x806cc540437724c99727877b3acae74080e58c8a98d95bcd43dfd1871ac9ccdc",
"0xd15781b36ad53fd5ab568c9785b6a3cb707eaa8fa6d49075ee373aac6b492a9d",
"0xbebc73b54dfdeb1b840fb937953360aee2ceb19ba33a8b99ce5e2646e4027e64",
"0xc18050b6bac76228b00b2f09bc31b399223b3b11bbbdc2a33bc0f2676c12d22e",
"0x0b6b9787720714ae1104b15c8561a714687c43230185f55a1dbeb3ce9f1b97c1",
"0xd76ef88bd6c3e1c680df528ada9287aa918b5947d034679b16853586a3f84108"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


