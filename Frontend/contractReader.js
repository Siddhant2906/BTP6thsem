import { readContract, getAccount } from '@wagmi/core'
import { abi } from './constants/abi';
import { http, createConfig } from '@wagmi/core'
import { sepolia } from '@wagmi/core/chains'


async function useTest(functionName, args) {

    const config = createConfig({
        chains: [sepolia],
        transports: {
            [sepolia.id]: http(),
        },
    })

    const result = await readContract(config, {
        abi,
        address: '0x8F30E3b25836d8f60717a3d4E7Addbe7A8864195',
        functionName: functionName,
        chainId: sepolia.id,
        args: args
    })
    console.log(result)
}
export default useTest;