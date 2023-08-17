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
        Try it out!
      </Heading>

      <form className="flex w-full items-center" onSubmit={handleSubmit}>
        <div className="rounded-l-lg bg-zinc-200 p-3 font-mono text-lg dark:bg-zinc-800 dark:text-zinc-100">
          https://me-api/api/v1/
        </div>
        <input
          className="p-3 font-mono text-lg ring-1 ring-inset ring-zinc-200 dark:text-zinc-100 dark:ring-zinc-600"
          type="text"
          value={requestInput}
          onChange={(e) => setRequestInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-zinc-900 p-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
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
