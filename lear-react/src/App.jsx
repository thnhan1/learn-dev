import { useState } from "react";
import Friend from "./components/Friend";
import Bill from "./components/Bill";
import AddFriendForm from "./components/AddFriendForm";

const listFriends = [
    { id: 1, name: "Clark", img: "https://images.freeimages.com/image/previews/e84/buzzy-bean-girl-smiling-cartoon-png-5690326.png?fmt=webp&w=500", msg: "You owe Clark 7$", sharedValue: 7.0, billValue: 10, expense: 0, whoPaid: null },
    { id: 2, name: "Sarah", img: "https://images.freeimages.com/image/previews/e84/buzzy-bean-girl-smiling-cartoon-png-5690326.png?fmt=webp&w=500", msg: "Sarah owes you 20$", sharedValue: 20.0, billValue: 10, expense: 0, whoPaid: null },
    { id: 3, name: "Anthony", img: "https://images.freeimages.com/image/previews/e84/buzzy-bean-girl-smiling-cartoon-png-5690326.png?fmt=webp&w=500", msg: "You owe Anthony 98$", sharedValue: 98.0, billValue: 10, expense: 0, whoPaid: null },
]

export default function App() {
    const [friends, setFriends] = useState(listFriends)
    const [selectedFriend, setSelectedFriend] = useState(null)
    const [isAddFriend, setIsAddFriend] = useState(false)

    const handleSelectFriend = (id) => {
        const friend = friends.find(f => f.id === id)
        setSelectedFriend(friend)
    }

    const handleSubmitFormAddFriend = ({ name, url }) => {
        setFriends([...friends, { id: Date.now(), name: name, img: url, msg: "You owe Anthony 98$", sharedValue: 98.0, billValue: 10, expense: 0, whoPaid: null }])
        console.log(friends)
    }

    return (
        <div className="p-4 flex">
            <div className="w-1/2">
                {friends.map(friend => (
                    <Friend
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        img={friend.img}
                        onSelectFriend={handleSelectFriend}
                        sharedValue={friend.sharedValue}
                    />
                ))}
                {isAddFriend ? <AddFriendForm onSubmitForm={handleSubmitFormAddFriend} handleClose={() => setIsAddFriend(!isAddFriend)} /> : <div><button onClick={() => setIsAddFriend(!isAddFriend)} className="bg-blue-300 px-4 py-2 rounded-xl">Add Friend</button></div>}
            </div>

            {selectedFriend && (
                <div className="w-1/2">
                    <Bill
                        billValue={selectedFriend.billValue}
                        expense={selectedFriend.expense}
                        sharedValue={selectedFriend.sharedValue}
                        name={selectedFriend.name}
                    />
                </div>
            )}
        </div>
    )
}