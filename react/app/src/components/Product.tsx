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
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const URL = 'https://dummyjson.com/products/1';
        const res = await fetch(URL);
        if (!res.ok) throw new Error('무튼 에러가 발생했어요');

        const product: Product = await res.json();

        if (product.title !== 'iPhone 9') {
          setError(new Error('찾는 상품이 아니에요'));
          return;
        }
        setProduct(product);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('정보를 알 수 없는 에러'));
        }
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

  if (error) {
    throw error;
  }

  return (
    <div>
      {product?.title} {product?.introduction}
    </div>
  );
}
