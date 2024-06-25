import React, { useEffect, useState } from "react";
import { MenuProps } from "../../MenuProps";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuService from "../../service/MenuService";
import Header from "../pages/Elements/Header";

function DishPreview() {
  const [selectedDish, setSelectedDish] = useState<MenuProps>();
  const { id } = useParams();

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await MenuService.getDishById(Number(id));
        console.log(response);
        setSelectedDish(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchDish();
    }
  }, [id]);

  return (
    <>
      <Header />
      <Typography variant="h1" gutterBottom>
        Dish Preview
      </Typography>
      {selectedDish ? (
        <>
          <Typography variant="h5">{selectedDish.image}</Typography>
          <Typography variant="h5">{selectedDish.dishName}</Typography>
          <Typography variant="body1">ID: {selectedDish.dishId}</Typography>
          <Typography variant="body1">
            Description: {selectedDish.description}
          </Typography>
          <Typography variant="body1">Price: {selectedDish.price}</Typography>
        </>
      ) : (
        <Typography variant="body1">Loading...</Typography>
      )}
    </>
  );
}

export default DishPreview;
