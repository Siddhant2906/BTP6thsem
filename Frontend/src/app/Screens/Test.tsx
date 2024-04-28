"use client"
import contractReader from '../../../contractReader';
import {
    useAccount,
    useWriteContract,
} from 'wagmi'
import contractWrite from '../../../writeContract';


export default function MyComponent() {

    const {
        writeContract
    } = useWriteContract()

    const { address } = useAccount()
    console.log(address)

    const handleClick = () => {
        contractReader('getOwner', []);
        contractReader('getCurrentTokenID', []);
        contractReader('getList', [0]);
    };

    async function addFile (){
        contractWrite('addFile',['abc'], writeContract);
    }

    async function editFile () {
        contractWrite('editFile',['def',BigInt('0')], writeContract)
    }

    return (
        <div>
            <div className="mt-16 ">
                <button onClick={handleClick}>Read All data</button>
            </div>

            <div className="mt-16 ">
                <button onClick={addFile}>Add File</button>
            </div>

            <div className="mt-16 ">
                <button onClick={editFile}>Edit File</button>
            </div>
        </div>

    );
}
