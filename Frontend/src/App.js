import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { NaviBar } from './components/NaviBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { LoginForm } from './components/LoginForm';
import { RegistrationForm } from './components/RegistrationForm';
import { ExerciseLog } from './components/ExerciseLog';
import { LogLists } from './components/LogLists';
import { ExerciseLogEdit } from './components/ExerciseLogEdit';




function App() {
  return (
    
    <div>
    <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<LoginForm/>}></Route>
    <Route path="/register" element={<RegistrationForm />} />
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/exerciselog' element={<ExerciseLog/>}></Route>
    {/* <Route path='/register' element={<RegistrationForm/>}></Route> */}
    <Route path='/loglists' element={<LogLists/>}></Route>
    <Route path='/edit/:username' element={<ExerciseLogEdit/>}></Route>
   </Routes>
   
   </BrowserRouter>
   </div>
  );
}

export default App;
