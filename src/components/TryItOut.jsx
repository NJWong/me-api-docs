'use client'

import { useState, useEffect } from 'react'
import { Heading } from '@/components/Heading'
import { CodeGroup } from '@/components/Code'

export function TryItOut() {
  const [requestInput, setRequestInput] = useState('characters/2')
  const [response, setResponse] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://me-api.njwon4.workers.dev/api/${requestInput}`
      )

      const data = await res.json()

      setResponse(data)
    }

    fetchData()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch(
      `https://me-api.njwon4.workers.dev/api/${requestInput}`
    )

    const data = await res.json()

    setResponse(data)
  }

  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="try-it-out">
        Try it out
      </Heading>

      <form className="flex w-full items-center" onSubmit={handleSubmit}>
        <div className="rounded-l-lg border bg-zinc-200 p-3 text-lg">
          https://me-api/api/v1/
        </div>
        <input
          className="border border-l-0 p-3 text-lg"
          type="text"
          value={requestInput}
          onChange={(e) => setRequestInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg border border-emerald-400 bg-emerald-400 p-3 font-bold text-white"
        >
          Submit
        </button>
      </form>

      <div>
        <CodeGroup title="Response" tag="GET" label={`/v1/${requestInput}`}>
          <div>{JSON.stringify(response, null, 2)}</div>
        </CodeGroup>
      </div>
    </div>
  )
}
