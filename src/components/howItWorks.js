import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
export default function HowItWorks() {
    
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Unobserve after the first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div>
 <div class="container">
          <div class="row">
            <div class="mt_heading">
              <h2 class="section_heading text-center"><span>How it Works</span></h2>
              <p class="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
            </div>
            <div class="col-md-7 work_description">
              <h3>What you get in this landing page!</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page
                when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters.</p>
              <ul>
                <li>All the Lorem Ipsum generators on the Internet tendto repeat predefined chunks as necessary.
                </li>
                <li>All the Lorem Ipsum generators on the Internet.</li>
                <li>All the Lorem Ipsum generators on the Internet tendto repeat predefined.</li>
                <li>All the Lorem Ipsum generators on the Internet.</li>
                <li>All the Lorem Ipsum generators on the Internet tendto repeat predefined.</li>
              </ul>
            </div>
            <div className="col-md-5 text-center">
     <motion.img
              ref={imgRef}
              src="/images/work/work-mobile.png"
              alt=""
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
    </div>
          </div>
        </div>
    </div>
  )
}
