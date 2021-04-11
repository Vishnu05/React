import React, { Component } from 'react'

interface FormValidatioProps {
    username: any,
    email: any,
    password: any,
    user: any,
}
export default class FormValidation extends Component<{}, FormValidatioProps> {

    constructor(props: any, state: FormValidatioProps) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            user: []
        }
    }

    // fieldUpdate(e: any) {
    //     this.setState({  })
    // }

    addUser = () => {
        const username = this.state.username
        const email = this.state.password
        const password = this.state.password

        const userObject = {
            username: username,
            email: email,
            password: password
        }



        // this.setState({
            
        //     [...this.state.user, user: this.state.user.push(userObject)]
        // })

        console.log('submitted the form', this.state.user)

    }
    render() {
        return (
            <div>


                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                    }}>

                        <input type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="Username" />
                        <input type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <input type="password" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        <button onClick={this.addUser} type="submit">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}
