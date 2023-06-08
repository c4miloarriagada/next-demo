'use client'

import { useState } from 'react'

export function LikeButton({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <button style={{ marginTop: '5px' }} onClick={() => setLiked(!liked)}>
      {liked ? '<3' : '</3'}
    </button>
  )
}
