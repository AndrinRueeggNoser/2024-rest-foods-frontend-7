import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Header from "./Elements/Header";
import useMenu from "../../service/useMenu";
import { useNavigate } from "react-router";
import menu123 from "./menu123.png";
import { MenuProps } from "../../MenuProps";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";

function Menupage() {
  const menu = useMenu();
  const navigate = useNavigate();
  const [filteredDishes, setFilteredDishes] = useState<MenuProps[] | null>(
    null
  );

  useEffect(() => {
    if (filteredDishes) {
      setFilteredDishes(null);
    }
  }, [menu]);

  function handleButtonClick(item) {
    navigate(`/dish/${item.dishId}`);
  }

  const sortedMenu = [...menu].sort((a, b) => b.chefsChoice - a.chefsChoice);

  const handleFilter = () => {
    const filtered = sortedMenu.filter((dish) => dish.price < 10);
    setFilteredDishes(filtered);
  };

  const dishesToDisplay = filteredDishes || sortedMenu;

  return (
    <>
      <Header />
      <Button variant="contained" onClick={handleFilter}>
        Filter
      </Button>
      <img className="menu123" src={menu123} alt="Menu" />
      <Typography variant="h1" gutterBottom>
        Menu
      </Typography>
      <Grid container spacing={2}>
        {dishesToDisplay.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.image}
                title={item.dishName}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.dishName}{" "}
                  {item.chefsChoice && <StarIcon sx={{ color: "gold" }} />}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button onClick={() => handleButtonClick(item)}>
                  See more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Menupage;
