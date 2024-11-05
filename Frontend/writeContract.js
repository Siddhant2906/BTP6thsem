import { readContract, getAccount } from '@wagmi/core'
import { abi } from './constants/abi';
import { sepolia } from '@wagmi/core/chains'
import { useWriteContract } from 'wagmi';


async function contractWrite(functionName, args, writeContract) {
    const result = writeContract({
        abi,
        address: '0xea64cb29ecd7e48d6a5bc1b80a90fbb8c4ade795',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log(result)
}
export default contractWrite;