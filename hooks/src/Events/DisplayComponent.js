import React from 'react'

function DisplayComponent(props) {
    return (
        <div>

            <p>
                Displaying the Props {props.stateValue.userInput}
            </p>
            <p>
                Props <strong>
                    {props.stateValue.userInputArrow}
                </strong>
            </p>
        </div>
    )
}

export default DisplayComponent
