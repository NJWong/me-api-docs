'use client'

import { useState, useEffect } from 'react'
import { Heading } from '@/components/Heading'
import { CodeGroup } from '@/components/Code'
import { apiPathV1 } from '../consts/paths.js'

export function TryItOut() {
  const [requestInput, setRequestInput] = useState('characters/2')
  const [responsePath, setResponsePath] = useState(`${apiPathV1}/characters/2`)
  const [response, setResponse] = useState('')

  useEffect(() => {
    sendRequest(`${apiPathV1}/${requestInput}`)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    sendRequest(`${apiPathV1}/${requestInput}`)
  }

  async function handleClick(example) {
    // Set the input field to the selected example
    setRequestInput(example)

    sendRequest(`${apiPathV1}/${example}`)
  }

  async function sendRequest(path) {
    const res = await fetch(path)

    const data = await res.json()

    setResponse(data)
    setResponsePath(path)
  }

  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="try-it-out">
        Try it out!
      </Heading>

      <form className="flex w-full items-center" onSubmit={handleSubmit}>
        <div className="overflow-auto whitespace-nowrap rounded-l-lg bg-zinc-200 p-3 font-mono text-lg dark:bg-zinc-800 dark:text-zinc-100">
          {apiPathV1}
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
        <ul>
          <li>
            <button
              className="font-bold text-emerald-500 hover:underline"
              onClick={() => handleClick('characters?offset=5')}
            >
              characters?offset=5
            </button>
          </li>
          <li>
            <button
              className="font-bold text-emerald-500 hover:underline"
              onClick={() => handleClick('characters/4')}
            >
              characters/4
            </button>
          </li>
          <li>
            <button
              className="font-bold text-emerald-500 hover:underline"
              onClick={() => handleClick('species')}
            >
              species
            </button>
          </li>
        </ul>
      </div>

      <div>
        <CodeGroup title="Response" tag="GET" label={responsePath}>
          <div>{JSON.stringify(response, null, 2)}</div>
        </CodeGroup>
      </div>
    </div>
  )
}
