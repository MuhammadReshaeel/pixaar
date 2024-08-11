import React from 'react'

export default function Contact() {
  return (
    <div>
        <div class="mt_heading">
          <h2 class="section_heading text-center"><span>Contact Us</span></h2>
          <p class="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="contact_info">
                <div class="contact_heading">
                  <span>Get in Touch</span>
                  <h3>Contact info</h3>
                </div>
                <div class="email_sec">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="location">
                        <i class="icon-map"></i>
                        <h5>Location</h5>
                        <p>21, Lakewood street,London</p>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="time">
                        <i class="icon-alarmclock"></i>
                        <h5>Available Time</h5>
                        <p>Monday - Saturday</p>
                        <p>9:00am - 8:00pm</p>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="location">
                        <i class="icon-phone"></i>
                        <div class="phone">
                          <h5>Phone</h5>
                          <p>+92-123456-458</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="email">
                        <i class="icon-envelope"></i>
                        <h5>Email</h5>
                        <p><a href="mailto:example@example.co">example@example.co</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className="contact_form">
                <h3>Stay in Touch</h3>
                <form id="contact_form">
                  <input type="text" name="name" id="name" placeholder="Your name" required />
                  <input type="email" name="email" id="email" placeholder="Your email" required />
                  <textarea
                    cols="30"
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <button className="rt_btn_color" id="submit-btn">
                    Send
                    <span className="mt_load">
                      <span></span>
                    </span>
                  </button>
                  <div id="msg"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
