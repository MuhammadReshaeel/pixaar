import React from 'react';
import Link from 'next/link'
import BlogsSiderbar from '@/components/blogsSiderbar';

const blogPosts = [
  {
    id: 1,
    image: 'images/blog-listing/03.jpg',
    date: '25 APR / 15',
    title: 'There are many variations of passages of Lorem',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'single-blog',
    comments: 5
  },
  {
    id: 2,
    image: 'images/blog-listing/04.jpg',
    date: '25 APR / 15',
    title: 'Latin words, combined with a handful of model',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'single-blog',
    comments: 5
  },
  {
    id: 3,
    image: 'images/blog-listing/01.jpg',
    date: '25 APR / 15',
    title: 'Sed ut perspiciatis unde omnis iste natus',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'single-blog',
    comments: 5
  },
  {
    id: 4,
    image: 'images/blog-listing/02.jpg',
    date: '25 APR / 15',
    title: 'Printer took a galley of type and scrambled',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    link: 'single-blog',
    comments: 5
  }
];

export default function Index() {
  return (
    <div>
      <section id="general_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="bread_crumbs">
                <h1>Blog Posts</h1>
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
            <path clipRule="evenodd" d="M1440.002,189.252C591.624,304.273,597.079,58.018,0,0 c0,91.006,0,216.847,0,238.478c148.21-0.137,1440.002,0,1440.002,0S1440.002,208.484,1440.002,189.252L1440.002,189.252z"></path>
          </svg>
        </div>
      </section>
      <section id="blog_single_main_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              {blogPosts.map(post => (
                <div className="summer-fashion-wrap" key={post.id}>
                  <div className="summer-fashion">
                    <a href={post.link}>
                      <img src={post.image} alt="" className="img-responsive" />
                    </a>
                  </div>
                  <div className="col-lg-1 col-sm-2 col-xs-2 no-padding fashion-date">
                    <h3>{post.date.split(' ')[0]}</h3>
                    <p>{post.date.split(' ')[1]}</p>
                    <div className="icons-details">
                      <ul>
                        <li>
                          <i className="icon-chat"></i>
                          <span>{post.comments}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-11 col-sm-10 col-xs-10 no-padding fashion-description">
                    <div className="fall-trends">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <Link href={post.link} className="rt_btn_color">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination-box">
                <ul className="pagination text-center">
                  <li><a href="#">&lt;&lt; Prev</a></li>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">...</a></li>
                  <li><a href="#">10</a></li>
                  <li><a href="#">Next &gt;&gt;</a></li>
                </ul>
              </div>
              <div className="clearfix"></div>
            </div>
            <aside className="col-lg-4 col-md-4 col-sm-12 col-xs-12 blog-sidebar">
              <div className="widget">
                <form className="search-form" role="search" action="#" method="post">
                  <input id="sidebar-search" placeholder="Search" type="text" />
                </form>
              </div>
            <div>
                <BlogsSiderbar/>
            </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
