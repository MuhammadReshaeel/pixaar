import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the OwlCarousel component to avoid server-side rendering issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

// Carousel options configuration
const options = {
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    center: true,
    video: true,
    navText: ['<', '>'],
    responsive: {
        0: {
            items: 2 // Number of items for screen widths >= 0px
        },
        600: {
            items: 3 // Number of items for screen widths >= 600px
        },
        1000: {
            items: 5 // Number of items for screen widths >= 1000px
        }
    }
};

// Main component for displaying screenshots carousel
export default function Screenshots() {
    return (
        <div>
            {/* Section heading and description */}
            <div className="mt_heading_white">
                <h2 className="section_heading text-center"><span>Screenshots</span></h2>
                <p className="heading_txt text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
            </div>

            {/* OwlCarousel component with dynamically imported options */}
            <OwlCarousel className="owl-carousel" {...options}>
                {/* Carousel items with images */}
                <div className="item">
                    <img src="/images/screenshot/05.jpg" alt="Screenshot 1" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/01.jpg" alt="Screenshot 2" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/02.jpg" alt="Screenshot 3" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/03.jpg" alt="Screenshot 4" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/04.jpg" alt="Screenshot 5" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/06.jpg" alt="Screenshot 6" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/07.jpg" alt="Screenshot 7" />
                </div>
                <div className="item">
                    <img src="/images/screenshot/08.jpg" alt="Screenshot 8" />
                </div>
            </OwlCarousel>
        </div>
    );
}
