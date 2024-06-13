import { useState } from "react";
import "./App.css";
import HomePage from "./Component/pages/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menupage from "./Component/pages/Menupage";
import Dashboard from "./Component/pages/Dashboard";
import Reservation from "./Component/pages/Reservationpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu/:id" /*element={< />}*/ />
          <Route path="/reservation" element={<Reservation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
