import { fetchFeaturedProducts } from "@/utils/actions";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

type Props = {};

export default async function FeaturedProducts({}: Props) {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList className="mt-8" />;

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
