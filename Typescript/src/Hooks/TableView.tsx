import React, { useState } from 'react'
import Form from './Form'

export default function TableView(props: any) {

    const dataUsers = [
        { id: 1, name: 'jon', email: 'jon@mail.com' },
        { id: 2, name: 'jimmey', email: 'jimmey@mail.com' },
        { id: 3, name: 'james', email: 'james@mail.com' }
    ]

    const [user, setUser] = useState(dataUsers)

    // const initialValue = { id: null, name: '', email: '' }


    const addUser = (users: any) => {
        users.id = user.length + 1;
        setUser([...user, users])
        console.log('Set users value for adding ', [...user, users])
    }

    console.log('Value of the state is ', user)

    return (

        <div>

            <Form />

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(param => (
                            <tr key={param.id}>
                                <td>{param.id}</td>
                                <td>{param.name}</td>
                                <td>{param.email}</td>
                                <td>
                                    <button className="btn btn-primary">Edit</button> &nbsp;
                                <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

                <div>
                    <p>Add users</p>
                    <Form addUser={addUser} />
                </div>
            </div>
        </div>
    )
}

