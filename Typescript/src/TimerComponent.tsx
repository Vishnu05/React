

import React, { Component } from 'react'

export interface TimerState {
    date: Date
}
export default class TimerComponent extends Component<{}, TimerState> {

    constructor(props: any, state: TimerState) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    timerId = setInterval(() => { this.tick() }, 1000)


    // this is not working, due to the timerID
    // componentDidMount() {
    //    var timerID = setInterval(
    //         () => this.tick, 1000
    //     )      
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div>
                <h5>Time is : {this.state.date.toLocaleTimeString()} </h5>

            </div>
        )
    }

}

