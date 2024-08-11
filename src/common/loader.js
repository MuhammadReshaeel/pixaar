import React, { useState, useEffect } from 'react';

export default function Loader() {
  // State to manage the loading status
  const [isLoading, setIsLoading] = useState(true);

  // Effect to automatically stop the loading after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Conditionally render the loading animation if isLoading is true */}
      {isLoading && (
        <div className="loading">
          <div className="loading-text">
            {/* Animated loading text */}
            <span className="loading-text-words">L</span>
            <span className="loading-text-words">O</span>
            <span className="loading-text-words">A</span>
            <span className="loading-text-words">D</span>
            <span className="loading-text-words">I</span>
            <span className="loading-text-words">N</span>
            <span className="loading-text-words">G</span>
          </div>
        </div>
      )}
    </div>
  );
}
