import Loader from '@/common/loader';
import BlogsSiderbar from '@/components/blogsSiderbar';
import React from 'react';

export default function SingleBlog() {
  return (
    <div>
      {/* Loader Component to show a loading state */}
      <Loader />

      {/* Banner Section */}
      <section id="general_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="bread_crumbs">
                <h1>Blog Detail</h1>
                <ul className="breadcrumb">
                  <li><a href="#">Home</a></li>
                  <li className="active">Blog Post</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="white-svg">
          <svg viewBox="0 0 1440.002 238.478">
            <path
              clipRule="evenodd"
              d="M1440.002,189.252C591.624,304.273,597.079,58.018,0,0 c0,91.006,0,216.847,0,238.478c148.21-0.137,1440.002,0,1440.002,0S1440.002,208.484,1440.002,189.252L1440.002,189.252z"
            />
          </svg>
        </div>
      </section>

      {/* Main Blog Section */}
      <section id="blog_main_sec">
        <div className="container">
          <div className="row">
            {/* Main Content - Blog Post */}
            <div className="col-md-8">
              <div className="post_img">
                <img src="images/blog/03.jpg" alt="Post Image" />
              </div>
              <div className="post_title">
                <h3>Apple Slashes App Store Affiliate Commissions</h3>
                <ul className="list-inline list-unstyled">
                  <li>
                    <i className="icon-profile-male" />&nbsp;
                    John Doe
                  </li>
                  <li>
                    <i className="icon-calendar" />&nbsp;
                    12-December&nbsp;
                  </li>
                  <li>
                    <a href="#"><i className="icon-chat" />&nbsp;Comment (3)</a>
                  </li>
                </ul>
              </div>
              <div className="post_body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <blockquote>
                  <p>Sed felis est, placerat a ornare vel, tempor id est. Phasellus ac urna vitae massa porttitor lacinia. Integer mollis, nulla pretium porttitor sagittis, urna nibh lobortis eros, ut lacinia elit velit nec diam.</p>
                  <span>Arthur & Molly Weasley</span>
                </blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat incidunt dicta eius corporis iste, nihil nam atque. Deserunt vel, velit cum aut error nam. Unde in ipsa quos earum. Atque.</p>
              </div>
              
              {/* Author Box */}
              <div className="author_box">
                <div className="author_img">
                  <img src="images/blog/author.png" alt="Author" />
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="author_bio">
                  <h5>Angela Jane</h5>
                  <p>Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper an neque auctor. Aenean ligula mi, auctor sed tempus. Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper an neque auctor. Aenean ligula mi, auctor sed tempus.</p>
                </div>
              </div>

              {/* Comments Section */}
              <div id="comments">
                <div className="comments-wrap">
                  <h4>Comments (4)</h4>
                  <ol className="comments-lists">
                    {/* Comment 1 */}
                    <li className="comment">
                      <div className="activity_rounded">
                        <img src="images/blog/cmnt-1.jpg" alt="Comment 1" />
                      </div>
                      <div className="comment-body">
                        <h4 className="text-left">
                          Abraham Kim &nbsp;&nbsp;
                          <small className="date-posted">Mon, 22-08-2016</small>
                        </h4>
                        <p>Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper neque auctor. Etiam pellentesque, magna eget lobortis placerat, leo leo consequat ante, non iaculis turpis augue ac ligula. Duis a enim vel mauris ultrices, leo.</p>
                        <a href="#" className="pull-left rt_btn_color">Reply</a>
                        <div className="clearfix" />
                      </div>
                      <ol className="children">
                        {/* Comment 1.1 (Reply to Comment 1) */}
                        <li className="comment">
                          <div className="activity_rounded">
                            <img src="images/blog/cmnt-2.jpg" alt="Comment 2" />
                          </div>
                          <div className="comment-body">
                            <h4 className="text-left">
                              Abraham Kim &nbsp;&nbsp;
                              <small className="date-posted">Mon, 22-08-2016</small>
                            </h4>
                            <p>Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper neque auctor. Etiam pellentesque, magna eget lobortis placerat, leo leo consequat ante, non iaculis turpis augue ac ligula. Duis a enim vel mauris ultrices, leo.</p>
                            <a href="#" className="pull-left rt_btn_color">Reply</a>
                            <div className="clearfix" />
                          </div>
                        </li>
                      </ol>
                    </li>
                    {/* Comment 2 */}
                    <li className="comment">
                      <div className="activity_rounded">
                        <img src="images/blog/cmnt-3.jpg" alt="Comment 3" />
                      </div>
                      <div className="comment-body">
                        <h4 className="text-left">
                          Abraham Kim &nbsp;&nbsp;
                          <small className="date-posted">Mon, 22-08-2016</small>
                        </h4>
                        <p>Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper neque auctor. Etiam pellentesque, magna eget lobortis placerat, leo leo consequat ante, non iaculis turpis augue ac ligula. Duis a enim vel mauris ultrices, leo.</p>
                        <a href="#" className="pull-left rt_btn_color">Reply</a>
                        <div className="clearfix" />
                      </div>
                    </li>
                    {/* Comment 3 */}
                    <li className="comment">
                      <div className="activity_rounded">
                        <img src="images/blog/cmnt-2.jpg" alt="Comment 4" />
                      </div>
                      <div className="comment-body">
                        <h4 className="text-left">
                          Abraham Kim &nbsp;&nbsp;
                          <small className="date-posted">Mon, 22-08-2016</small>
                        </h4>
                        <p>Duis a enim vel mauris ultrices. Nullam aliquet velit ac velit tempus in semper neque auctor. Etiam pellentesque, magna eget lobortis placerat, leo leo consequat ante, non iaculis turpis augue ac ligula. Duis a enim vel mauris ultrices, leo.</p>
                        <a href="#" className="pull-left rt_btn_color">Reply</a>
                        <div className="clearfix" />
                      </div>
                    </li>
                  </ol>

                  {/* Leave a Comment Section */}
                  <div className="leave_comment">
                    <h4>Leave a Comment</h4>
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" required />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" placeholder="Your Comment" required></textarea>
                          </div>
                          <button type="submit" className="btn btn-default">Submit Comment</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <aside className="col-lg-4 col-md-4 col-sm-12 col-xs-12 blog-sidebar">
              <div className="widget">
                <form className="search-form" role="search" action="#" method="post">
                  <input id="sidebar-search" placeholder="Search" type="text" />
                </form>
              </div>
              <div>
                <BlogsSiderbar />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
