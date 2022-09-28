import { Link, Route, Routes, } from 'react-router-dom';
import './App.scss';
import SingIn from './Components/singin/SingIn';
import SingUp from './Components/singup/SingUp';
import Home from './Home';

function App() {
  

  return (
    <div className="App">
     <nav className='navbar'>
        <ul className='items'>
          <li className='item'>
            <Link  className='link-item' to='/' 
            >Home</Link>
          </li>
          <li className='item'>
            <Link  className='link-item' to='/singup' >Sing Up</Link>
          </li>
          <li className='item'>
            <Link  className='link-item' to="/singin">Sing In</Link>
          </li>
        </ul>
     </nav>
     <div className='components'>
     <Routes >
      <Route path='/' element={<Home />}/>
      <Route  path='/singup' element={<SingUp />}/>
      <Route path='/singin' element={<SingIn />}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
