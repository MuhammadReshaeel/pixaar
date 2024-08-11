import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <>
      {/* Main container for the banner */}
      <div className="container">
        <div className="row">
          {/* Left column containing the banner text and buttons */}
          <div className="col-md-6">
            <div className="banner_caption_text">
              <h1>Now Everything is Simple with Pixaar</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              {/* App Store download button */}
              <a href="#" className="btn btn-app-store">
                <i className="fa fa-apple"></i> 
                <span className="small">Download on the</span> 
                <span className="big">App Store</span>
              </a>
              {/* Play Store download button */}
              <a href="#" className="btn btn-app-store google_play">
                <i className="ion-social-android"></i> 
                <span className="small">Download on the</span> 
                <span className="big">Play Store</span>
              </a>
            </div>
          </div>
          {/* Right column containing the animated image */}
          <div className="col-md-5 col-md-offset-1">
            <div className="banner_caption_img">
              <motion.img
                // Initial state: Image starts slightly below its final position and is invisible
                initial={{ opacity: 0, y: 40 }}
                // Final state: Image moves into its final position and becomes fully visible
                animate={{ opacity: 1, y: 0 }}
                // Animation duration and delay settings
                transition={{ duration: 2, delay: 0.5 }}
                src="/images/mobile-mockup.png"
                alt="Mobile Mockup"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SVG Wave separator */}
      <div className="white-svg">
        <svg viewBox="0 0 1440.002 238.478" preserveAspectRatio="xMidYMid meet">
          <path
            clipRule="evenodd"
            d="M1440.002,189.252C591.624,304.273,597.079,58.018,0,0
              c0,91.006,0,216.847,0,238.478c148.21-0.137,1440.002,0,1440.002,0S1440.002,208.484,1440.002,189.252L1440.002,189.252z"
          ></path>
        </svg>
      </div>
    </>
  );
}
