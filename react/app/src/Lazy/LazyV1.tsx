import { useEffect, useState } from 'react'

const LazyV1 = () => {
  const [importedComponent, setImportedComponent] = useState<null | JSX.Element>(null)

  useEffect(() => {
    const importComponent = async () => {
      const module = await import('./AnotherComponent')
      const AnotherComponent = module.default
      setImportedComponent(<AnotherComponent />)
    }

    importComponent()
  }, [])

  return <>{importedComponent || <div>Loading...</div>}</>
}

export default LazyV1
