import { useEffect, useState } from "react";
import MenuService from "../../service/MenuService";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router";
import { ReservationProps } from "../ReservationProps";
import Header from "../pages/Elements/Header";

function ReservationPreview() {
  const [selectedReservation, setSelectedReservation] =
    useState<ReservationProps | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await MenuService.getReservationById(Number(id));
        console.log(response);
        setSelectedReservation(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchReservation();
    }
  }, [id]);

  return (
    <>
      <div className="dashboard-background">
        <Header />
        <Typography variant="h1" gutterBottom>
          Reservation Preview
        </Typography>

        {selectedReservation ? (
          <div key={selectedReservation.reservationId}>
            <Typography variant="h5">
              Reservation ID: {selectedReservation.reservationId}
            </Typography>
            <Typography variant="body1">
              Name: {selectedReservation.firstName}
            </Typography>
            <Typography variant="body1">
              Last Name: {selectedReservation.lastName}
            </Typography>
            <Typography variant="body1">
              Date: {selectedReservation.reservationTime}
            </Typography>
            <Typography variant="body1">
              Person Count: {selectedReservation.personCount}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1">Loading...</Typography>
        )}
      </div>
    </>
  );
}

export default ReservationPreview;
