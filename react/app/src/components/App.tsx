import React, { useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Product, { ProductFallback } from './Product';

export default function App() {
  return (
    <div>
      <ErrorBoundary fallback={<ProductFallback />}>
        <Product />
      </ErrorBoundary>
    </div>
  );
}
