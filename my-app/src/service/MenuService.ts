import { defaultAxiosInstance } from "./MenuFetch";

async function getDishes() {
    
  try {
    console.log("test")
    const response = await defaultAxiosInstance.get("dish");
    console.log("API Response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error");
    throw error;
  }
}

const MenuService = {
  getDishes,
};

export default MenuService;
