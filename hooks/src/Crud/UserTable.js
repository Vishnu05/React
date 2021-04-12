import React from 'react'

const UserTable = props => {

    console.log("Props data ", props)

    return (
        <div>
            <table className="table">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {/* We gonna check if there is any data or not, if no data display none else iterate the data through map*/}
                    {props.users.length > 0 ? (
                        props.users.map((user) => (
                            <tr key={user.id}>

                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button
                                    // onClick={() => {
                                    //     props.editRow(user)
                                    // }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => props.deleteUser(user.id)}
                                    >
                                        Delete</button>
                                </td>

                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={4}>
                                    No users
                            </td>
                            </tr>
                        )}

                </tbody>

            </table>
        </div>
    )
}

export default UserTable
