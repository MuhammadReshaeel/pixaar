import React, { useState } from 'react'

export default function Loader() {
    const [isLoading, setisLoading] = useState(true)
    setTimeout(() => {
        setisLoading(false)
    }, 1000);
  return (
    <div>
        {isLoading &&  <div class="loading">
        <div class="loading-text">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
      </div>}

    </div>
   
  )
}
