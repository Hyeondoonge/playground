import { useEffect, useState } from 'react';

interface Product {
  title: string;
  count?: number;
  introduction: string;
}

export default function useProduct() {
  const [error, setError] = useState<unknown>(null);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const URL = 'https://dummyjson.com/products/1';
        const res = await fetch(URL);
        if (!res.ok) throw new Error('무튼 에러가 발생했어요');

        const product: Product = await res.json();

        if (product.title !== 'iPhone 11') {
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

  return { product, error };
}
