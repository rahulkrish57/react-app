import { useContext, useEffect, useState } from 'react';
import UserContext from "./usercontext";
import { Field, Form, Formik } from 'formik';
export default function Usercreate() {
  console.log();
  console.log()
  let userData = useContext(UserContext)
  let [firstName, setFirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [eMail, seteMail] = useState("");
  let [passWord, setpassWord] = useState("");

  let userSubmit = async (e) => {
    e.preventDefault()
    userData.setUserList([...userData.userList, {
      firstName,
      lastName,
      eMail,
      passWord
    }])

    await fetch("https://61f92a85783c1d0017c449c4.mockapi.io/user", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        eMail,
        passWord
      }),
      headers: {
        "content-type": "application/json"
      }
    })
  }




  // Component Lifecycle Hook
  //1. Creating
  useEffect(() => {
    console.log("create");
  }, [])

  //2. updating
  useEffect(() => {
    console.log("updating FN");
  }, [firstName])

  // 3. Destroy
  useEffect(() => {
    return () => {
      console.log("Destroy");
    }
  }, [])

  return <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>User Form</h3>
        </div>
      </div>
  
      <Form>
        <div className="row">
          <div className="col-lg-6">
            <label>Username</label>
            <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="col-lg-6">
            <label>Lastname</label>
            <Field className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>E-mail</label>
            <Field className="form-control" value={eMail} onChange={(e) => seteMail(e.target.value)} />
          </div>
          <div className="col-lg-6">
            <label>Password</label>
            <Field className="form-control" value={passWord} onChange={(e) => setpassWord(e.target.value)} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <Field className="btn btn-primary" type="submit" value="submit" />
          </div>
        </div>
        </Form>
   



    </div>

  </>

}    
