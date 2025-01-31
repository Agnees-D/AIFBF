import React, { useState } from 'react';
import { Briefcase, Users, Bolt, Banknote, Heart, Book, Laptop, Leaf, ShoppingCart, DollarSign, Home, X } from "lucide-react";

const Sectors = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);

  const sectorsData = [
    { title: 'MSME / SME', icon: <Briefcase size={60} className="text-primary" />, description: 'Micro, Small, and Medium Enterprises play a crucial role in the Indian economy, contributing significantly to employment and GDP.' },
    { title: 'Skill and Women Empowerment', icon: <Users size={60} className="text-secondary" />, description: 'Empowering women and enhancing skills are key drivers of social and economic growth in India.' },
    { title: 'Clean Energy and Climate Change', icon: <Bolt size={60} className="text-primary" />, description: 'The focus is on sustainable energy sources and addressing climate change through innovative solutions.' },
    { title: 'Banking and Capital Markets', icon: <Banknote size={60} className="text-secondary" />, description: 'Strong financial markets and banking systems are vital for economic stability and growth.' },
    { title: 'Healthcare & Medicine', icon: <Heart size={60} className="text-primary" />, description: 'Healthcare advancements are critical for improving life expectancy and overall well-being.' },
    { title: 'Education & Learning', icon: <Book size={60} className="text-secondary" />, description: 'Education drives innovation and socio-economic development across the country.' },
    { title: 'Technology & Innovation', icon: <Laptop size={60} className="text-primary" />, description: 'Emerging technologies shape the future and drive economic progress through innovation.' },
    { title: 'Tourism & Hospitality', icon: <Bolt size={60} className="text-secondary" />, description: 'Tourism boosts the economy, creates jobs, and promotes cultural exchange.' },
    { title: 'Agriculture & Food', icon: <Leaf size={60} className="text-primary" />, description: 'Agriculture remains the backbone of India’s economy, ensuring food security.' },
    { title: 'Retail & E-commerce', icon: <ShoppingCart size={60} className="text-secondary" />, description: 'E-commerce is reshaping the retail industry by offering convenience and accessibility.' },
    { title: 'Finance & Investment', icon: <DollarSign size={60} className="text-primary" />, description: 'Investment and financial planning are key for wealth generation and economic growth.' },
    { title: 'Real Estate & Infrastructure', icon: <Home size={60} className="text-secondary" />, description: 'Infrastructure development is essential for urbanization and economic expansion.' },
  ];

  return (
    <div id="sectors" className="sectors-section"style={{backgroundColor:"#FFFAF0",}}>
      <style>
        {`
          .sectors-section {
            padding: 80px 110px;
          }
            .sectors-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr); 
            gap: 42px;
            justify-items: center;
          }

          .sector-card-inner:hover {
            box-shadow: 0px 4px 12px rgb(238, 150, 125);
            transform: translateY(-8px);
          }


          .sector-card {
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
}

.sector-card-inner {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Ensures proper alignment */
    align-items: center;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    min-height: 250px;
    gap: 12px; /* Adjusts spacing between elements */
}

.icon-wrapper {
    margin-bottom: 8px; /* Reduce space below icon */
}

.sector-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1F2937;
    margin-bottom: 8px; /* Reduce space below title */
}

.learn-more-button {
    padding: 8px 16px;
    background-color:rgb(230, 97, 60);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

            
.section-title {
    text-align: center;
    margin-bottom: 10px; /* Reduce space below title */
}

.highlighted-title {
    font-size: 3rem;
    color: #FF7043;
    font-weight: bold;
    margin: 0;
    padding: 0;
}

.section-description {
    margin-top: 0;  /* Remove top margin */
    margin-bottom: 11px;
    font-size: 1.25rem;
    color: #4B5563;
    text-align: center;
}

.view-more-button {
    padding: 12px 24px;
    background-color: #FF5722;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    display: block;
    margin: 40px auto 0; /* Move button further down */
    text-align: center;
}

          .learn-more-button:hover {
            background-color: #e64a19;
          }

          .view-more-button:hover {
            background-color: #e64a19;
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal-content {
            background: white;
            padding: 24px;
            width: 400px;
            border-radius: 12px;
            text-align: center;
            position: relative;
          }

          .modal-title {
            font-size: 1.75rem;
            color: #FF7043;
            font-weight: bold;
          }

          .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }

          .text-primary {
            color: #FF7043;
          }

          .text-secondary {
            color: #4CAF50;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="highlighted-title">Our Sectors</span>
          </h2>
          <p className="section-description">
            AIFBF supports various sectors that significantly contribute to India's GDP
          </p>
        </div>

        <div className="sectors-grid">
          {sectorsData.slice(0, showMore ? sectorsData.length : 4).map((sector, index) => (
            <div className="sector-card" key={index}>
              <div className="sector-card-inner">
                <div className="icon-wrapper">{sector.icon}</div>
                <h3 className="sector-title">{sector.title}</h3>
                <button className="learn-more-button" onClick={() => setSelectedSector(sector)}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button onClick={() => setShowMore(!showMore)} className="view-more-button">
            {showMore ? 'View Less' : 'View More Sectors'}
          </button>
        </div>
      </div>

      {selectedSector && (
        <div className="modal-overlay" onClick={() => setSelectedSector(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <X className="modal-close" onClick={() => setSelectedSector(null)} />
            <h2 className="modal-title">{selectedSector.title}</h2>
            <p>{selectedSector.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sectors;
