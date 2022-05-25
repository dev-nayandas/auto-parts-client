
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
import Error404 from './Pages/Error404/Error404';
import Portfolio from './Pages/Home/Portfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAreview from './Pages/Dashboard/AddAreview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';



function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        
        <Route path="/parts" element={<Parts/>}></Route>
       

        {/* <Route path="/part/:partId" element={<Booking/>}></Route> */}

        <Route path="/part/:partId" element={
        <RequireAuth>
          <Purchase/>
        </RequireAuth>
        } />

        <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>
        } >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addareview' element={<AddAreview></AddAreview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs" element={<Blogs/>} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="/*" element={<Error404/>} />
      </Routes>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
