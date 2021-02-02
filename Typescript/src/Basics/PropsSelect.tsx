import React, { Component } from 'react'

export default class PropsSelect extends Component {

    state = {
        projectName: 'hello',
        catalouge: 'account',
        user: {
            username: 'Admin',
            password: '123'
        },
        userList: [
            { user: 1 }
        ]

    }
    render() {
        return (
            <div>

                <div>
                    {/* Project name : {this.props.data.projectName}  <br />
                Catalouge name: {this.props.data.catalouge}

                <br />
                Username: {this.props.data.user.password}
                <br />
                userlist: {this.props.data.userList[0].user} */}
                </div>


                {/* Iterating over nested array and with select and options */}
                {/* <table>
                    <tbody>
                        {this.props.project.map((key: any) => (
                            <tr key={key.id}>
                                <td>{key.id}</td>
                                <td>{key.projectName}</td>

                                <td>
                                    <select>
                                        {key.catalougeName.map((val: any) => (
                                            <option value="" key={val.id}> {val.catalouge}</option>
                                        ))}
                                    </select>
                                </td>

                                <td>
                                    <a href="#/"><i className="far fa-edit"></i></a> &nbsp;
                                                <a href="#/"><i className="far fa-trash-alt"></i></a>
                                </td>

                                {key.catalougeName.map((val: any) => (

                                    <select>
                                        <td key={val.id}>

                                            <option value={val.catalouge}>{val.catalouge}</option>

                                        </td>
                                    </select>
                                ))}

                            </tr>
                        ))}
                    </tbody>

                </table> */}
            </div>
        )
    }
}
