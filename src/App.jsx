import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Flight from './pages/Flights';
import SignUp from './pages/signup';
import Login from './pages/Login';
import TarifSheet from './pages/TarifSheet';
import Managebooking from './pages/Managebooking';
import './App.css'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/flights" element={<Flight />} />
             <Route path="/login" element={<Login/>}/>
             <Route path="/signup" element={<SignUp/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/tarifsheet" element={<TarifSheet/>}/>
             <Route path="/manage-booking" element={<Managebooking/>}/>
       </Routes>
       </BrowserRouter>
         </div>
    </>
  )
}

export default App;
