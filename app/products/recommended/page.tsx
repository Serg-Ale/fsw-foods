import Header from "@/app/_components/header";
import ProductItem from "@/app/_components/product-item";
import { db } from "@/app/_lib/prisma";

const RecommendedProducstPage = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 20,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div>
      <>
        <Header />
        <div className="p-6">
          <div>
            <h2 className="mb-6 text-lg font-semibold">Pedidos Recomendados</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                className="min-w-full"
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default RecommendedProducstPage;
