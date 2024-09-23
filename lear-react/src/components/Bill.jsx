import {useState}from 'react'
export default function Bill({ name, billValue, expense, sharedValue }) {
    const [whopaid, setWhopaid] = useState("you") 

    return (
        <div className="bg-yellow-100 rounded-xl px-8 py-8 mx-4">
            <div className="text-2xl font-bold text-center mb-4">Shared bill with {name}</div>

        <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
            <span className="text-xl font-bold py-2 mb-2">Bill value</span>
            <span className="text-xl font-bold py-2 mb-2">Your expense</span>
            <span className="text-xl font-bold py-2 mb-2">{name}'s expense</span>
            <span className="text-xl font-bold py-2 mb-2">Who paying the bill:</span>
        </div>
        
        <div className="flex flex-col">
            <input className="px-4 py-2 mb-4" type="number" value={billValue} />
            <input className="px-4 py-2 mb-4" type="number" value={expense} />
            <input className="px-4 py-2 mb-4" type="number" value={sharedValue} />
            <select name="whopaied" onChange={(e) => setWhopaid(() => e.target.value)} id="whopaied" value={whopaid} className="px-4 py-2">
                <option value="you">You</option>
                <option value={name}>{name}</option>
            </select>
        </div>
    </div>
    </div>
    )
}