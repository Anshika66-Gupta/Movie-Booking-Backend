import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Bookings from "./components/Bookings/Bookings.js";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import AddMovies from "./components/Movies/AddMovies";
import Movies from "./components/Movies/Movies";
import AdminProfile from "./profile/AdminProfile";
import UserProfile from "./profile/UserProfile";

function App() {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);


  return (
    <div>
      <section> 
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies /> } />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/user-admin" element={<AdminProfile />} />
          <Route path="/booking/:id" element={<Bookings />} />
          

        </Routes>
      </section>

    </div>
  );
}

export default App;
