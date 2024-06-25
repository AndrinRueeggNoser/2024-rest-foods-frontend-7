import { MenuProps } from "@mui/material";
import { useState, useEffect } from "react";
import MenuService from "./MenuService";

const useMenu = () => {
  const [menu, setMenu] = useState<MenuProps[]>([]);

  useEffect(() => {
    console.log("Fetching menu data");
    MenuService.getDishes().then((data) => {
      setMenu(data);
      console.log(data);
      data.forEach((dish) => console.log(dish.dishName));
    });

  }, []);

  return menu;
};

export default useMenu;
