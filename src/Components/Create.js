import React from 'react'
import {v4 as uuid} from "uuid";
import Employees from './Employees';
 import Button from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
export default function Create() {
            const [name,setname]=useState('');
            const [age,setage]=useState('');
            const [city,setcity]=useState('');
            let history=useNavigate();

            const handlesubmit=(e)=>{
                e.preventDefault();
                let ids=uuid();
                let uniqueid=ids.slice(0,8);
                let a=name,
                b=age,
                c=city;
                Employees.push({id : uniqueid,Name : a,Age : b,City : c});
                history('/');


            }
  return (
    <div>
            <Form className="d-grid gap-2" style={{margin:"10rem"}}>
                    
                    <label style={{fontSize:"30px"}} htmlFor="Enter name" >Enter name</label>
                    <input style={{backgroundColor:"yellow"}} type="text" name="" id="" placeholder='Enter Name' required onChange={(e)=>setname(e.target.value)}/>
                    <br />
                    <label style={{fontSize:"30px"}} htmlFor="Enter name">Enter age</label>
                    <input  style={{backgroundColor:"yellow"}}type="text" name="" id="" placeholder='Enter Age' required onChange={(e)=>setage(e.target.value)}/>
                    <br />
                    <label style={{fontSize:"30px"}} htmlFor="Enter name">Enter city</label>
                    <input style={{backgroundColor:"yellow"}} type="text" name="" id="" placeholder='Enter City' required onChange={(e)=>setcity(e.target.value)}/>
                    <br />
                    <input style={{backgroundColor:"white"}}type="submit" value="submit" onClick={(e)=>handlesubmit(e)}/>


            </Form>

    </div>
  )
}