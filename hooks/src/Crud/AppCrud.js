
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

    const addUser = user => {
        user.id = users.length + 1
        // take all the data from array. Rest parameters and new data       
        setUsers([...users, user])
    }

    return (
        <div>

            <h3>Addusers</h3>
            <AddUserForm addUser={addUser} />

            <div>
                <h3>View users</h3>
                <UserTable users={users} />
            </div>

        </div>
    )
}

export default AppCrud
