import React, { useEffect, useState } from 'react';

interface Product {
  title: string;
  count?: number;
  introduction: string;
}

interface Reviews {
  productTitle: string;
  count: number;
}

export function ProductFallback() {
  return <div>💥 에러가 발생했어요</div>;
}

export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Reviews | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const URL = 'https://dummyjson.com/products/1';
        const res = await fetch(URL);
        if (!res.ok) throw new Error('무튼 에러가 발생했어요');

        const product: Product = await res.json();

        if (product.title !== 'iPhone 9') {
          setError(true);
          return;
        }
        setProduct(product);
      } catch (error: unknown) {
        setError(true);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reviews: Reviews = {
          productTitle: '밥',
          count: 30
        };

        if (reviews.productTitle !== 'iPhone 9') {
          setError(true);
          return;
        }
        setReviews(reviews);
      } catch (error: unknown) {
        setError(true);
      }
    };

    fetchReview();
  }, []);

  if (error) {
    throw new Error();
  }

  return (
    <div>
      {product?.title} {product?.introduction}
    </div>
  );
}
