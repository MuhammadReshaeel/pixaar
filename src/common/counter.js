import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endCount = parseInt(end);
    if (start === endCount) return;

    const totalDuration = parseInt(duration);
    const incrementTime = (totalDuration / endCount) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endCount) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
