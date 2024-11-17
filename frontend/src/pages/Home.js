import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';
import image1 from '../images/image1.jpg';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [activePath, setActivePath] = useState('home');
  const [image1Ref, image1InView] = useInView({ triggerOnce: true });
  const [boxRef, boxInView] = useInView({ triggerOnce: true });
  const [descriptionRef, descriptionInView] = useInView({ triggerOnce: true });

  return (
    <div>
      <Navbar 
        activePath={activePath} 
        onNavClick={setActivePath}/>
      <div className="relative flex flex-col lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl mx-auto">
        {/* Left Side - Divided into Top and Bottom Sections */}
        <div ref={boxRef} className={`flex flex-col w-full lg:w-1/2 lg:space-y-20 lg:px-8 pt-20 lg:relative lg:z-20 lg:-mr-16 transition-opacity duration-1000 ease-in-out ${boxInView ? 'opacity-100' : 'opacity-0'}`}>          
          {/* Top Section - Card */}
          <div className="max-w-4xl bg-white md:max-w-4xl md:z-10 md:shadow-lg p-12 md:px-16">
            <h1 className="text-2xl font-extrabold text-green-800 lg:text-5xl">
              Welcome to CareerLaunchPad
            </h1>
          </div>

          {/* Bottom Section - Description */}
          <div className="mt-8 lg:w-full">
            
            <p ref={descriptionRef} className={`text-2xl text-gray-500 italic justify-start font-medium text-balance leading-9 tracking-wide transition-opacity duration-1000 ease-in-out ${descriptionInView ? 'opacity-100' : 'opacity-0'}`}>              
              Discover courses aligned with your <br />
              goals through personalized <br />
              recommendations and our career quiz.<br />
              CareerLaunchPad connects you with<br />
              the right educational opportunities to <br />
              pave the way to your future. Start <br />
              exploring today!
            </p>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div ref={image1Ref} className={`w-full lg:w-1/2 lg:h-auto lg:relative lg:z-10 transition-transform duration-1000 ease-in-out ${image1InView ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <img className="h-full w-full object-cover" src={image1} alt="Winding mountain road" />
        </div>
      </div>
      <div>
        <HomeContent/>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;
