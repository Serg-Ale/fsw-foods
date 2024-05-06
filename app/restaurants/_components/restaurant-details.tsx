import CardEntrega from "@/app/_components/card-entrega";
import RatingBadge from "@/app/_components/rating-badge";
import { Restaurant } from "@prisma/client";
import Image from "next/image";

interface RestaurantDetailsProps {
  restaurant: Restaurant;
}
const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div className="z-90 relative mt-[-1.3rem] rounded-tl-3xl  rounded-tr-3xl bg-white py-5">
      <div className="flex items-center px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <div className="relative h-8 w-8">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                fill
                className="rounded-full"
              />
            </div>
            <h1 className="text-xl font-semibold">{restaurant.name}</h1>
          </div>

          <RatingBadge
            backgroundColor="foreground"
            textColor="white"
            position=""
          />
        </div>
      </div>

      <div className="px-5">
        <CardEntrega />
      </div>
    </div>
  );
};

export default RestaurantDetails;
