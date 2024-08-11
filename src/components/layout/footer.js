import React from 'react'

export default function Footer() {
  return (
    < footer id="rt_footer" >
    <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="footer_logo text-left">
          <a href="#">
            <img src="images/logo-color.png" alt="Footer Logo" />
          </a>
        </div>
      </div>
      <div class="col-md-3 text-left">
        <div class="footer_address">
          <p>159 E 12th St. Manchester UK</p>
          <a href="tel:02019853591">(+020) 1985 3591</a>
          <span>
            <a href="mailto:Hello@support.co">Hello@support.co.uk</a>
          </span>
        </div>
      </div>
      <div class="col-md-3">
        <div class="social_icons mb-110 mb-xs-60">
          <a href="#" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="#" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
          <a href="#" title="Behance" target="_blank"><i class="fa fa-behance"></i></a>
          <a href="#" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="#" title="Pinterest" target="_blank"><i class="fa fa-pinterest"></i></a>
        </div>
      </div>
      <div class="col-md-3">
        <div class="copyright text-left">
          <p>&copy; Pixaar 2018 </p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
  </footer >
  )
}
