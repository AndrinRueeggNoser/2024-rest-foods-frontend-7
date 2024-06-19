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

//async function getDishById(id: number) {
//        try {
//            const response = await defaultAxiosInstance.get(`dish/${id}`)
//        }
//}

const MenuService = {
  getDishes,
};

export default MenuService;
