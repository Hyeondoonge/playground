import { useEffect, useState } from 'react';

interface Reviews {
  productTitle: string;
  count: number;
}

export default function useReviews() {
  const [error, setError] = useState<unknown>(null);
  const [reviews, setReviews] = useState<Reviews | null>(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviews: Reviews = {
          productTitle: '밥',
          count: 30
        };

        if (reviews.productTitle !== 'iPhone 9') {
          setError(new Error('찾는 리뷰가 아니에요'));
          return;
        }
        setReviews(reviews);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('정보를 알 수 없는 에러'));
        }
      }
    };

    fetchReview();
  }, []);
  return { reviews, error };
}
