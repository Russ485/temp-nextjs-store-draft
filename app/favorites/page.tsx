import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

export default async function FavoritesPage() {
  const favoriteUserProducts = await fetchUserFavorites();

  if (favoriteUserProducts.length === 0)
    return <SectionTitle text="You have no favorites yet" />;

  return (
    <>
      <SectionTitle text="Favorities" />
      <ProductsGrid
        products={favoriteUserProducts.map(
          (favoriteProduct) => favoriteProduct.product
        )}
      />
    </>
  );
}
