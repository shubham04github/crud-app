import React from 'react'
import { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { Form } from 'react-bootstrap'




export default function Edit() {
    const [id,setid]=useState('');
    const [name,setname]=useState('');
const [age,setage]=useState('');
const [city,setcity]=useState('');
let history=useNavigate();

let index=Employees.map(function(e){
    return e.id;
}).indexOf(id);

 


const handlesubmit=(e)=>{
    e.preventDefault();
    let a=Employees[index];
    
    a.Name=name;
    a.Age=age;
    a.City=city;
 
    history('/');


}

useEffect(()=>{
        setid(localStorage.getItem('id',id))
        setname(localStorage.getItem('Name'))
        setage(localStorage.getItem('Age'))
        setcity(localStorage.getItem('City'))
},[])
  return (
    <div>
             <Form className="d-grid gap-2" style={{margin:"10rem"}}>
                    <label style={{fontSize:"30px"}} htmlFor="Enter name" >Enter name</label>
                    <input style={{backgroundColor:"yellow"}} type="text" value ={name}placeholder='Enter Name' required onChange={(e)=>setname(e.target.value)}/>
                    <br />
                    <label style={{fontSize:"30px"}} htmlFor="Enter age">Enter age</label>
                    <input  style={{backgroundColor:"yellow"}}type="text" value={age} placeholder='Enter Age' required onChange={(e)=>setage(e.target.value)}/>
                    <br />
                    <label style={{fontSize:"30px"}} htmlFor="Enter city">Enter city</label>
                    <input style={{backgroundColor:"yellow"}} type="text" value={city} placeholder='Enter City' required onChange={(e)=>setcity(e.target.value)}/>
                    <br />
                    <input style={{backgroundColor:"white"}}type="submit" value="update" onClick={(e)=>handlesubmit(e)}/>
            </Form>
    </div>
  )
}
