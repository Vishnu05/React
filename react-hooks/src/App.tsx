import React, { useState } from 'react';
import UserTable from './table/UserTable';
import AddUserForms from './table/UserTable'

const App = () => {


    const userDate = [
        { id: 1, name: 'NBA', username: 'lebron' },
        { id: 2, name: 'GSW', username: 'curry' },
        { id: 3, name: 'NETS', username: 'kd' }
    ]

    const [users, setUsers] = useState(userDate)

    console.log('users lenght', users, ' len ', users.length)

    const addUser = (user: any) => {
        user.id = users.length + 1;

        setUsers([...users, user]);
    }
    return (

        <div className="container">
            <h1>Hook Application</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add users</h2>
                    <AddUserForms addUser={addUser} />
                </div>
                <div>
                    <h2>View users </h2>
                    <UserTable users={users} />
                </div>
            </div>


        </div>

    )

}

export default App;