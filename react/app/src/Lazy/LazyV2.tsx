import { Suspense, lazy } from 'react'

const AnotherComponent = lazy(() => import('./AnotherComponent'))

const LazyV2 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnotherComponent />
    </Suspense>
  )
}

export default LazyV2
