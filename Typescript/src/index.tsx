
import React from 'react'
import ReactDOM from 'react-dom'
import InputComponent from './InputComponent'
import TextAreaComponent from './TextAreaComponent'
import TimerComponent from './TimerComponent'
import PropsComponent from './PropsComponent'
import AxiosComponent from './AxiosComponent'
import ClickComponent from './ClickComponent'
import Hooks from './Hooks'

const App = () => {
    return (
        <div>
            <TimerComponent />
            <InputComponent />
            <TextAreaComponent />
            <PropsComponent />
            <AxiosComponent />
            <ClickComponent />
            <Hooks />

        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)