import React from 'react';
import NavBar from '../components/Navbar';
import backgroundPattern from '../components/assets/pattern-bg.png';

import man from './man.png';
import ad from '../components/assets/ad.png';
import mru from './mru.png';
import guavus from '../components/assets/guavus.png';
import byteprophecy from '../components/assets/byte.png';
import accenture from '../components/assets/accenture.png';

const FounderCard = ({ name, image, items, linkedin }) => (
  <div className="w-full sm:w-80 h-[500px] rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 relative font-poppins flex flex-col">
    <img 
      src={image} 
      alt={name}
      className="w-full h-[250px] object-cover object-center"
    />
    
    <div className="px-4 py-2 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-blue-900">{name}</h2>
        
        <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-full flex justify-center items-center bg-[#2E3E65] h-8 w-8 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:animate-pulse">
            <circle cx="4.983" cy="5.009" r="2.188"></circle>
            <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
          </svg>
        </a>
      </div>

      <ul className="space-y-2 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 text-[14px] flex items-start">
            <span className="mr-2 text-blue-900">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FoundersSection = () => {
  const founders = [
    {
      name: "Adityavijay Rathore",
      image: ad,
      linkedin: "https://www.linkedin.com/in/avrathore/",
      items: [
        "Entrepreneur with 20 years of global experience across Products & Consulting in Data & AI",
        "Love building products, teams and culture",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    },
    {
      name: "Manish Patil",
      image: man,
      linkedin: "https://www.linkedin.com/in/patilmanishh/",
      items: [
        "Entrepreneur with 20+ years of global experience across Core Data & AI across industries",
        "Loves solving interesting data problems",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    },
    {
      name: "Mrugank Parikh",
      image: mru,
      linkedin: "https://www.linkedin.com/in/mrugank/",
      items: [
        "Entrepreneur with 20+ years of global experience across Consulting and Client servicing in Data & AI",
        "Loves solving for whitespaces",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    }
  ];

  return (
    <>
      <div className="relative w-full">
        <NavBar />
        <div className="relative w-full h-40 sm:h-60 flex items-center justify-center">
          <h1 className="text-[30px] sm:text-[40px] font-bold text-[#2E3E65] text-center font-poppins">The Team</h1>
        </div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${backgroundPattern})` }}></div>
      </div>

      <div className="min-h-screen px-4 sm:px-6 py-8 bg-white font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {founders.map((founder) => (
              <FounderCard
                key={founder.name}
                name={founder.name}
                image={founder.image}
                items={founder.items}
                linkedin={founder.linkedin}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-12">
            <img src={guavus} alt="Guavus" className="h-24 md:h-18 lg:h-18 object-contain" />
            <img src={byteprophecy} alt="Byte Prophecy" className="h-24 md:h-18 lg:h-32 object-contain" />
            <img src={accenture} alt="Accenture" className="h-24 md:h-28 lg:h-32 object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersSection;
