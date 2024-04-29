import { readContract, getAccount } from '@wagmi/core'
import { abi } from './constants/abi';
import { sepolia } from '@wagmi/core/chains'
import { useWriteContract } from 'wagmi';


async function contractWrite(functionName, args, writeContract) {
    const result = writeContract({
        abi,
        address: '0x88F71af24eE19bD093fdFd5F06EaFc72374cE7B9',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log( result)
}
export default contractWrite;