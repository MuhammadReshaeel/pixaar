import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mt_heading">
                <h2 className="section_heading text-center"><span>Our Blog</span></h2>
                <p className="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
              </div>
            </div>
            {/* <!--=== Post Item ===--> */}
            <div className="col-md-4 col-sm-12 grid-item">
              <figure className="blog_post">
                <div className="image">
                  <img src="images/blog/post-1.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div className="date"><span className="day">28</span><span className="month">Oct</span></div>
                  <h3>There are many variations of passages of Lorem</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===--> */}
            {/* <!--=== Post Item ===--> */}
            <div className="col-md-4 col-sm-12 grid-item">
              <figure className="blog_post">
                <div className="image">
                  <img src="images/blog/post-2.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div className="date"><span className="day">15</span><span className="month">Dec</span></div>
                  <h3>Latin words, combined with a handful of model</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===-->
          <!--=== Post Item ===--> */}
            <div className="col-md-4 col-sm-12 grid-item">
              <figure className="blog_post">
                <div className="image">
                  <img src="images/blog/post-3.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div className="date"><span className="day">01</span><span className="month">Nov</span></div>
                  <h3>Sed ut perspiciatis unde omnis iste natus</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===--> */}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <Link href={"blog-listing"} className="rt_btn_color rt_view_btn">View All Posts</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
