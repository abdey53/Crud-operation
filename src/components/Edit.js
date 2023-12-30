import React, { useEffect, useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"
import Employees from './Employees';

function Edit() {
    const [name, setname]=useState("");
    const [age, setage]=useState("");
    const [id, setid]=useState("");
    const history = useNavigate();

    let ii = Employees.map((y)=>{
return(
    y.id
)
    }).indexOf(id);

    const handlesubmit=(e)=>{
e.preventDefault();

let a = Employees[ii];
a.name = name;
a.age = age;

history('/');
    }
    useEffect(()=>{
setname(localStorage.getItem('name'))
setage(localStorage.getItem('age'))
setid(localStorage.getItem('id'))
    },[])

  return (
    <div>
      <h1>Edit this</h1>
      <input className="form-control mb-2" type="text"  value={name} onChange={(e)=>(setname(e.target.value))} placeholder="Enter Your Name" />
    
    <input className="form-control" type="text"  placeholder='Enter Your Age' value={age} onChange={(e)=>setage(e.target.value)}  />
    
    <br/>
    <div className="d-grid gap-2 col-12 mx-auto ">
      <button className="btn btn-danger" onClick={(e)=>handlesubmit(e)}>submit</button>
    </div>
    
    </div>
  )
}

export default Edit
