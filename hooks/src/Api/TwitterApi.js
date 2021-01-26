
import React from 'react';
import axios from 'axios'

const TwitterApi = () => {

    const apiCall = () => {
        axios.get('https://randomuser.me/api/')
            .then((data) => {
                console.log('Api data : ', data)
                console.log('Api data request : ', data.request)
                console.log('Api data response : ', data.headers)
            }).catch((err) => {
                console.log('error data : ', err)
            })
    }

    return (
        <div>

            <button onClick={apiCall}>
                Api Call
         </button>
        </div>
    )

}

export default TwitterApi;