import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface Product {
  title: string;
  count?: number;
  introduction: string;
}

export default function App() {
  return (
    <div>
      <ErrorBoundary fallback={<ProductFallback />}>
        <Product />
      </ErrorBoundary>
    </div>
  );
}

function ProductFallback() {
  return <div>💥 에러가 발생했어요</div>;
}

function Product() {
  const [product, setProduct] = useState<Product | null>(null);
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

  if (error) {
    throw new Error();
  }

  return (
    <div>
      {product?.title} {product?.introduction}
    </div>
  );
}
