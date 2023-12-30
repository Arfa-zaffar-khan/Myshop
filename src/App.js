import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Pd from './pages/Pd';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import ProtectedComponents from './pages/ProtectedComponents';
import ClassComponents from './pages/ClassComponents';

function App() {
  const [display, setdisplay] = useState(true)

  const handlelogindisplay = () => {
    if (localStorage.getItem('login') == null || localStorage.getItem('login') == "false") {
      setdisplay(true)
    } else {
      setdisplay(false)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('login') == null || localStorage.getItem('login') == "false") {
      setdisplay(true)
    } else {
      setdisplay(false)
    }
  })

  const handlelogout=()=>{
    localStorage.setItem("login", "false");
    window.location.reload();

  }


  return (
    <div className="app">
      <nav>
        <h1>My Shop</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        

        {display ? <NavLink to="/login">Login</NavLink>:<button onClick={handlelogout}>Logout</button>}
      </nav>

      <Routes>
        <Route element={<ProtectedComponents />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Pd />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="/login" element={<Login display={handlelogindisplay} />} />
        <Route path="/demo" element={<ClassComponents/>} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
