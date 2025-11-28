import React, { useState } from "react";

function Registration({regData}) {
const [name, setname]=useState();
const [email, setemail]=useState();
const [password, setpassword]=useState();

function getData(e){
    e.preventDefault();
    // alert("Hiii " + name + " your email is " + email + " and password is " + password);
    const data={
        name,
        email,
        password,
    }
    regData(data);
    console.log(data);

}



  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            onChange={(e)=>setname(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            onChange={(e)=>setemail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            onChange={(e)=>setpassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit"  onClick={getData} class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;