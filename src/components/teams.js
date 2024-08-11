// pages/Teams.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import OwlCarousel to avoid server-side rendering issues
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

// Carousel options configuration
const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1 // Number of items for screen widths >= 0px
        },
        600: {
            items: 2 // Number of items for screen widths >= 600px
        },
        1000: {
            items: 3 // Number of items for screen widths >= 1000px
        }
    }
};

// Team members data
const teamMembers = [
    { imgSrc: 'images/team/team1.jpg', name: 'Jason', position: 'Ceo / Founder' },
    { imgSrc: 'images/team/team2.jpg', name: 'Jessica', position: 'Co Founder' },
    { imgSrc: 'images/team/team3.jpg', name: 'Michel', position: 'Project Manager' },
    { imgSrc: 'images/team/team4.jpg', name: 'Monica', position: 'Design Lead' },
    { imgSrc: 'images/team/team5.jpg', name: 'Davidson', position: 'Development Lead' },
    { imgSrc: 'images/team/team6.jpg', name: 'Jenifer', position: 'Marketing Manager' },
];

// Main component for displaying team members in a carousel
export default function Teams() {
    return (
        <div className="container">
            <div className="row">
                {/* Section heading and description */}
                <div className="mt_heading">
                    <h2 className="section_heading text-center"><span>Team Members</span></h2>
                    <p className="heading_txt text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>
                
                {/* OwlCarousel component with dynamic import and options */}
                <OwlCarousel className="owl-carousel" {...options}>
                    {teamMembers.map((member, index) => (
                        <div className="item" key={index}>
                            <div className="col-md-12">
                                <div className="team_member">
                                    <figure className="member_item">
                                        <img src={member.imgSrc} alt={member.name} />
                                        <figcaption>
                                            <h3>{member.name}</h3>
                                            <p>{member.position}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
}
