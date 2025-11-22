"use client";

import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { CardSignInButton } from "../form/Buttons";
import axios from "axios";

type Props = {
  productId: string;
};

export default function FavoriteToggleButton({ productId }: Props) {
  const { userId } = useAuth();
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const loadFavorite = async () => {
      setLoading(true);
      const res = await axios.get(`/api/favorite/get?productId=${productId}`);
      setFavoriteId(res.data.favoriteId);
      setLoading(false);
    };

    loadFavorite();
  }, [userId, productId]);

  if (!userId) return <CardSignInButton />;
  if (loading)
    return <div className="h-6 w-10 bg-gray-200 animate-pulse rounded" />;

  return <FavoriteToggleForm productId={productId} favoriteId={favoriteId} />;
}

// import React from "react";
// import { auth } from "@clerk/nextjs/server";
// import { CardSignInButton } from "../form/Buttons";
// import { fetchFavoriteId } from "@/utils/actions";
// import FavoriteToggleForm from "./FavoriteToggleForm";

// type FavoriteToggleButtonProps = { productId: string };

// export default async function FavoriteToggleButton({
//   productId,
// }: FavoriteToggleButtonProps) {
//   const { userId } = auth();

//   if (!userId) return <CardSignInButton />;
//   const favoriteId = await fetchFavoriteId({ productId });

//   return <FavoriteToggleForm productId={productId} favoriteId={favoriteId} />;
// }
