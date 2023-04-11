import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Student from './Components/Student';
import Error from './Components/Error';
import { useState } from 'react';
import ContextData from './ContextApi/ContextApi';
import UpdateStudent from './Components/UpdateStudent';
import Addstudent from './Components/Addstudent';

function App() {
  const [data,setData]= useState([
    {name:"John",age:"24", course:"MERN", batch:"October"},
    {name:"Doe",age:"25", course:"MERN", batch:"November"},
    {name:"Biden",age:"26", course:"MERN", batch:"September"},
    {name:"Barar",age:"22", course:"MERN", batch:"September"},
    {name:"Christ",age:"23", course:"MERN", batch:"Octobe"},
    {name:"Elent",age:"24", course:"MERN", batch:"November"},

  ])
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Student' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
              <Student />
            </ContextData.Provider>
          }/>
          <Route path='/Addstudent' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <Addstudent />
          </ContextData.Provider>
          }/>
          <Route path='/UpdateStudent' element={
            <ContextData.Provider value={{entries: data, updateData: setData}}>
            <UpdateStudent />
          </ContextData.Provider>
          }/>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
