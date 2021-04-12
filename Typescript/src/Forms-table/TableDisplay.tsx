import { useState, useEffect } from 'react'
import axios from 'axios';
import { FormType } from './Employee';
import {useParams, useHistory} from 'react-router-dom';

function TableDisplay( props: any) {

    const [empArrayData, setData] = useState<FormType[]>([]);
    const [edit, setEdit] = useState<FormType>();


    /** without useEffect the axios get method, this is rendering to much
     * and cause issue ran out of memory issue in chrome tab. Rendering infinityy
     */
    useEffect(() => {
        axios.get('http://localhost:8080/employee').
            then((response) => {
                // console.log('Data from the backend', response.data)
                setData(response.data)
                console.log('Data from the backend')
                //    returnta;

            })
        /** This empty array is important */
    }, [])

    console.log('render ')


    const deleteEmployeeById = (data: FormType) => {

        const del = axios.delete('http://localhost:8080/employee/' + data.id);
        console.log('Deleted value ', del)

        console.log('before deleting the record ', empArrayData)

        setData(empArrayData.filter(empId => empId.id !== data.id))
        // empArrayData.filter(empId => empId.id !== data.id);
        console.log('after deleting ', empArrayData)
    }

    const history = useHistory()
    const editEmployeeById = (editData: FormType) => {

        const id = editData.id;

        // const { data: any } = useParams;

        history.push(`/editform/${id}`)
        // history.push('/createform')
        // props.history.push(`/editform`)
        // console.log('')
        console.log('Edit function called', editData);
      

    }

    return (
        <div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>No</th> */}
                            <th>Email</th>
                            <th>User Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empArrayData.map((iter: FormType, i: any) => (

                            <tr key={iter.id}>
                                {/* <td>{i}</td> */}
                                <td>{iter.email}</td>
                                <td>{iter.userName}</td>
                                <td>{iter.firstName}</td>
                                <td>{iter.lastName}</td>
                                <td>
                                    <button onClick={() => editEmployeeById(iter)} className="btn btn-primary">
                                            Edit
                                    </button>
                                    <button onClick={() => deleteEmployeeById(iter)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>

                        ))}
                        <tr><td>
                        </td></tr>
                    </tbody>
                </table>
            </div>

            <div>


            </div>

        </div>
    )
}

export default TableDisplay


