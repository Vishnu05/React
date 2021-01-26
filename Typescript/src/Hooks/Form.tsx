
import React, { useState } from 'react';

export default function Form(props: any) {

    const initialValue = { id: null, name: '', email: '' }
    const [user, setUser] = useState(initialValue)

    const handleInput = (event: any) => {
        const { name, value } = event.target;

        setUser({ ...user, [name]: value })
        console.log('Form component adding a new user : ', { ...user, [name]: value })
    }

    return (
        <div className="container">

            <form >
                <div>
                    <label>Username</label>

                </div>
                <div>
                    <input type="text" placeholder="Username"  onChange={handleInput} required />

                </div>



                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type="email" placeholder="email"  onChange={handleInput} required />
                </div>

                <div>
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>


        </div>
    )
}