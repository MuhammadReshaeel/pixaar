import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mt_heading">
                <h2 class="section_heading text-center"><span>Our Blog</span></h2>
                <p class="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
              </div>
            </div>
            {/* <!--=== Post Item ===--> */}
            <div class="col-md-4 col-sm-12 grid-item">
              <figure class="blog_post">
                <div class="image">
                  <img src="images/blog/post-1.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div class="date"><span class="day">28</span><span class="month">Oct</span></div>
                  <h3>There are many variations of passages of Lorem</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===--> */}
            {/* <!--=== Post Item ===--> */}
            <div class="col-md-4 col-sm-12 grid-item">
              <figure class="blog_post">
                <div class="image">
                  <img src="images/blog/post-2.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div class="date"><span class="day">15</span><span class="month">Dec</span></div>
                  <h3>Latin words, combined with a handful of model</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===-->
          <!--=== Post Item ===--> */}
            <div class="col-md-4 col-sm-12 grid-item">
              <figure class="blog_post">
                <div class="image">
                  <img src="images/blog/post-3.jpg" alt="Post Image" />
                </div>
                <figcaption>
                  <div class="date"><span class="day">01</span><span class="month">Nov</span></div>
                  <h3>Sed ut perspiciatis unde omnis iste natus</h3>
                </figcaption>
                <a href="blog-single.html"></a>
              </figure>
            </div>
            {/* <!--=== End Post Item ===--> */}
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <Link href={"blog-listing"} class="rt_btn_color rt_view_btn">View All Posts</Link>
            </div>
          </div>
        </div>
    </div>
  )
}
