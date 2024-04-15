
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NavBarPanel from './NavBar-Panel/Nav-Panel/NavBarPanel';
import  axios from 'axios';
import Footer from './Components/Footer/Footer';



function App() {

  axios.interceptors.request.use(async(config)=>{
    config.headers['projectid'] = "f104bi07c490";
    return config;
  })

  return (
    <div className='main-app'>
<div className="App">



    <BrowserRouter>
     <Navbar />
     <div>
          <NavBarPanel />
         </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element={<Register />} />
      </Routes> 
      < Footer />
     </BrowserRouter> 
    </div>
 
        

    </div>
     );
}

export default App;
