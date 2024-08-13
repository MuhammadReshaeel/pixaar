import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // State to track if the view is desktop

  const imgRef = useRef(null);

  useEffect(() => {
    // Function to check if the screen is desktop size
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // Set breakpoint for desktop, e.g., 768px
    };

    // Run the check on component mount and window resize
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Skip the observer if not on desktop view

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [isDesktop]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt_heading">
            <h2 className="section_heading text-center"><span>How it Works</span></h2>
            <p className="heading_txt text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>

          <div className="col-md-7 work_description">
            <h3>What you get in this landing page!</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <ul>
              <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</li>
              <li>All the Lorem Ipsum generators on the Internet.</li>
              <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined.</li>
              <li>All the Lorem Ipsum generators on the Internet.</li>
              <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined.</li>
            </ul>
          </div>

          <div className="col-md-5 text-center">
            {isDesktop ? (
              <motion.img
                ref={imgRef}
                src="/images/work/work-mobile.png"
                alt="How it works"
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
            ) : (
              <img
                src="/images/work/work-mobile.png"
                alt="How it works"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
