import { useEffect, useState } from "react";
import MenuService from "../../service/MenuService";
import { useParams } from "react-router";
import { Button, Typography } from "@mui/material";
import Header from "../pages/Elements/Header";

function UpdateDish() {
  const [dishId, setDishId] = useState("");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  const [chefsChoice, setChefsChoice] = useState("");
  const { id } = useParams();


  useEffect(() => {
      const fetchDish = async () => {
        try {
          const dish = await MenuService.getDishById(Number(id));
          setDishId(dish.dishId);
          setDishName(dish.dishName);
          setDescription(dish.description);
          setImage(dish.imageLink);
          setRegion(dish.region);
          setPrice(dish.price);
          setChefsChoice(dish.chefsChoice);
        } catch (error) {
          alert(error);
        }
      };
      fetchDish();
    }, [id]);

  async function handleUpdateDish() {
    try {
      await MenuService.updateDish(
        dishId,
        dishName,
        description,
        image,
        region,
        price,
        chefsChoice
      );
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
       <div className="dashboard-background">
    <Header />
      <Typography variant="h1">Update Dish</Typography>
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
        Chefs Choice:
        <input
          type="text"
          value={chefsChoice}
          onChange={(e) => setChefsChoice(e.target.value)}
        />
      </Typography>
        <Button onClick={handleUpdateDish}>Update Dish</Button>
        </div>
    </>
  );
}

export default UpdateDish;