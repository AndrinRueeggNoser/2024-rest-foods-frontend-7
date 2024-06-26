import { useState } from "react";
import MenuService from "../../service/MenuService";
import React from "react";
import Header from "../pages/Elements/Header";
import { Button, Typography } from "@mui/material";

function AddDish() {
  const [dishId, setDishId] = useState("");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  const [chefsChoice, setChefsChoice] = useState("");

  async function handleAddDish() {
    try {
      if (!dishId || !dishName || !description || !image || !region || !price || !chefsChoice) {
        alert("Please fill out all fields");
        return;
      } else if(isNaN(Number(dishId)) || isNaN(Number(price))) {
        alert("Please enter a number for dish ID and price");
        return;
      } else if (chefsChoice !== "true" && chefsChoice !== "false") {
        alert("Please enter true or false for chef's choice");
        return;
      }


      await MenuService.createDish(
        dishId, // if bug found, it should be a visual bug (it was atleast for Gabriel)
        dishName,
        description,
        image,
        region,
        price,
        chefsChoice
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
       <div className="dashboard-background">
      <Header />
      <Typography variant="h1" gutterBottom>
        Add Dish
      </Typography>
      <Typography>
        Dish ID:
        <input
          type="text"
          value={dishId}
          onChange={(e) => setDishId(e.target.value)}
        />
      </Typography>
      <Typography>
        Dish Name:
        <input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
      </Typography>
      <Typography>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Typography>
      <Typography>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Typography>
      <Typography>
        Region:
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </Typography>
      <Typography>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Typography>
      <Typography>
        Chef's Choice:
        <input
          type="text"
          value={chefsChoice}
          onChange={(e) => setChefsChoice(e.target.value)}
        />
      </Typography>
        <Button onClick={handleAddDish}>Add Dish</Button>
        </div>
    </>
  );
}

export default AddDish;