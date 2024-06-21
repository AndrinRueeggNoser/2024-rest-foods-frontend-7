import React, { useEffect, useState } from "react";
import Header from "./Elements/Header";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { MenuProps } from "../../MenuProps";
import MenuService from "../../service/MenuService";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [selectedDish, setSelectedDish] = useState<MenuProps>();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await MenuService.getDishes();
        setMenu(data);
        console.log(data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchDishes();
  }, []);

  const handleDeleteMenu = async (menuId: number) => {
    try {
      await MenuService.deleteDish(menuId);
      const updatedMenu = menu.filter((menus) => menus.dishId !== menuId);
      setMenu(updatedMenu);
    } catch (error) {
      alert("Error");
    }
  };

  const handleNavigateToDish = (menuId: number) => {
    navigate(`/dish/${menuId}`);
  };

  const handleNavigateToAddDish = () => {
    navigate(`/add`);
  };

  return (
    <>
      <Header />
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
      {selectedDish && (
        <div>
          <Typography variant="h5">{selectedDish.dishName}</Typography>
          <Typography variant="body1">ID: {selectedDish.dishId}</Typography>
          <Typography variant="body1">
            Description: {selectedDish.description}
          </Typography>
          <Typography variant="body1">Price: {selectedDish.price}</Typography>
        </div>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Menu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.map((menus: MenuProps) => (
            <TableRow key={menus.dishId}>
              <TableCell component="th" scope="row">
                {menus.dishName}
              </TableCell>
              <TableCell align="right">{menus.dishId}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleDeleteMenu(menus.dishId)}>
                  delete
                </Button>
                <Button onClick={() => handleNavigateToDish(menus.dishId)}>
                  preview
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
