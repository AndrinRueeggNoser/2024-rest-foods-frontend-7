import Header from "./Elements/Header";
import Button from "@mui/material/Button";
import worldfootball from "./worldfootball.png";
import Footer from "./Elements/Footer";
import React from "react";
import Menupage from "./Menupage";
import Aboutpage from "./Aboutpage";

export default function HomePage() {
  return (
    <>
      <Header />
      <img className="icon" src={worldfootball} alt="World Football" />
      <div className="about">
        <h2>Learn more about us</h2>
        <p>
          On this page, you can learn more about the history of our restaurant!
        </p>
        <Button onClick={() => window.location.href = '/about'}>About Us</Button>
      </div>
      <div className="menu">
        <h2>Check out our menu</h2>
        <p>Here you can see our menu. We have food for everyone.</p>
        <Button onClick={() => window.location.href = '/menu'}>Menu</Button>
      </div>
      <Footer />
    </>
  );
}
