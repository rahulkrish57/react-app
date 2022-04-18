import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import UserContext from "./usercontext";
export default function Userlist() {

    let users = useContext(UserContext);
    let [userList, setUserList] = useState([])

    useEffect(async () => {
        let resp = await fetch("https://61f92a85783c1d0017c449c4.mockapi.io/user")
        let data = await resp.json();
        console.log(data)
        setUserList([...data])
    }, [])

    return <>
        <h3>Tables</h3>
        <Link to="/usercreate">User Create</Link>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>

            </div>
            <div class="card-body">
                {
                    userList.length > 0 ?
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>E-mail</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>E-mail</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    
                                    {
                                    userList.map((obj) => {
                                        return <tr>
                                            <td>{obj.firstName}</td>
                                            <td>{obj.lastName}</td>
                                            <td>{obj.eMail}</td>
                                            <td>{obj.passWord}</td>
                                            <td><Link to={`/useredit/${obj.id}`}>User Edit</Link></td>
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div> :
                        <h1>Loading...</h1>
                }
            </div>

        </div>
    </>
}