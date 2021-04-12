import axios from 'axios'
import  { useState } from 'react'
import { FormType } from './Employee'



const EmployeeForm = () => {


    const initialForm: FormType = { userName: '', firstName: '', lastName: '', email: '', id: 0}

    const [formData, setFormData] = useState<FormType>(initialForm)


    const handleInput = (event: any) => {
        //console.log('Event ', event.target.value)

        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        
        }));

       
    }

    const sendDataToBackend = (e: any) => {

        axios({
            data: formData,
            method: 'POST',
            url: 'http://localhost:8080/employee'
        }).then((response: any) => {
            console.log('formdata : ', formData)
            console.log('response of data', response)
        })

        /**
         * To clear the input fileds after submitting the form, wow this works
         */
        Array.from(document.querySelectorAll('input')).map(
            input => (input.value = '')
        )
            // setFormData = initialForm
        // document.getElementById('create-employee-form')?.onreset()
    }


    return (
        <div>

            <br />

            <div className="container">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    setFormData(initialForm)
                   
                }} id="create-employee-form">
                    <div>
                        <input  onChange={handleInput} name="userName" className="form-control" placeholder="Username" type="text" />
                    </div>
                    <br />
                    <div>
                        <input onChange={handleInput} name="firstName" className="form-control" placeholder="First Name" type="text" />
                    </div>
                    <br />
                    <div>
                        <input onChange={handleInput} className="form-control" name="lastName" placeholder="last Name" type="text" />
                    </div>


                    <br />

                    <div>
                        <input onChange={handleInput} type="text" className="form-control" name="email" placeholder="email" />
                    </div>

                    <br />
                    <div>
                        <button type="submit" onClick={sendDataToBackend} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

          
        </div>
    )
}

export default EmployeeForm;

