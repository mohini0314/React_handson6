import React, { useContext } from 'react';
import './Student.css';
import NavComponent from './NavComponent';
import ContextData from '../ContextApi/ContextApi';
import { Link, useNavigate } from 'react-router-dom';



function Student() {
  const dataContext = useContext(ContextData);
  const navigate = useNavigate();
  const handlenav=()=>{
    navigate("/Addstudent");
  }
  return (
    <div>
      <NavComponent/>
      <div className='student'>
        <h3>Students Details</h3>
        <button className='btn' onClick={handlenav}>Add new Student</button>
      </div>
      <div className='tablediv'> 
      <table className='tabledata'>
      <thead>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>

      </thead>
        {dataContext.entries.map((item,index)=>{
          return(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.course}</td>
          <td>{item.batch}</td>
          <td><Link to ="/UpdateStudent" state={{data:index}}>Edit</Link></td>
        </tr>
          )
        })}
        
      </table>
      </div>
    </div>
  )
}

export default Student;
