import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard'
import {UserProvider} from './usercontext';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Userlist from './userlist';
import Usercreate from './usercreate';
import Useredit from './useredit'



export default function App() {
  return (
    
    <Router>
    <div id="wrapper">
      <Sidebar/>
      <UserProvider>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div class="container-fluid">
              <Routes>
              <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/userlist/*" element={<Userlist/>} />
                <Route path="/usercreate"  element={<Usercreate/>}/>
                <Route path="/useredit/:id" element={<Useredit/>}/>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider> 
    </div>
    </Router>
  );
}


