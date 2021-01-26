
import React, { Component } from 'react'

export default class ClassUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            email: ''


        }
    }

    user = {
        id: 0,
        username: '',
        email: ''
    }

    userA = []
    counter = 0
    addUser = () => {

        this.counter = this.counter + 1;
        this.user = {
            id: this.counter,
            username: this.state.username,
            email: this.state.email
        }
        this.setState({
            users: this.userA.push(this.user)
        })

        // this.userA.push(this.user)
        console.log('user data : ', this.user)
        console.log('Array data : ', this.userA)
        console.log('function is called and the data is : ', this.state.users)
    }

    deleteUser = (id) => {
        console.log('Delete user id request : ', id)

    }

    // users =
    render() {
        return (
            <div>

                <br /><br />
                <div>

                    {/* <form > */}

                    <div>
                        <input type="text" onChange={(val) => this.setState({ username: val.target.value })} />
                    </div>
                    <div>
                        <input type="email" onChange={(val) => this.setState({ email: val.target.value })} />
                    </div>
                    <div>
                        <button type="submit" onClick={this.addUser}> Submit</button>
                    </div>
                    {/* </form> */}
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userA.map(event => (
                            <tr key={event.id}>
                                <td>{event.id}</td>
                                <td>{event.username}</td>
                                <td>{event.email}</td>
                                <td><button onClick={this.deleteUser}>Delete</button></td>


                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}
