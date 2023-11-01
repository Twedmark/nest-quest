import Heading from "../components/Heading";
import Container from "../components/Container";

import { SafeListing, SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";

interface FavoritesClientProps {
  currentUser?: SafeUser | null;
  listings: SafeListing[];
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  currentUser,
  listings,
}) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="Listings you have favorited!" />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
        "
      >
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
