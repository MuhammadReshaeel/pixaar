import React from 'react'

export default function GetApp() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mt_heading">
                <h2 className="section_heading"><span>Download App Now</span></h2>
                <p className="heading_txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
              </div>
              <a href="#" className="btn btn-app-store">
                <i className="fa fa-apple"></i> <span className="small">Download on the</span> <span className="big">App Store</span>
              </a>
              <a href="#" className="btn btn-app-store google_play">
                <i className="ion-social-android"></i> <span className="small">Download on the</span> <span
                  className="big">Play Store</span>
              </a>
            </div>
            <div className="col-md-4">
              <img src="images/feature/get-mobile.png" alt="Mobile Image" />
            </div>
          </div>
        </div>
  )
}
