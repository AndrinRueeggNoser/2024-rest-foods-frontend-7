import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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

  const [filterType, setFilterType] = useState("");

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterType(value);
    if (value === "price") {
      const filtered = sortedMenu.filter((dish) => dish.price < 10);
      setFilteredDishes(filtered);
    } else if (value === "chefsChoice") {
      const filtered = sortedMenu.filter((dish) => dish.chefsChoice);
      setFilteredDishes(filtered);
    } else {
      setFilteredDishes(null);
    }
  };

  useEffect(() => {
    if (filteredDishes) {
      setFilteredDishes(null);
    }
  }, [menu]);

  function handleButtonClick(item) {
    navigate(`/dish/${item.dishId}`);
  }

  const sortedMenu = [...menu].sort((a, b) => b.chefsChoice - a.chefsChoice);

  const dishesToDisplay = filteredDishes || sortedMenu;

  return (
    <>
      <Header />

      <FormControl
        variant="outlined"
        fullWidth
        sx={{
          marginBottom: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiSelect-icon": {
            color: "white",
          },
        }}
      >
        <InputLabel>Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterType}
          onChange={handleFilterChange}
          label="Filter"
        >
          <MenuItem value="price">By Price (below 10 CHF)</MenuItem>
          <MenuItem value="chefsChoice">Chef's Choice</MenuItem>
          <MenuItem value="none">None</MenuItem>
        </Select>
      </FormControl>
      <img className="menu123" src={menu123} alt="Menu" />
      <Typography variant="h1" gutterBottom>
        Menu
      </Typography>
      <Grid container spacing={2}>
        {dishesToDisplay.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, marginLeft: "12%" }}>
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
