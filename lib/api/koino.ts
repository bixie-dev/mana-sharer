import { Signer, Contract, Provider } from 'koilib';
import config from '../config/general';
import { koin_contract, mana_contract } from '../constants/contracts';
import { koin_abi } from '../abi/koin-abi';
import { mana_contract_abi } from '../abi/mana_contract-abi';


const provider = new Provider(['https://harbinger-api.koinos.io']);
const signer = Signer.fromSeed(config.KOINOS_WALLET_SEED!);

export const getBalance = async (owner: string) => {
  const koinContract = new Contract({
    id: koin_contract,
    abi: koin_abi,
    provider,
    signer,
  });

  const koin = koinContract.functions;
  const { result } = await koin.balance_of({ owner });
  return result!.value;
}

export const getRC = async (owner: string) => {
  return await provider.getAccountRc(owner);
}

export const hello = async (name: string) => {
  const contract = new Contract({
    id: mana_contract,
    abi: mana_contract_abi,
    provider,
    signer,
  });

  const func = contract.functions;
  const { result } = await func.hello({ name });
  return result!.value;
}