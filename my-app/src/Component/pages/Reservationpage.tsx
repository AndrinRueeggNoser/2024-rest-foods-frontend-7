import Header from "./Elements/Header";
import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import tables from "./tables.png";
import Button from "@mui/material/Button";
import Footer from "./Elements/Footer";




const starttime = [
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "18:00", label: "18:00" },
  { value: "19:00", label: "19:00" },
  { value: "20:00", label: "20:00" },
  { value: "21:00", label: "21:00" },
  { value: "22:00", label: "22:00" },
  { value: "Not Selected", label: "Not Selected" },
];

const endtime = [
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "19:00", label: "19:00" },
  { value: "20:00", label: "20:00" },
  { value: "21:00", label: "21:00" },
  { value: "22:00", label: "22:00" },
  { value: "23:00", label: "23:00" },
  { value: "Not Selected", label: "Not Selected" },
];

const tablenr = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: "Not Selected", label: "Not Selected" },
];

export default function ReservationPage() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="form-container">
          <h1 className="reservation">Reservation</h1>
          <h2>Reservate over mail</h2>
          <form>
            <div className="names">
              <div>
                <p>First name</p>
                <TextField
                  id="outlined-multiline-flexible"
                  label="John"
                  multiline
                  maxRows={1}
                  sx={{ width: "100%" }}
                />
              </div>
              <div>
                <p>Last name</p>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Doe"
                  multiline
                  maxRows={1}
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="p margintop">
              <p>Email</p>
              <TextField
                id="outlined-multiline-flexible"
                label="johndoe@example.com"
                multiline
                maxRows={1}
                sx={{ width: "100%" }}
              />
            </div>
            <div className="p">
              <p>Phone Number</p>
              <TextField
                id="outlined-multiline-flexible"
                label="079 348 76 45"
                multiline
                maxRows={1}
                sx={{ width: "100%" }}
              />
            </div>
            <div className="tabletime">
              <p>Time and Table</p>
              <TextField select label="Start Time" defaultValue="Not Selected" sx={{ width: "100%" }}>
                {starttime.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="tabletime">
              <TextField select label="End Time" defaultValue="Not Selected" sx={{ width: "100%" }}>
                {endtime.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="tabletime">
              <TextField select label="Table Number" defaultValue="Not Selected" sx={{ width: "100%" }}>
                {tablenr.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <p>Special Requests</p>
              <Textarea
                minRows={2}
                placeholder="Type something..."
                variant="outlined"
                sx={{ width: "100%", backgroundColor: "transparent" }}
              />
            </div>
            <div>
              <Button className="button">Submit</Button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact us in a different way</h2>
          <p>Rest Foods</p>
          <p>Number: '052 202 75 22'</p>
          <p>E-Mail: restfoodszuerich@gmail.com</p>
          <p>Standort: Hero Strasse 12</p>
          <div className="tables">
            <img src={tables} alt="tables" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
