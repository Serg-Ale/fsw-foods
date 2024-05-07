import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import RestaurantImage from "../_components/restaurant-image";
import RatingBadge from "@/app/_components/rating-badge";
import CardEntrega from "@/app/_components/card-entrega";
import ProductsList from "@/app/_components/products-list";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantsPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    notFound();
  }

  return (
    <div>
      <RestaurantImage restaurant={restaurant} />
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
          <CardEntrega restaurant={restaurant} />
        </div>

        <div className="mt-3  flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
          {restaurant.categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[167px] rounded-lg bg-[#f4f4f4] text-center "
            >
              <span className="text-xs text-muted-foreground">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {/* TODO: Mostrar produtos mais pedidos quando implementarmos realização de pedido */}
          <h2 className="px-5 font-semibold">Mais pedidos</h2>
          <ProductsList products={restaurant.products} />
        </div>

        {restaurant.categories.map((category) => (
          <div className="mt-6 space-y-4" key={category.id}>
            <h2 className="px-5 font-semibold">{category.name}</h2>
            <ProductsList products={category.products} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
