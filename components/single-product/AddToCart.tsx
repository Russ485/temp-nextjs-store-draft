import React from "react";
import { Button } from "../ui/button";

type AddToCartProps = {
  productId: string;
};

export default function AddToCart({ productId }: AddToCartProps) {
  return <Button className="capitalize mt-8 size-lg">Add to cart</Button>;
}
