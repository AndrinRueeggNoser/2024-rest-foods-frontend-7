import React, { useEffect, useState } from "react";
import { MenuProps } from "../../MenuProps";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuService from "../../service/MenuService";
import Header from "../pages/Elements/Header";

function DishPreview() {
  const [selectedDish, setSelectedDish] = useState<MenuProps | null>(null);
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
       <div className="dashboard-background">
      <Header />
      <Typography variant="h1" gutterBottom>
        Dish Preview
      </Typography>

      {selectedDish ? (
        <div key={selectedDish.dishId}>
          <img src={selectedDish.image} style={{ width: "200px" }} alt="Dish" />
          <Typography variant="h5">{selectedDish.dishName}</Typography>
          <Typography variant="body1">ID: {selectedDish.dishId}</Typography>
          <Typography variant="body1">
            Description: {selectedDish.description}
          </Typography>
          <Typography variant="body1">Price: {selectedDish.price}</Typography>
        </div>
      ) : (
        <Typography variant="body1">Loading...</Typography>
        )}
        </div>
    </>
  );
}

export default DishPreview;
