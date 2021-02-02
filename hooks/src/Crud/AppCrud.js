
import React, { useState } from 'react'
import AddUserForm from './AddUserForm'
import UserTable from './UserTable'

const AppCrud = (props) => {

    // dummy data 
    const userData = [
        { id: 1, name: 'phones', username: 'samsung' },
        { id: 2, name: 'lap', username: 'hp' },
        { id: 3, name: 'apple', username: 'ipad' }
    ]

    const [users, setUsers] = useState(userData)
    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: '' }

    const [currentUser, setCurrentUser] = useState(initialFormState)

    const addUser = user => {
        user.id = users.length + 1
        // take all the data from array. Rest parameters and new data       
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }


    return (
        <div>

            <h3>Addusers</h3>
            <AddUserForm addUser={addUser} editRow={editRow} deleteUser={deleteUser} />

            <div>
                <h3>View users</h3>
                <UserTable users={users} />
            </div>

        </div>
    )
}

export default AppCrud
