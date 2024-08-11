import Counter from '@/common/counter';
import React from 'react';

export default function FunFacts() {
  return (
      <div className="container">
        <div className="row facts_row">
          <div className="mt_heading_white">
            <h2 className="section_heading text-center"><span>Fun And Facts</span></h2>
            <p className="heading_txt text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 facts_col">
            <div className="fun-facts_wrapper">
              <div className="fun-facts_contain">
                <p>
                  <i className="icon-download"></i>
                </p>
                <div className="fun-facts_item"></div>
              </div>
              <p className="fun-facts_figure">
              <Counter end={874} duration={3} />
              </p>
              <p className="fun-facts_title">Downloads</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 facts_col">
            <div className="fun-facts_wrapper">
              <div className="fun-facts_contain">
                <p>
                  <i className="icon-heart"></i>
                </p>
                <div className="fun-facts_item"></div>
              </div>
              <p className="fun-facts_figure">
              <Counter end={980} duration={3} />
              </p>
              <p className="fun-facts_title">Happy Clients</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 facts_col">
            <div className="fun-facts_wrapper">
              <div className="fun-facts_contain">
                <p>
                  <i className="icon-wallet"></i>
                </p>
                <div className="fun-facts_item"></div>
              </div>
              <p className="fun-facts_figure">
              <Counter end={760} duration={3} />
              </p>
              <p className="fun-facts_title">Purchases</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 facts_col">
            <div className="fun-facts_wrapper">
              <div className="fun-facts_contain">
                <p>
                  <i className="icon-chat"></i>
                </p>
                <div className="fun-facts_item"></div>
              </div>
              <p className="fun-facts_figure">
              <Counter end={610} duration={3} />         
                   </p>
              <p className="fun-facts_title">Comments</p>
            </div>
          </div>
        </div>
      </div>
  );
}