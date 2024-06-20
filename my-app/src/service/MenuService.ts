import { defaultAxiosInstance } from "./MenuFetch";

async function getDishes() {
  try {
    const response = await defaultAxiosInstance.get(`dish`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error");
    throw error;
  }
}

async function getDishById(id: number) {
  try {
    const response = await defaultAxiosInstance.get(`dish/${id}`);
    return response.data;
  } catch (error) {
    alert(error);
  }
}

async function deleteDish(id: number) {
  try {
    const response = await defaultAxiosInstance.delete(`dish/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const MenuService = {
  getDishes,
  deleteDish,
  getDishById
};

export default MenuService;
