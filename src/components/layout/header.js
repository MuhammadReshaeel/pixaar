import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false); // State to track whether the user has scrolled down
  const router = useRouter(); // Next.js router for navigation and query handling
  
  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state based on the window's scroll position
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
    // Smoothly scroll to the section if already on the homepage
    if (router.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        console.error(`Element with ID ${id} not found.`);
      }
    } else {
      // If not on the homepage, navigate to it and pass the scrollTo ID in the query
      router.push({
        pathname: '/',
        query: { scrollTo: id }
      });
    }
  };

  useEffect(() => {
    // On the homepage, scroll to the section specified by the scrollTo query parameter
    if (router.pathname === '/' && router.query.scrollTo) {
      const element = document.getElementById(router.query.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Remove the scrollTo parameter from the URL after scrolling
        router.replace('/', '', { shallow: true });
      }
    }
  }, [router.pathname, router.query.scrollTo]);

  return (
    <header id="rt_header">
      <nav>
        <div className="navbar-wrapper" id="navigation">
          <div className={`navbar navbar-default navbar-fixed-top reveal-menu-home ${isScrolled ? 'sticky-nav' : ''}`} role="navigation">
            <div className="container nav-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                      {/* Scroll to top when the logo is clicked */}
                      <a href="#top" onClick={() => handleScroll('top')}>
                        <img className="no_sticky_logo" src="/images/logo.png" alt="Logo" />
                        <img className="sticky_logo" src="/images/logo-color.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      {/* Navigation menu items with active section highlighting */}
                      <li className={activeSection === 'top' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('top')}>Home</a>
                      </li>
                      <li className={activeSection === 'rt_services' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_services')}>Services</a>
                      </li>
                      <li className={activeSection === 'rt_features' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_features')}>Features</a>
                      </li>
                      <li className={activeSection === 'rt_screenshots' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_screenshots')}>Screenshots</a>
                      </li>
                      <li className={activeSection === 'rt_team' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_team')}>Team</a>
                      </li>
                      <li className={activeSection === 'rt_testimonial' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_testimonial')}>Testimonials</a>
                      </li>
                      <li className={activeSection === 'rt_pricing' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_pricing')}>Pricing</a>
                      </li>
                      <li className={activeSection === 'rt_blog' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_blog')}>Blog</a>
                      </li>
                      <li className={activeSection === 'rt_contact' ? 'active' : ''}>
                        <a className='pointer-hover' onClick={() => handleScroll('rt_contact')}>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
