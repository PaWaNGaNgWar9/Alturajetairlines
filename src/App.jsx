import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Flight from './pages/Flights';
import Login from './pages/Login';
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
       </Routes>
       </BrowserRouter>
         </div>
    </>
  )
}

export default App;
