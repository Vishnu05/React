
import React from 'react';
import ReactDOM from 'react-dom';


/** Difference between class and function based components */
const Apps = () => {

    let a = new Date;
    let today = a.getTime();
    console.log(today)
    console.log(Date())
    console.log('hi')

    window.navigator.geolocation.getCurrentPosition(
        (position) => { console.log(position) }, err => console.log(err)
    )

    return (
        <div>
            hi there
        </div>
    )
}

class Apppp extends React.Component {

    constructor(props) {
        console.log('hi ...')
        console.log(props)
        super(props)

        /**  what is this ? what it exactly do 
         * if we didn't assing them it works differently and if we assing as object it also works   x
         */
        this.state = { lat: '', errorMessage: '' }
        this.state = { accuracy: '' }
        // this.state({accuracy: ''})

        let loc = window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({ lat: position.coords.latitude })
                this.setState({ lon: position.coords.longitude, time: position.timestamp, accuracy: position.coords.accuracy })

            },
            err => {
                console.log(err)
                this.setState({ errorMessage: err.message })
            }
        )
    }


    /** Render is mandatory or it will thrown an error  */
    render() {


        /** Refactoring the code */

        if (this.state.errorMessage) {
            return (
                <div>
                    Error : {this.state.errorMessage}
                </div>
            )
        };
         if (this.state.lat && !this.state.errorMessage) {
             return(
                 <div>
                     Lat : {this.state.lat}
                 </div>
             )
         }

         /** Something has to retrun or else it would not work as we expected */
         return (
             <div>
                 hi
             </div>
         )
        


       /*  return (
            <div>
                This is class component, Latitude :  {this.state.lat} <br />
                Longitude : {this.state.lon} <br />
                Timestamp : {this.state.time} <br />
                Accuracy : {this.state.accuracy} <br />
                error : {this.state.errorMessage}

            </div> 

        ) */
    }
}

ReactDOM.render(
    <Apppp />, document.querySelector('#root')
    // <Apps />, document.querySelector('#root')
)