import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
function Login({logData}) {
    const [email, setemail]=useState();
    const [password, setpassword]=useState();

     const navigate=useNavigate();
    function verification(e){
        e.preventDefault();
        // console.log(logData);
       // alert(email + " " + password);
        if(logData.email===email){

          if(logData.password===password){
            alert("Successfully login and navigating to dashboard");
            navigate('/dashboard');
          }else{
            alert("Password is not correct");
          }
        }else{
          alert("Email is not registered with us");
        }
    }
  return (
    <div>
      <h2>Login Form</h2>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={verification} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Login;