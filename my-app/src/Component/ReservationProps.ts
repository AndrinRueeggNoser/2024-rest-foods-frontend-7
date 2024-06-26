export interface ReservationProps {
  reservationId: number;
  firstName: string;
  lastName: string;
  reservationTime: string;
  personCount: number;
  restaurantTable: {
    tableId: number;
    seats: number;
    available: boolean;
  };
}
