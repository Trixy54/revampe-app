import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Sign_in from "./Sign_in";
import Sign_up from "./Sign_up";


export default function RouterPage() {
  return (
    <React.Fragment>
    <div>
      <Router>
        <Routes>
        < Route path= "/"   Component={Homepage}/>
          <Route path="/Sign in"  Component={Sign_in}/>
           <Route path="/Sign_up" Component={Sign_up}/>
          
        </Routes>
      </Router>
    </div>
    </React.Fragment>
  );
}
