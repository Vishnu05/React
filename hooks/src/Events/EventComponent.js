
import React, { Component } from 'react'
import DisplayComponent from './DisplayComponent';

export default class EventComponent extends Component {

    constructor(props) {
        super(props);
        // initial state values 
        this.state = {
            user: '',
            userInput: '',
            userInputArrow: '',


        }

        // if we are not binding "this" it will throw an error. 
        // either it can be done this way or via arrow functions 
        this.handleInput = this.handleInput.bind(this)
    }

    arr = [1, 2, 3, 4, 5]
    // if this is not binded when we try to set the state it will throw undefined error
    handleInput(event) {

        this.setState({ userInput: event.target.value })

    }

    // arrow function has this type so this will work
    handleInputArrow = (event) => {
        this.setState({ userInputArrow: event.target.value })
    }


    render() {
        return (
            <div>

                hello

                <div>
                    <input type="text" onChange={
                        // Event has so many things
                        // event target find out what kind of dom are we trying to use or access
                        (event) => {
                            console.log('Event : ', event)
                            console.log('Event Target : ', event.target)
                            this.setState({ user: event.target.value })
                        }}
                    />
                    <button onClick={
                        (event) => {
                            console.log('Button Event target : ', event.target)
                        }
                    }>
                        Click
                    </button>
                </div>

                <div>
                    <input type="text" placeholder="Type.." onChange={this.handleInput} />
                </div>

                <div>
                    <input type="text" placeholder="Arrow functions.." onChange={this.handleInputArrow} />
                </div>

                {this.arr.map((val) => {

                    return <DisplayComponent stateValue={this.state} />
                })}

                {/* This is a void method, since we are using ()*/}
                {this.arr.map(event => (
                    <p>Hello this is void method</p>
                ))}

                {/* Return statement should be must, because we are using {}*/}
                {this.arr.map(event => {
                    return <p>
                        Hello this map has return method
                    </p>
                })}



            </div>
        )
    }
}
