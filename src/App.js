import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Student from './Components/Student';
import Error from './Components/Error';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Student' element={<Student/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
