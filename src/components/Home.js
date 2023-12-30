import React from 'react'
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
const navigate = useNavigate();

const handleDelete=(id)=>{
  var rrr = Employees.map((e)=>{
    return(
      e.id
    )
  }).indexOf(id)
  Employees.splice(rrr,1);

navigate("/")
}
const handleEdit=(id , name , age)=>{
localStorage.setItem('name', name )
localStorage.setItem('age', age )
localStorage.setItem('id', id )
}

  return (
    <div className='container mt-5 '>
      <table class="table">
  <thead>
    <tr>
      {/* <th scope="col">id</th> */}
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
{
  Employees && Employees.length > 0 
  ?
  Employees.map((item)=>{
    return(
    <tr> 
      {/* <td> {item.id}</td> */}
      <td>{item.name} </td>
      <td>{item.age} </td>
      <td>
   <Link to={"/Edit"}>
        <button onClick={()=>handleEdit(item.id , item.name , item.age)}> EDIT</button>
   </Link>
      &nbsp; &nbsp;
      <button onClick={()=>handleDelete(item.id)}> DELETE</button> 
       </td>
    </tr>
    )
  })
  : "NO DATA AVAILABLE"
}
  </tbody>
</table>
<Link to={'/Create'}>
<div className="d-grid gap-2 col-12 mx-auto ">
  <button className="btn btn-danger">Create</button>
</div>
</Link>
</div>

)
}

export default Home
