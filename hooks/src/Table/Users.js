
import React, { useState } from 'react';
import UserList from './UserList';

const Users = (props) => {

    const [user, setUser] = useState([{ id: 0, username: '', email: '' }]);

    const username = user.username;
    const email = user.email;
    let id = user.id;

   


    const handleSubmit = (e) => {
        e.preventDefault();
        id = id + 1;
        setUser(e => e.push({ id, username, email }))
        // setData(userData.push({ id, username, email }))
        // userData.push()
        console.log('data array ', user)
    }

    return (
        <div>


            <div >
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* why do we need rest parameters? and what exactly it does  */}
                        <input type="text" placeholder="Username" onChange={val => setUser(event => { return { ...event, username: val.target.value } })} palceholder="Username" />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" onChange={val => setUser(e => { return { ...e, email: val.target.value } })} palceholder="email" />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>

                {/* <UserList  */}
            </div>
        </div>
    )

}

export default Users;