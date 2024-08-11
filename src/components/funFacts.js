// components/FunFacts.js
import React from 'react';
import Counter from '@/common/counter';

export default function FunFacts() {
    // Array to store the fun fact data for easier rendering
    const facts = [
        { icon: 'icon-download', end: 874, title: 'Downloads' },
        { icon: 'icon-heart', end: 980, title: 'Happy Clients' },
        { icon: 'icon-wallet', end: 760, title: 'Purchases' },
        { icon: 'icon-chat', end: 610, title: 'Comments' }
    ];

    return (
        <div className="container">
            <div className="row facts_row">
                {/* Section Heading */}
                <div className="mt_heading_white">
                    <h2 className="section_heading text-center">
                        <span>Fun And Facts</span>
                    </h2>
                    <p className="heading_txt text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>

                {/* Render fun facts dynamically */}
                {facts.map((fact, index) => (
                    <div className="col-md-3 col-sm-6 col-xs-12 facts_col" key={index}>
                        <div className="fun-facts_wrapper">
                            <div className="fun-facts_contain">
                                <p>
                                    <i className={fact.icon}></i>
                                </p>
                                <div className="fun-facts_item"></div>
                            </div>
                            <p className="fun-facts_figure">
                                <Counter end={fact.end} duration={3} />
                            </p>
                            <p className="fun-facts_title">{fact.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
