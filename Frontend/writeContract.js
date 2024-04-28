import { readContract, getAccount } from '@wagmi/core'
import { abi } from './constants/abi';
import { sepolia } from '@wagmi/core/chains'
import { useWriteContract } from 'wagmi';


async function contractWrite(functionName, args, writeContract) {
    const result = writeContract({
        abi,
        address: '0x8F30E3b25836d8f60717a3d4E7Addbe7A8864195',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log( result)
}
export default contractWrite;