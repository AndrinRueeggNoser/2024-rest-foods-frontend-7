import React, { useEffect, useState } from "react";
import Header from "./Elements/Header";
import {
  Button,
  Tab,
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
import Footer from "./Elements/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [reservation, setReservation] = useState([]);
  const [selectedDish, setSelectedDish] = useState<MenuProps>();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const data = await MenuService.getDishes();
        setMenu(data);
      } catch (error) {
        console.error("Error");
      }
    };

    fetchDishes();
  }, []);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const reservationData = await MenuService.getReservation();
        setReservation(reservationData);
        console.log(reservation);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchReservation();
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

  const handleNavigateToUpdateDish = (menuId: number) => {
    navigate(`/update/${menuId}`);
  };

  const handleNavigateToReservation = (reservationId: number) => {
    navigate(`/reservation/${reservationId}`);
  };

  return (
    <div className="dashboard-background">
      <Header />
      <Typography variant="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h3" gutterBottom>
        Dishes
      </Typography>{" "}
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
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">
              <Button onClick={handleNavigateToAddDish}>add</Button>
            </TableCell>
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

                <Button
                  onClick={() => handleNavigateToUpdateDish(menus.dishId)}
                >
                  update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="h3" gutterBottom>
        Reservation
      </Typography>
      {localStorage.getItem("role") == "ADMIN" ? (
        <>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reservations</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservation.map((reservations: any) => (
                <TableRow key={reservations.reservationId}>
                  <TableCell component="th" scope="row">
                    {reservations.reservationId}
                  </TableCell>
                  <TableCell align="right">
                    {reservations.reservationId}
                  </TableCell>
                  <TableCell align="right">
                    {reservations.reservationDate}
                  </TableCell>
                  <TableCell align="right">
                    {reservations.reservationTime}
                  </TableCell>
                  <TableCell align="right">
                    {reservations.personCount}
                  </TableCell>
                  <TableCell align="right">{reservations.firstName}</TableCell>
                  <TableCell align="right">{reservations.lastName}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() =>
                        handleNavigateToReservation(reservations.reservationId)
                      }
                    >
                      preview
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : null}
      <Footer />
    </div>
  );
}
