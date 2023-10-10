import useProduct from 'hooks/useProduct';
import useReviews from 'hooks/useReviews';
import React, { useEffect, useState } from 'react';

export function ProductFallback() {
  return <div>💥 에러가 발생했어요</div>;
}

export default function Product() {
  const { product, error: pError } = useProduct();
  const { reviews, error: rError } = useReviews();

  if (pError) {
    throw pError;
  }

  if (rError) {
    throw rError;
  }

  return (
    <div>
      {product?.title} {product?.introduction} {reviews?.count}
    </div>
  );
}
