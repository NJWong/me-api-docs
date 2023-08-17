'use client'

import { useState } from 'react'
import { Heading } from '@/components/Heading'
import { CodeGroup } from '@/components/Code'

export function TryItOut() {
  const [requestInput, setRequestInput] = useState('characters/2')

  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={3} id="try-it-out">
        Try it out
      </Heading>
      <input
        type="text"
        value={requestInput}
        onChange={(e) => setRequestInput(e.target.value)}
      />

      <div>
        <CodeGroup title="Response" tag="GET" label={`/v1/${requestInput}`}>
          <div>response</div>
        </CodeGroup>
      </div>
    </div>
  )
}
