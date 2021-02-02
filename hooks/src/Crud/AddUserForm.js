import React, { useState } from 'react'

const AddUserForm = props => {

    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)
    // const username = user.username;
    // const name = user.name;

    // const handleInputChange = event => {
    //     const { name, value } = event.target
    //     // name = event.target.value
    //     // console.log('Add user name and value : ', name, ' : ', value)
    //     setUser({ ...user, [name]: value })
    //     // console.log('handle ', { ...user, [name]: value })
    // }

    return (
        <div>

            <form onSubmit={(event) => {
                event.preventDefault();

                // if (!user.name || !user.username) return

                props.addUser(user)
                
                console.log('users : ', user)
                setUser(initialFormState)
            }}
            >

                <div>
                    <input type="text" defaultValue={user.name} onChange={(event) => {
                        setUser({ ...user, name: event.target.value })
                    }} placeholder="Name" />

                </div>
                <div>
                    <input type="text" defaultValue={user.username} onChange={(event) => {
                        setUser({ ...user, username: event.target.value })
                    }} placeholder="username" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddUserForm
