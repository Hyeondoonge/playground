import useProduct from 'ErrorBoundary/hooks/useProduct';
import useReviews from 'ErrorBoundary/hooks/useReviews';
import React, { useEffect, useState } from 'react';

// 에러가 발생하여, 정상적인 데이터를 가져올 수 없을 때 화면깨짐을 방지하고
// 사용자에게 의미있는 UI를 렌더링함으로써 UX를 개선할 수 있다.
// 이때 아래의 Product 컴포넌트는 '정상적인 로직'을 처리하기위한 것이고
// 구체적인 에러처리는 부모 컴포넌트인 ErrorBoundary가 처리한다.

export default function Product() {
  const { product } = useProduct();
  const { reviews } = useReviews();

  return (
    <div>
      {product?.title} {product?.introduction} {reviews?.count}
    </div>
  );
}
