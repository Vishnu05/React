
import React, { useState } from 'react';

const AddUserForms = (props: any) => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;

        console.log('Event in adduserforms : ', event)

        setUser({ ...user, [name]: value })
    }


    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault()
                if (!user.name || !user.username) { }
                props.addUser(user)
                setUser(initialFormState)

            }}
            >
                <label >Name</label>
                <input type="text" value={user.name} onChange={handleInputChange} />
                <label>Username</label>
                <input type="text" value={user.username} onChange={handleInputChange} />
                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUserForms