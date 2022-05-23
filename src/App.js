
import './App.css';
import NavBar from './Pages/Shared/NavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Home/Login/Login';
import Blogs from './Pages/Home/Blogs';
import SignUp from './Pages/Home/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Home/Login/RequireAuth';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/purchase" element={
        <RequireAuth>
          <Purchase/>

            
        </RequireAuth>
      
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs" element={<Blogs/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
