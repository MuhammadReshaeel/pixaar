import React from 'react'

export default function Pricing() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="mt_heading">
          <h2 className="section_heading text-center"><span>Pricing</span></h2>
          <p className="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="main_pricing_conatiner">
          <div className="price">
            <h2>
              <span className="price_icon">
                <i className="icon-wallet"></i>
              </span>Standard</h2>
            <span className="price_tag">
              <span className="currency">$</span>0</span>
            <span className="per_month">/Month</span>
          </div>
          <div className="price_listing">
            <ul>
              <li>Latin words, consectetur.</li>
              <li>All the Lorem Ipsum.</li>
              <li>It has survived not only</li>
              <li>Labore et dolore magna ali.</li>
              <li>Nor again is there anyone.</li>
            </ul>
          </div>
          <div className="choose_plan_btn">
            <a href="#" className="rt_btn_color">CHOOSE PLAN</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="main_pricing_conatiner highlight_pricing">
          <div className="price">
            <h2>
              <span className="price_icon">
                <i className="icon-briefcase"></i>
              </span>Bussiness</h2>
            <span className="price_tag">
              <span className="currency">$</span>90</span>
            <span className="per_month">/Month</span>
          </div>
          <div className="price_listing">
            <ul>
              <li>Latin words, consectetur.</li>
              <li>All the Lorem Ipsum.</li>
              <li>It has survived not only</li>
              <li>Labore et dolore magna ali.</li>
              <li>Nor again is there anyone.</li>
            </ul>
          </div>
          <div className="choose_plan_btn">
            <a href="#" className="rt_btn_white">CHOOSE PLAN</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="main_pricing_conatiner">
          <div className="price">
            <h2>
              <span className="price_icon">
                <i className="icon-genius"></i>
              </span>Enterprise</h2>
            <span className="price_tag">
              <span className="currency">$</span>120</span>
            <span className="per_month">/Month</span>
          </div>
          <div className="price_listing">
            <ul>
              <li>Latin words, consectetur.</li>
              <li>All the Lorem Ipsum.</li>
              <li>It has survived not only</li>
              <li>Labore et dolore magna ali.</li>
              <li>Nor again is there anyone.</li>
            </ul>
          </div>
          <div className="choose_plan_btn">
            <a href="#" className="rt_btn_color">CHOOSE PLAN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
