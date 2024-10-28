import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup.js';
import Dashboard from './components/Dashboard.js';
import Login from './components/Login.js';

//https://www.w3schools.com/react/react_router.asp

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
        <Route path={'/login'} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
