import React from 'react';
import './Student.css';
import NavComponent from './NavComponent';



function Student() {
  return (
    <div>
      <NavComponent/>
      <div className='student'>
        <h3>Students Details</h3>
        <button className='btn'>Add new Student</button>
      </div>
      <div className='tablediv'> 
      <table className='tabledata'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        <tr>
          <td>John</td>
          <td>24</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='*'>Edit</a></td>
        </tr>
        <tr>
          <td>Doe</td>
          <td>25</td>
          <td>MERN</td>
          <td>November</td>
          <td><a href='*'>Edit</a></td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>26</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='*'>Edit</a></td>
        </tr>
        <tr>
          <td>Barar</td>
          <td>22</td>
          <td>MERN</td>
          <td>September</td>
          <td><a href='*'>Edit</a></td>
        </tr>
        <tr>
          <td>Christ</td>
          <td>23</td>
          <td>MERN</td>
          <td>October</td>
          <td><a href='*'>Edit</a></td>
        </tr>
        <tr>
          <td>Elent</td>
          <td>24</td>
          <td>MERN</td>
          <td>November</td>
          <td><a href='*'>Edit</a></td>
        </tr>
      </table>
      </div>
    </div>
  )
}

export default Student
