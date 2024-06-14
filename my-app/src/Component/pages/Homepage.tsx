import Header from "./Elements/Header";
import Button from "@mui/material/Button";
import worldfootball from "./worldfootball.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <img className="icon" src={worldfootball} alt="World Football" />
      <div className="about">
        <h2>Learn more about us</h2>
        <p>
          On this Page you can learn more about the history of our restaurant!.
        </p>
        <Button>About Us</Button>
      </div>

      <div className="menu">
        <h2>Check out our menu</h2>
        <p>Here you can see our Menu. We have food for everyone.</p>
        <Button>Menu</Button>
      </div>
    </>
  );
}
