
import React, { useState } from 'react';

const Users = () => {

    // const Users = {};

    const [user, setUser] = useState({ username: '', email: '' });

    const username = user.username;
    const email = user.email;

    const data = [];

    data.push({ username, email })

    return (
        <div>

            <br />
            <br />
            <div >
                <div>
                    <input type="text" onChange={val => setUser(event => { return { username: event.target.value } })} placeholder="username" palceholder="Username" />
                </div>
                <div>
                    <input type="email" placeholder="email" palceholder="email" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )

}

export default Users;