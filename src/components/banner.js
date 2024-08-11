import React from 'react'
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div>
         <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="banner_caption_text">
                <h1>Now Everything is Simple with Pixaar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <a href="#" class="btn btn-app-store">
                  <i class="fa fa-apple"></i> <span class="small">Download on the</span> <span class="big">App Store</span>
                </a>
                <a href="#" class="btn btn-app-store google_play">
                  <i class="ion-social-android"></i> <span class="small">Download on the</span> <span
                    class="big">Play Store</span>
                </a>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
              <div className="banner_caption_img">
                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  src="/images/mobile-mockup.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="white-svg">
          <svg viewBox="0 0 1440.002 238.478" preserveAspectRatio="xMidYMid meet">
            <path
              clipRule="evenodd"
              d="M1440.002,189.252C591.624,304.273,597.079,58.018,0,0
                c0,91.006,0,216.847,0,238.478c148.21-0.137,1440.002,0,1440.002,0S1440.002,208.484,1440.002,189.252L1440.002,189.252z"
            ></path>
          </svg>
        </div>
    </div>
  )
}
