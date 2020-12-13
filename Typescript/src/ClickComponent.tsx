
import React, { Component, } from 'react'

export interface ClickState {
    count: number;
}

// let counts = 1
export default class ClickComponent extends Component<{}, ClickState> {

    constructor(props: any, state: ClickState) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // counts = 1
    click = () => {
        let value = this.state.count + 1
        console.log('Function is called ')
        this.setState({ count: value })
    }

    render() {
        return (
            <div>

                <div>
                    <button onClick={this.click}>Click Me</button>
                    <p>Clicked {this.state.count} times </p>
                </div>

            </div>
        )
    }
}