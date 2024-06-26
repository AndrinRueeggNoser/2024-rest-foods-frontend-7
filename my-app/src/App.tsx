import "./App.css";
import HomePage from "./Component/pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menupage from "./Component/pages/Menupage";
import Dashboard from "./Component/pages/Dashboard";
import Reservation from "./Component/pages/Reservationpage";
import Map from "./Component/pages/Aboutpage";
import Loginpage from "./Component/pages/Loginpage";
import DishPreview from "./Component/crud/DishPreview";
import AddDish from "./Component/crud/AddDish";
import UpdateDish from "./Component/crud/UpdateDish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dish/:id" element={<DishPreview />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<Map />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/add" element={<AddDish />} />
          <Route path="/update/:id" element={<UpdateDish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
