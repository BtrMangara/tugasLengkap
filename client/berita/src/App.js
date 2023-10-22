import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posting from './components/Posting';
import ContactUs from './components/ContactUs';
import Login from './components/Login';


function App() {
      const setToken = (data) => {
        sessionStorage.setItem('userdata', JSON.stringify(data.data))
      }
    const getToken = () => {
        const tokenString = sessionStorage.getItem('userdata')
        return JSON.parse(tokenString)
    }
    const token = getToken()
    if (!token) {
        return <Login setToken={setToken}/>
    }

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<Navbar/>}>
              <Route index element={<Home/>}/>
              <Route path=''></Route>
              <Route path='Posting' element={<Posting/>}></Route>
              <Route path='ContacUs' element={<ContactUs/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
