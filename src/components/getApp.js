import React from 'react'

export default function GetApp() {
  return (
    <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="mt_heading">
                <h2 class="section_heading"><span>Download App Now</span></h2>
                <p class="heading_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
              </div>
              <a href="#" class="btn btn-app-store">
                <i class="fa fa-apple"></i> <span class="small">Download on the</span> <span class="big">App Store</span>
              </a>
              <a href="#" class="btn btn-app-store google_play">
                <i class="ion-social-android"></i> <span class="small">Download on the</span> <span
                  class="big">Play Store</span>
              </a>
            </div>
            <div class="col-md-4">
              <img src="images/feature/get-mobile.png" alt="Mobile Image" />
            </div>
          </div>
        </div>
  )
}
