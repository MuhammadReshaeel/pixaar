import React from 'react';

export default function Services() {
  return (
    <div className="container">
      {/* Row for services section */}
      <div className="row">
        {/* Section heading */}
        <div className="mt_heading">
          <h2 className="section_heading text-center">
            <span>Our Services</span>
          </h2>
          <p className="heading_txt text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
        {/* Service 1: Clean Design */}
        <div className="col-md-4">
          <div className="box text-center">
            <div className="icon">
              <i className="icon-tools"></i>
            </div>
            <h3>Clean Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        {/* Service 2: Made With Love */}
        <div className="col-md-4">
          <div className="box text-center">
            <div className="icon">
              <i className="icon-heart"></i>
            </div>
            <h3>Made With Love</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        {/* Service 3: Easy To Customize */}
        <div className="col-md-4">
          <div className="box text-center">
            <div className="icon">
              <i className="icon-tools-2"></i>
            </div>
            <h3>Easy To Customize</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
