
import React from 'react'
import Users from './Users'

function UserList(props) {


    return (
        <div>
            <br />

            <h4>User Registration</h4>
            <Users />
            <div>
                <h5>List of users</h5>
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {props} */}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default UserList
