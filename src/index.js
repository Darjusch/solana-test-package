const { Keypair } = require('@solana/web3.js');

export function generateKeypair() {
  const keypair = Keypair.generate();
  console.log(`Generated Solana publickey is ${keypair.publicKey.toBase58()}`);
  return keypair;
}
