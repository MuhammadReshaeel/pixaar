import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Features() {
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
