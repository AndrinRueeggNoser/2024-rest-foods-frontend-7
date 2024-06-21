import { useState } from "react";
import MenuService from "../../service/MenuService";
import React from "react";

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
      await MenuService.createDish(
        dishId,
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
      <h1>Add Dish</h1>
      <label>
        Dish ID:
        <input
          type="text"
          value={dishId}
          onChange={(e) => setDishId(e.target.value)}
        />
      </label>
      <label>
        Dish Name:
        <input
          type="text"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <label>
        Region:
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Chef's Choice:
        <input
          type="text"
          value={chefsChoice}
          onChange={(e) => setChefsChoice(e.target.value)}
        />
      </label>
      <button onClick={handleAddDish}>Add Dish</button>
    </>
  );
}

export default AddDish;