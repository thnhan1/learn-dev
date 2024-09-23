export default function Friend({id, name, img, sharedValue, onSelectFriend }) {

    return <div className="py-4 px-2 flex w-1/2 hover:bg-orange-200 rounded-xl">
        <img src={img} alt="avatar" className="rounded-full" width={100} />
        <div className="flex overflow-auto flex-col justify-top ml-8">
            <div className="font-bold text-2xl">{name}</div>
            <div>{sharedValue}</div>
        </div>
        <div className="ml-auto flex items-center justify-center">
            <button onClick={() => onSelectFriend(id)} className=" bg-orange-400 font-bold text-1xl px-4 py-2 rounded-xl">Select</button>
        </div>

    </div>
}