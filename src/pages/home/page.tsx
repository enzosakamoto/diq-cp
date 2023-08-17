import { useState } from 'react'

import Button from '../../components/Button'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <main className="flex h-screen w-full flex-col gap-14 items-center justify-center bg-gradient-to-b from-white to-pink-200">
        <h1 className="text-7xl font-semibold">TEMPLATE REACT</h1>
        <span className="text-4xl font-medium">{count}</span>
        <div className="flex flex-row gap-8">
          <Button color="primary" onClick={() => setCount(count + 1)}>
            Add
          </Button>
          <Button color="secondary" onClick={() => setCount(count - 1)}>
            Minus
          </Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
      </main>
    </>
  )
}
