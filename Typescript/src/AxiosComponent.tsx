
import React, { Component } from 'react'
import axios from 'axios'


export interface AxiosState {
    jsonData: any,
    firstName: string,
    lastName: string,
    email: string,
    paraData: string,
    inputParaData: string,
    backendData: object,
    stateData: any,
}

export default class AxiosComponent extends Component<{}, AxiosState> {

    constructor(props: any, state: AxiosState) {
        super(props)
        this.state = {
            jsonData: '',
            firstName: '',
            lastName: '',
            email: 'name',
            paraData: 'This is the data which I set in ',
            inputParaData: '',
            backendData: Object,
            stateData: ''
        }

    }

    display() {

        let data = axios.get('http://localhost:8080/api/employee/3')
            .then((result) => {

                console.log('data has been returned successfully : ', result.data)
                // backendData = result.data
                this.setState({ backendData: result.data });
                // console.log('Backend data ', backendData)
                // this.state.jsonData = result
            }).catch((result) => {
                console.log('Promise call got rejected', result)
            })

        console.log('Json data from the backend ', data)
        // this.setState({})
        // console.log('Corrs value : ',corrs)

    }

    debugs() {
        console.log('value of name ')
    }

    postData() {
        axios.post('http://localhost:8080/api/employee', {

            firstName: 'React',
            lastName: 'Js',
            email: 'react@js.org',
        }, {
            headers: {
                'Conent-Type': 'application/xml'
            }
        })
    }

    formValidation() {
        console.log('Validation function work')
        console.log("value of the first name : ")
        if (this.state.firstName === '') {
            alert('Input should not be empty')
        } else {
            alert('Done!')
        }
    }

    stateFunction() {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/react'
        }).then((value) => {

            console.log('React state is ', value)
            this.setState({ stateData: value })
        })
    }
   

    render() {

        // writing js code is not a very good way
        // let a  = 2;
        // console.log('3', a)


        return (
            <div>
                <div>

                    <p onClick={this.display} >Dislay content from backend </p>

                    {/* Error is showing if I do like this? but why  */}
                    {/* <p>Data: {this.state.backendData}</p> */}
                    {/* <input type="text" value={this.state.backendData}/> */}
                    <div>
                        <h5><p onClick={this.stateFunction} >Normal data from backend :</p> </h5>
                        <div><textarea defaultValue={this.state.stateData} cols={10} rows={3}></textarea></div>
                    </div>
                </div>

                <div className="container">
                    <h5> <label>Sending the data to backend, Post method</label> </h5>

                    <div><input type="text" onChange={(val) => this.setState({ firstName: val.target.value })} placeholder="First Name" /></div>
                    <div><input type="text" onChange={(val) => this.setState({ lastName: val.target.value })} placeholder="Last Name" /></div>
                    <div> <input type="email" onChange={(val) => this.setState({ email: val.target.value })} placeholder="Email ID" /></div>
                    <div> <button type="submit" onClick={this.formValidation} className="btn btn-warning">Submit</button></div>


                </div>

                <div>
                    <div><p onClick={this.postData}>Posting the data</p></div>
                    <div>
                        <input type="text" onChange={(val) => this.setState({ inputParaData: val.target.value })} />
                        <p>State data : {this.state.inputParaData}</p>
                        <div>
                            <p onClick={this.debugs}>Whole state data {this.state.email}</p>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}