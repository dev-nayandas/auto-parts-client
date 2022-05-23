
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
import Parts from './Pages/Home/Parts';
import Booking from './Pages/Home/Booking';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/parts" element={<Parts/>}></Route>
        {/* <Route path="/part/:partId" element={<Booking/>}></Route> */}
        <Route path="/part/:partId" element={
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
