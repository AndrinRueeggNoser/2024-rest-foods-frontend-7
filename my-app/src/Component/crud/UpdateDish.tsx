import { useState } from "react";
import MenuService from "../../service/MenuService";
import { useParams } from "react-router";

function UpdateDish() {
  const [dishId, setDishId] = useState("");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  const [chefsChoice, setChefsChoice] = useState("");

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
      <h1>Update Dish</h1>
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
        Chefs Choice:
        <input
          type="text"
          value={chefsChoice}
          onChange={(e) => setChefsChoice(e.target.value)}
        />
      </label>
      <button onClick={handleUpdateDish}>Update Dish</button>
    </>
  );
}

export default UpdateDish;