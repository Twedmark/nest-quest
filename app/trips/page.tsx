import EmptyState from "../components/EmptyState";

import getReservations from "../actions/getReservations";
import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState title="No trips" subtitle="You have no upcoming trips" />
    );
  }

  return <TripsClient reservation={reservations} currentUser={currentUser} />;
};

export default TripsPage;
