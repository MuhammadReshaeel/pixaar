// pages/Watch.js
import React from 'react';

export default function Watch() {
    return (
        <div className="watch-container">
            {/* Overlay for background effect */}
            <div className="overlay"></div>

            {/* Main content container */}
            <div className="container">
                <div className="row">
                    <div className="watch_content text-center">
                        {/* YouTube video thumbnail with Fancybox for modal display */}
                        <a 
                            className="various fancybox"
                            data-fancybox-type="iframe"
                            href="https://www.youtube.com/embed/jid2A7ldc_8?autoplay=0"
                        >
                            <img 
                                src="/images/videobutton.png" 
                                alt="Play Button" 
                                className="play-button" 
                            />
                        </a>
                        <h1>See Our App Demo</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita impedit laudantium nulla porro quidem suscipit voluptate? Accusamus alias, commodi consequatur deserunt dolorem enim laborum nesciunt quia sed veniam? Amet, eveniet?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
