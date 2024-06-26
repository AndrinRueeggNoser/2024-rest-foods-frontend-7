import { useEffect, useState } from "react";
import MenuService from "../../service/MenuService";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router";

function ReservationPreview() {
 const [selectedDish, setSelectedDish] = useState<ReservationProps | null>(null);
 const { id } = useParams();

 useEffect(() => {
   const fetchReservation = async () => {
     try {
       const response = await MenuService.getDishById(Number(id));
       console.log(response);
       setSelectedDish(response);
     } catch (error) {
       console.error(error);
     }
   };

   if (id) {
     fetchReservation();
   }
 }, [id]);


  async function handleReservation() {
    try {
      await MenuService.getReservationById(Number(reservationId));
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>

      
    </>
  );
}

export default ReservationPreview;
