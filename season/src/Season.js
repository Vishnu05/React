import React from 'react';

const Season = () => {
    let a = new Date;
    let today = a.getTime();
    console.log(today)

    return (
        <div>
            Hello season
        </div>
    )
}

export {Season}