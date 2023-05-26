import React from 'react'
import { Button,Table } from 'react-bootstrap'
import Employees from './Employees'
import { Link,useNavigate } from 'react-router-dom'

export default function Home() {
    let history=useNavigate();
    

    const handleEdit=(id,name,age,city)=>{
        localStorage.setItem('id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('City',city);

    }
    
    const handledelete=(id)=>{
        let index=Employees.map(function(e){
            return e.id;
        }).indexOf(id);
       
        Employees.splice(index,1);
        history('/');
    }
  return (
    
      <>
        <div style={{margin:"10rem"}}>
        <Table striped bordered hover size='sm' >
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 ?
                            Employees.map((e)=>{                               
                                return(
                                    <tr>
                                        <td>
                                            {e.Name}
                                        </td>
                                        <td>
                                            {e.Age}
                                        </td>
                                        <td>
                                            {e.City}
                                        </td>
                                        <td>
                                        <Link to={'/edit'}>
                                            <button  style={{backgroundColor:"blue" }}onClick={()=>handleEdit(e.id,e.Name,e.Age,e.City)}>Edit</button>
                                            </Link>
                                            &nbsp; &nbsp; &nbsp;
                                            <button style={{backgroundColor:"blue" }} onClick={()=>handledelete(e.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "no data available"
                        }
                    </tbody>
                </Table>
                <br />
                <br />
                <Link  className="d-grid gap-2" to={'/create'}>
                    <Button size="lg" >Create</Button>
                </Link>
        </div>
      </>
    
  )
}
