import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import db from "@/utils/db";
import { Suspense } from "react";

const HomePage = async () => {
  const products = await db.product.findMany();

  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
