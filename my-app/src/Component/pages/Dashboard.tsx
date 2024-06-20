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

  useEffect(() => {
    console.log("test2");
    MenuService.getDishes().then((data) => {
      setMenu(data);
      console.log(data);
    });
  }, []);

  const [menu, setMenu] = useState<MenuProps[]>([]);

  const handleDeleteMenu = async (menuId: number) => {
    try {
      await MenuService.deleteDish(menuId);
      const updatedMenu = menu.filter((menus) => menus.dishId !== menuId);
      setMenu(updatedMenu);
    } catch (error) {
      alert(error);
    }
  };

  const handleGetDishById = async (menuId: number) => {
    navigate(`/dish/${menuId}`);
  };

  return (
    <>
      <Header />
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
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
                <Button onClick={() => handleGetDishById(menus.dishId)}>
                  by id
                </Button>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
