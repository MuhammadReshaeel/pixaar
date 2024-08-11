import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage navbar collapse
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (id) => {
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
      router.push({
        pathname: '/',
        query: { scrollTo: id }
      });
    }
  };

  useEffect(() => {
    if (router.pathname === '/' && router.query.scrollTo) {
      const element = document.getElementById(router.query.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        router.replace('/', '', { shallow: true });
      }
    }
  }, [router.pathname, router.query.scrollTo]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header id="rt_header">
      <nav>
        <div className="navbar-wrapper" id="navigation">
          <div className={`navbar navbar-default navbar-fixed-top reveal-menu-home ${isScrolled ? 'sticky-nav' : ''}`} role="navigation">
            <div className="container nav-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" onClick={toggleNavbar}>
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                      <a href="#top" onClick={() => handleScroll('top')}>
                        <img className="no_sticky_logo" src="/images/logo.png" alt="Logo" />
                        <img className="sticky_logo" src="/images/logo-color.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className={`navbar-collapse collapse ${!isCollapsed ? 'in' : ''}`}>
                    <ul className="nav navbar-nav navbar-right">
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
