import React from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const options = {
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 20,
   
};

export default function Testimonials() {
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mt_heading">
                            <h2 className="section_heading text-center">
                                <span>What our Client Says</span>
                            </h2>
                            <p className="heading_txt text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </p>
                        </div>
                        <OwlCarousel className="owl-carousel" {...options}>
                            {/* <!-- Slide 1 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial.jpg" alt="Alex Hale" />
                                        </div>
                                        <div className="client_name">
                                            <em>Alex Hale</em>
                                            <span>CEO of Revo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 2 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial2.jpg" alt="Jessica Roy" />
                                        </div>
                                        <div className="client_name">
                                            <em>Jessica Roy</em>
                                            <span>CEO of Fashion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 3 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial3.jpg" alt="Jack" />
                                        </div>
                                        <div className="client_name">
                                            <em>Jack</em>
                                            <span>CEO of Design Studio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 4 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial4.jpg" alt="Alexa Jhon" />
                                        </div>
                                        <div className="client_name">
                                            <em>Alexa Jhon</em>
                                            <span>CEO of Mobile Studio</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 5 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial5.jpg" alt="Davidson" />
                                        </div>
                                        <div className="client_name">
                                            <em>Davidson</em>
                                            <span>CEO of VIOS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 6 --> */}
                            <div className="item">
                                <div className="testimonial_main">
                                    <div className="col-xs-12">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                                        </p>
                                        <div className="mt_testimonial_img">
                                            <img src="images/testimonial/testimonial6.jpg" alt="Jessica Stone" />
                                        </div>
                                        <div className="client_name">
                                            <em>Jessica Stone</em>
                                            <span>CEO of Tesla</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
    );
}
