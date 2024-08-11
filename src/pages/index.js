import React, { useEffect, useState } from "react";
import Loader from "@/common/loader";
import Header from "@/components/layout/header";
import FunFacts from "@/components/funFacts";
import Screenshots from "@/components/screenshots";
import Teams from "@/components/teams";
import Testimonials from "@/components/testimonials";
import HowItWorks from "@/components/howItWorks";
import Features from "@/components/features";
import Services from "@/components/services";
import Banner from "@/components/banner";
import Footer from "@/components/layout/footer";
import NewsLetter from "@/components/newsLetter";
import GetApp from "@/components/getApp";
import Contact from "@/components/contact";
import Blog from "@/components/blog";
import Pricing from "@/components/pricing";
import Watch from "@/components/watch";

export default function Home() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const handleScroll = () => {
      let currentSection = 'top';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop - 50 && scrollY < sectionTop + sectionHeight - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when component mounts

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Preloader: Displayed while content is loading */}
      <Loader />
      {/* End Preloader */}

      {/* Scroll Top Anchor: Allows smooth scrolling back to top */}
      <div id="top"></div>

      {/* Header: Navigation bar with active section highlighting */}
      <Header activeSection={activeSection} />
      {/* End Header */}

      {/* Banner Section: Introductory banner */}
      <section id="rt_banner">
        <Banner />
      </section>
      {/* End Banner Section */}

      {/* Services Section: Overview of services offered */}
      <section id="rt_services">
        <Services />
      </section>
      {/* End Services Section */}

      {/* How It Works Section: Explanation of the process or workflow */}
      <section id="rt_how_it_works">
        <HowItWorks />
      </section>
      {/* End How It Works Section */}

      {/* Features Section: Highlights key features */}
      <section id="rt_features">
        <Features />
      </section>
      {/* End Features Section */}

      {/* Screenshots Section: Displays product or service screenshots */}
      <section id="rt_screenshots">
        <Screenshots />
      </section>

      {/* Team Section: Introduces the team members */}
      <section id="rt_team">
        <Teams />
      </section>

      {/* Watch Section: Video content, with a background image */}
      <section id="rt_watch" style={{
        background: 'url(/images/work_bg.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
        <Watch />
      </section>

      {/* Testimonials Section: Customer testimonials or reviews */}
      <section id="rt_testimonial">
        <Testimonials />
      </section>

      {/* Fun Facts Section: Displays fun statistics or facts */}
      <section id="mt_fun">
        <FunFacts />
      </section>

      {/* Pricing Section: Details pricing plans */}
      <section id="rt_pricing">
        <Pricing />
      </section>

      {/* Blog Section: Showcases recent blog posts */}
      <section id="rt_blog">
        <Blog />
      </section>

      {/* Contact Section: Contact form or information */}
      <section id="rt_contact">
        <Contact />
      </section>

      {/* Get App Section: Call to action to download an app, with a background image */}
      <section id="rt_get_app" style={{
        background: 'url(/images/feature/get-bg.jpg)'
      }}>
        <GetApp />
      </section>

      {/* Newsletter Section: Signup for newsletters */}
      <section id="newsletter">
        <NewsLetter />
      </section>
    </>
  );
}
