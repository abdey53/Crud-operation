import React, { useState } from 'react'
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom'
import{v4 as uuid}from "uuid";

function Add() {
    const history = useNavigate();
    const [name , setname]=useState("");
    const [age , setage]=useState("");

    const handlesubmit=(e)=>{
// e.preventDefault();

const ids = uuid();
// let uniqueid = ids.slice(1,2);

// let a=name, b=age;

Employees.push({id: ids, name : name, age : age})
history('/');
    }

  return (
    <div>
      <h1>Adding</h1>
      <input className="form-control mb-2" type="text"  onChange={(e)=>(setname(e.target.value))} placeholder="Enter Your Name" />
    
<input className="form-control" type="text"  placeholder='Enter Your Age' onChange={(e)=>setage(e.target.value)}  />

<br/>
<div className="d-grid gap-2 col-12 mx-auto ">
  <button className="btn btn-danger" onClick={(e)=>handlesubmit()}>submit</button>
</div>

    </div>
  )
}

export default Add
