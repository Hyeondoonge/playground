import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Product from './Product';
import ProductFallback from './ProductFallback';

export default function App() {
  return (
    <div>
      <ErrorBoundary fallback={<ProductFallback />}>
        <Product />
      </ErrorBoundary>
    </div>
  );
}
