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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {/* <!-- PRELOADER --> */}
      <Loader />
      {/* <!-- End Preloader --> */}


      <div id="top"></div>

      {/* <!-- Header --> */}
      <Header activeSection={activeSection} />
      {/* <!--End Header-->*/}


      {/*<!--Banner--> */}
      < section id="rt_banner" >
        <Banner />
      </section >
      {/* <!--End	Banner--> */}


      {/*<!--Services--> */}
      < section id="rt_services" >
        <Services />
      </section >
      {/* <!--End Services-->*/}

      {/*  <!--Work--> */}
      < section id="rt_how_it_works" >
        <HowItWorks />
      </section >
      {/* <!--End	Work--> */}

      {/*<!--Features--> */}
      < section id="rt_features" >
        <Features />
      </section >
      {/* <!--=========================*
           End Features
*===========================-->

<!--=========================*
          ScreenShots
*===========================--> */}
      <section id="rt_screenshots">
        <Screenshots />
      </section>

      <section id="rt_team">
        <Teams />
      </section>

      {/* <!--Watch Section--> */}
      < section id="rt_watch" style={{
        background: 'url(/images/work_bg.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }} >
       <Watch/>
      </section >

      {/* <!--Testimonial */}
  <section id="rt_testimonial">
        <Testimonials />
      </section>
  

 {/*<!--Fun And Facts--> */}
  <section id="mt_fun">
      <FunFacts />
  </section>

      {/*<!--Pricing --> */}
      < section id="rt_pricing" >
        <Pricing/>
      </section >

      {/*<!--Blog--> */}
      < section id="rt_blog" >
        <Blog />
      </section >

      {/*<!--Contact-> */}
      < section id="rt_contact" >
        <Contact />
      </section >

      {/*<!--Get App--> */}
      < section id="rt_get_app" style={{
        background: 'url(/images/feature/get-bg.jpg)'
      }} >
        <GetApp />
      </section >

      < section id="newsletter" >
        <NewsLetter />
      </section >


    </>
  );
}
