import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Headers from './components/headers';
import CartDetails from './components/cartDetails';
import {Route,Routes} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Success from './components/success';
import Cancel from './components/cancel';

function App() {
  
  return (
    <>
      <Headers/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartDetails/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
