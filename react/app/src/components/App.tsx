import React from 'react';

interface Product {
  name: string;
  count?: number;
  introduction: string;
}

export default function App() {
  const product: Product = {
    name: '제주 삼다수',
    introduction: '제주도 천연물을 이용한 생수'
  };

  return (
    <div>
      {product.name} {product.introduction}
    </div>
  );
}
