import React from "react";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

type FavoriteToggleButtonProps = { productId: string };

export default function FavoriteToggleButton({
  productId,
}: FavoriteToggleButtonProps) {
  return (
    <div>
      <Button size="icon" variant="outline" className="p-2 cursor-pointer">
        <FaHeart />
      </Button>
    </div>
  );
}
