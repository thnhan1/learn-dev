import { useState } from "react"

export default function AddFriendForm({ handleClose, onSubmitForm }) {
    const [formData, setFormdata] =
        useState({
            friendName: "",
            imageUrl: ""
        })
    const handleChangeForm = (e) => {
        const { name, value } = e.target
        setFormdata({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitForm({ name: formData.friendName, url: formData.imageUrl })
        console.log(formData)
    }


    return (
        <div className="p-8 py-6 w-1/2 bg-yellow-50">
            <form className="space-y-4">
                <div className="flex items-center">
                    <label className="w-1/3 text-right pr-4">👭 Friend name</label>
                    <input
                        name="friendName"
                        value={formData.friendName}
                        onChange={(e) => handleChangeForm(e)}
                        type="text"
                        className="w-2/3 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex items-center">
                    <label className="w-1/3 text-right pr-4">🌄 Image URL</label>
                    <input
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={(e) => handleChangeForm(e)}
                        type="text"
                        className="w-2/3 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button onClick={(e) => handleSubmit(e)} className="w-2/3 bg-orange-400 text-white py-2 rounded">Add</button>
                </div>
            </form>
            <div className="flex justify-end">
                <button className="bg-orange-400 text-white py-2 mt-4 rounded px-2" onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}
