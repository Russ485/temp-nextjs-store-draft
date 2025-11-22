import { fetchProductReviews } from "@/utils/actions";
import React from "react";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../global/SectionTitle";

export default async function ProductReviews({
  productId,
}: {
  productId: string;
}) {
  const reviews = await fetchProductReviews(productId);
  if (reviews.length === 0)
    return <SectionTitle text="There is no any reviews for this product yet" />;

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const {
            id: reviewId,
            comment,
            rating,
            authorImageUrl,
            authorName,
          } = review;

          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };

          return <ReviewCard key={reviewId} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
