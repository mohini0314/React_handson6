import React from 'react';
import ContextData from '../ContextApi/ContextApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './Addstudent.css';
import NavComponent from './NavComponent';

function Addstudent() {
  const data = useContext(ContextData);
  const nav = useNavigate();
  const newStu = {
    name: '',
    age: '',
    course: '',
    batch:''
  }

  const handleChange = (e) => {
    newStu[e.target.name] = e.target.value;
    newStu[e.target.age] = e.target.value;
    newStu[e.target.course] = e.target.value;
    newStu[e.target.batch] = e.target.value;
  }

  const handleSubmit = () => {
    data.entries.push(newStu);
    nav('/Student');
    console.log(data);
  }
  const handleCancel= ()=>{
    nav('/Student');
  }


  return (    
    <div>
      <div><NavComponent/></div>
  <input className='input1' placeholder='Enter Name' name='name' onChange={handleChange}  /><br />
  <input className='input2' placeholder='Enter age' name='age' onChange={handleChange} /><br />
  <input className='input3'placeholder='Enter course' name='course' onChange={handleChange}/><br />
  <input className='input4'placeholder='Enter batch' name='batch' onChange={handleChange}/><br />

  <button  className='submit' onClick={handleSubmit} >Submit</button>
  <button  className='cancel' onClick={handleCancel} >Cancel</button>

  </div> 
  )
}

export default Addstudent ;

