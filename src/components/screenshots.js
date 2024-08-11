import React from 'react'
import dynamic from 'next/dynamic';


const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

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
        items: 2
    },
    600: {
        items: 3
    },
    1000: {
        items: 5
    }
}
};
export default function Screenshots() {
    return (
        <div>
                <div class="mt_heading_white">
                    <h2 class="section_heading text-center"><span>Screenshots</span></h2>
                    <p class="heading_txt text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                </div>
                <OwlCarousel class="owl-carousel" {...options}>
                    <div class="item">
                        <img src="/images/screenshot/05.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/01.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/02.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/03.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/04.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/06.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/07.jpg" alt="" />
                    </div>
                    <div class="item">
                        <img src="images/screenshot/08.jpg" alt="" />
                    </div>
                </OwlCarousel>
        </div>
    )
}
