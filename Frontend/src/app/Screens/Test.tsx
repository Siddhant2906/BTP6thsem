"use client"
import useTest from '../../../contractReader';
import {
    useAccount,
} from 'wagmi'


export default function MyComponent() {

    const { address } = useAccount()
    console.log(address)

    const handleClick = () => {
        useTest('getOwner', []);
        useTest('getCurrentTokenID', []);
        useTest('getList', [0])
    };

    return (
        <div className="mt-16">
            <button onClick={handleClick}>Read All data</button>
        </div>
    );
}
