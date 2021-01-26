
import React, { Component } from 'react'

export interface textAreaState {
    textField: any
}

export default class TextAreaComponent extends Component<{}, textAreaState>{

    constructor(props: any, state: textAreaState) {
        super(props);
        this.state = {
            textField: ''
        }
    }

    textSubmit() {
        console.log('Input is submitted')
    }

    render() {
        return (
            <div>
                <div>
                    <label>Text Area</label>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>


                <div>
                    <input type="text" placeholder="this is working" id="" />
                    <span>  <button className="btn btn-primary" onClick={this.textSubmit} type="submit">Submit</button> </span>
                </div>

            </div>
        )
    }
} 
