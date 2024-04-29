import { readContract, getAccount } from '@wagmi/core'
import { abi } from './constants/abi';
import { http, createConfig } from '@wagmi/core'
import { sepolia } from '@wagmi/core/chains'


async function contractReader(functionName, args) {

    const config = createConfig({
        chains: [sepolia],
        transports: {
            [sepolia.id]: http(),
        },
    })

    const result = await readContract(config, {
        abi,
        address: '0x88F71af24eE19bD093fdFd5F06EaFc72374cE7B9',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log(result)
    return result;
}
export default contractReader;