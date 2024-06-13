import {
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "./Elements/Header";

function Menupage() {
  return (
    <>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <h1>Menu</h1>
        </Grid>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              food
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              see all
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Menupage;
