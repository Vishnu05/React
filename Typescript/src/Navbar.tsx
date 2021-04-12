import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import EditForm from "./Forms-table/EditForm"
import EmployeeForm from "./Forms-table/EmployeeForm"
import TableDisplay from "./Forms-table/TableDisplay"


function Navbar() {
    return (
        <div>

            <div>
                <nav className="navbar navbar-light bg-light">

                    <BrowserRouter>
                        <ul>
                            <Link to="/">
                                Home
                                 </Link>
                            <Link to="/createform">
                                Create Employee
                                </Link>

                            <Link to="/viewEmployee">
                                View employee
                                 </Link>



                        </ul>

                        <Switch>
                            <Route path="/createform">
                                <EmployeeForm />
                            </Route>
                            <Route path="/viewEmployee">
                                <TableDisplay />
                            </Route>

                            <Route path={`/editform/:data`} component={EditForm} />
                            {/* <Route path={'createform'} component={EmployeeForm} /> */}
                            <Route path={`/viewEmployee`} component={TableDisplay} />
                        </Switch>
                    </BrowserRouter>

                </nav>
            </div>

        </div>
    )
}

export default Navbar
