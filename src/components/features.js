import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Features() {
  // State to track if the image in the center column is in view
  const [inView, setInView] = useState(false);

  // Reference to the image element
  const imgRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when the image is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
          observer.unobserve(entry.target); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the image is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup function to unobserve the image when the component is unmounted
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
        <div className="row">
          <div className="mt_heading">
            <h2 className="section_heading text-center"><span>Features</span></h2>
            <p className="heading_txt text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="colum_left">
              <div className="block text-center">
                <i className="icon-documents"></i>
                <h4 className="text-center">Well Documented</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="rt_pulse">
                  <div className="rt_pulse_inner">Pulse Inner</div>
                </div>
                <div className="rt_pulse">
                  <div className="rt_pulses">Pulses</div>
                </div>
              </div>
              <div className="block text-center">
                <i className="icon-mobile"></i>
                <h4 className="text-center">Responsive Layout</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="rt_pulse">
                  <div className="rt_pulse_inner">Pulse Inner</div>
                </div>
                <div className="rt_pulse">
                  <div className="rt_pulses">Pulses</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <motion.div
              ref={imgRef}
              className="colum_center text-center"
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img src="/images/feature/feature-mobile.png" alt="" />
            </motion.div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="colum_right">
              <div className="block text-center">
                <i className=" icon-genius"></i>
                <h4 className="text-center">Creative</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="rt_pulse">
                  <div className="rt_pulse_inner">Pulse Inner</div>
                </div>
                <div className="rt_pulse">
                  <div className="rt_pulses">Pulses</div>
                </div>
              </div>
              <div className="block text-center">
                <i className="icon-layers"></i>
                <h4 className="text-center">Simple Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="rt_pulse">
                  <div className="rt_pulse_inner">Pulse Inner</div>
                </div>
                <div className="rt_pulse">
                  <div className="rt_pulses">Pulses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
