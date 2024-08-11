import React from 'react'

export default function BlogsSiderbar() {
    return (
        <div>
            <div className="widget">
                <div class="widget">
                    <div class="recent-posts">
                        <h4>RECENT POSTS</h4>
                        <div class="recent-posts-block">
                            <a href="#">
                                <p>Printer took a galley of type and scrambled</p>
                            </a>
                            <span>July 30,2018</span>
                        </div>
                        <div class="recent-posts-block">
                            <a href="#">
                                <p>Latin words, combined with a handful of model</p>
                            </a>
                            <span>July 25,2018</span>
                        </div>
                        <div class="recent-posts-block">
                            <a href="#">
                                <p>There are many variations of passages of Lorem</p>
                            </a>
                            <span>August 01,2018</span>
                        </div>
                        <div class="recent-posts-block">
                            <a href="#">
                                <p>Sed ut perspiciatis unde omnis iste natus</p>
                            </a>
                            <span>Dec 25,2018</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <section className="widget">
                <h4>Categories</h4>
                <ul>
                    <li><a href="#">All</a><span className="categoryCount">(50)</span></li>
                    <li><a href="#">Web Design</a><span className="categoryCount">(10)</span></li>
                    <li><a href="#">Graphic Design</a><span className="categoryCount">(07)</span></li>
                    <li><a href="#">Web Development</a><span className="categoryCount">(18)</span></li>
                    <li><a href="#">Marketing</a><span className="categoryCount">(08)</span></li>
                    <li><a href="#">Security</a><span className="categoryCount">(05)</span></li>
                    <li><a href="#">Bug Fixing</a><span className="categoryCount">(02)</span></li>
                </ul>
            </section>
            <section className="widget widget_tag_cloud">
                <h4>Blog Tags</h4>
                <ul>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Html</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">Web Development</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">php</a></li>
                    <li><a href="#">Wordpress</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Bug Fixing</a></li>
                </ul>
            </section>
        </div>
    )
}
