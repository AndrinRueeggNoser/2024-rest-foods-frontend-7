import Header from "./Elements/Header";
import Button from "@mui/material/Button";
import worldfootball from "./worldfootball.png";
import Footer from "./Elements/Footer";
import earth from "./earth.gif";

export default function HomePage() {
  return (
    <>
      <Header />
    <img className="earth" src={earth} alt="Earth" />
      <img className="icon" src={worldfootball} alt="World Football" />
      <div className="about">
        <h2>Learn more about us</h2>
        <p>
          On this page, you can learn more about the history of our restaurant!
        </p>
        <Button onClick={() => window.location.href = '/about'}>About Us</Button>
      </div>
      <Footer />
    </>
  );
}