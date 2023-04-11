import React from 'react';
import NavComponent from './NavComponent';
import { useContext } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import ContextData from '../ContextApi/ContextApi';
import './Addstudent.css';

const UpdateStudent = () => {
    const dataContext = useContext(ContextData);
    const index = useLocation().state.data;
    const navi =useNavigate();
    console.log(index);
    console.log(dataContext);
    const updateData={
        name:dataContext.entries[index].name ,
        age:dataContext.entries[index].age,
        course:dataContext.entries[index].course,
        batch:dataContext.entries[index].batch,


    }
    const handleChange=(e)=>{
        updateData[e.target.name]= e.target.value;
        updateData[e.target.age]= e.target.value;
        updateData[e.target.course]= e.target.value;
        updateData[e.target.batch]= e.target.value;

    }
    const handleSubmit= ()=>{
        dataContext.entries[index] = updateData;
        navi(-1);
        console.log(dataContext)
    }
    const handleCancel= ()=>{
      navi('/Student');
    }
  return (
    <div>
      <div><NavComponent/></div>
      <div>
      <input className='input1' placeholder={dataContext.entries[index].name} name="name"  onChange={handleChange}/>
      <input className='input2' placeholder={dataContext.entries[index].age} name="age" onChange={handleChange} />
      <input className='input3' placeholder={dataContext.entries[index].course} name="course" onChange={handleChange} />
      <input className='input4' placeholder={dataContext.entries[index].batch} name="batch" onChange={handleChange} />

    <button className='submit' onClick={handleSubmit}>Update</button>
    <button  className='cancel' onClick={handleCancel} >Cancel</button>
    </div>
    </div>
  )
}

export default UpdateStudent;
