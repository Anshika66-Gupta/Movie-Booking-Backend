import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div>
      <section> 
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies /> } />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>

    </div>
  );
}

export default App;
