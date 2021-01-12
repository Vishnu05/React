
import React from 'react';

export interface UserState {
    users: any
}
const UserTable = (props: any) => {
    console.log('Props value from the usertable ', props, ' : ', props.users.length)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user: any) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="button muted-button">Edit</button>
                                    <button className="button muted-button">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )}
                   
                </tbody>
            </table>
        </div>
    )

}

export default UserTable;