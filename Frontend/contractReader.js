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
        address: '0xea64cb29ecd7e48d6a5bc1b80a90fbb8c4ade795',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log(result)
    return result;
}
export default contractReader;