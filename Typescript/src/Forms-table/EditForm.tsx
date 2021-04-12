import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { FormType } from "./Employee"


function EditForm(props: any) {

    const initialFormValue: FormType = { id: 0, firstName: '', lastName: '', email: '', userName: '' }
    const [employee, setEmploye] = useState<FormType>(initialFormValue)

    /** With props we can get the uri params value */
    const id: number = props.match.params.data;
    useEffect(
        () => {
            axios.get(`http://localhost:8080/employee/${id}`)
                .then((response: any) => {
                    setEmploye(response.data)
                })
        }, [])

    const history = useHistory();
    const updateEmployee = () => {
        console.log('updated data ', employee)
        axios({
            method: "put",
            url: `http://localhost:8080/employee/${id}`,
            data: employee
        })

        Array.from(document.querySelectorAll('input')).map(
            input => (input.value = '')
        )


        history.push('/viewEmployee')

    }




    // console.log('Value of employee', employee)
    console.log('props values', props.location.pathname, 'Params match ', props.match.params.data)
    const handleInput = ((event: any) => {

        setEmploye((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value

        }));
    })



    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();

                // setEmploye(initialFormValue)
            }} id="create-employee-form">
                <div>
                    <input onChange={handleInput} name="userName" defaultValue={employee?.userName} className="form-control" placeholder="Username" type="text" />
                </div>
                <br />
                <div>
                    <input onChange={handleInput} name="firstName" defaultValue={employee?.firstName} className="form-control" placeholder="First Name" type="text" />
                </div>
                <br />
                <div>
                    <input onChange={handleInput} className="form-control" defaultValue={employee?.lastName} name="lastName" placeholder="last Name" type="text" />
                </div>


                <br />

                <div>
                    <input onChange={handleInput} type="text" className="form-control" defaultValue={employee?.email} name="email" placeholder="email" />
                </div>

                <br />
                <div>
                    <button type="submit" onClick={updateEmployee} className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default EditForm;
