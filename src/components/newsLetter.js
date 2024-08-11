import React from 'react'

export default function NewsLetter() {
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="newsletter_wrapper">
          <div class="newsletter-inner_wrapper">
            <h4>
              <span class="stay-touch">Stay in touch to</span>
              <span class="offers">Get Exlusive Offers</span>
            </h4>
            <form id="mc-newsletter" action="#" className="newsletterForm">
              <div className="input-group">
                <input
                  type="email"
                  id="mc-newsletter-input"
                  autoComplete="off"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <span className="input-group-btn">
                  <button id="btn-newsletter" className="btn btn-default submit-button" type="submit">
                    <img id="newsletter-btn-image" alt="image" src="/images/icon-send.png" />
                  </button>
                </span>
              </div>
              <p className="newsletter-message"></p>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  )
}
