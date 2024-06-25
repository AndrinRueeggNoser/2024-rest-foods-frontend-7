import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Header from "./Elements/Header";
import useMenu, { RequestMechanism } from "../../service/useMenu";
import { useNavigate } from "react-router";

function Menupage() {
  const menu = useMenu();
    const navigate = useNavigate();

    function handleButtonClick(item: any) {
      navigate(`/dish/${item.dishId}`);
    }


  return (
    <>
      <Header />
      <Typography variant="h1" gutterBottom>
        Menu
      </Typography>
      <Grid container spacing={2}>
        {menu.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title={item.dishName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.dishName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button onClick={() => handleButtonClick(item)}>See more</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );

  
}

export default Menupage;