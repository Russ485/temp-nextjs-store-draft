import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import SectionTitle from "@/components/global/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";
import React from "react";

export default async function ReviewsPage() {
  const userReviews = await fetchProductReviewsByUser();

  if (userReviews.length === 0)
    return <SectionTitle text="you have no reviews yet" />;

  return (
    <div className="mt-16">
      <SectionTitle text="your reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {userReviews.map(async (review) => {
          const { id: reviewId, comment, rating, product } = review;
          const { image, name } = product;

          const reviewInfo = {
            comment,
            rating,
            image,
            name,
          };

          return (
            <ReviewCard key={reviewId} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={reviewId} />
            </ReviewCard>
          );
        })}
      </section>
    </div>
  );
}

function DeleteReview({ reviewId }: { reviewId: string }) {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
