import { defaultAxiosInstance } from "./MenuFetch";

async function getDishes() {
  try {
    const response = await defaultAxiosInstance.get("dish");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    throw error;
  }
}

async function getDishById(id: number) {
  try {
    const response = await defaultAxiosInstance.get(`dish/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching dish by ID:", error);
    throw error;
  }
}

async function deleteDish(id: number) {
  try {
    const response = await defaultAxiosInstance.delete(`dish/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting dish:", error);
    throw error;
  }
}

async function createDish(
  dishId: number,
  dishName: string,
  description: string,
  imageLink: string,
  region: string,
  price: number,
  chefsChoice: boolean
) {
  try {
    const data = {
      dishName,
      dishId,
      description,
      imageLink,
      region,
      price,
      chefsChoice,
    };
    const response = await defaultAxiosInstance.post(`dish`, data);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

async function updateDish(
  dishId: number,
  dishName: string,
  description: string,
  imageLink: string,
  region: string,
  price: number,
  chefsChoice: boolean
) {
  try {
    const data = {
      dishId,
      dishName,
      description,
      imageLink,
      region,
      price,
      chefsChoice,
    };

    const response = await defaultAxiosInstance.put(`dish/${dishId}`, data);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

const MenuService = {
  getDishes,
  deleteDish,
  getDishById,
  createDish,
  updateDish
};

export default MenuService;
