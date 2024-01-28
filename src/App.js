import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Details from "./components/Details";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "./redux/resturentSlice";
import AddRestaurant from "./components/AddRestaurant";
import Addregister from "./components/Addregister";
import Login from "./components/Login";
import ProtectedRoutes from "./components/utils/ProtectedRoutes";
import Users from "./components/Users";
import User from "./components/User";
import instance from "./axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
   


  
  const fetchRestaurants = async()=>{
  try{
    
    const res = await instance.get('/reataurants')
    console.log(res.data);
    if(res.data.succes){
     dispatch(getRestaurants(res.data.restaurant))
    }else{
      toast.error(res.data.message);
    }


  
} catch (error) {
  toast.error(error.responce.data.message);
}
  }
fetchRestaurants()

  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Service />} />
          <Route path="/register" element={<Addregister />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/add"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <AddRestaurant />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Contact />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <Users />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/user:/id"
            element={
              <ProtectedRoutes isAuthenticated={isAuthenticated}>
                <User />
              </ProtectedRoutes>
            }
          />
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
