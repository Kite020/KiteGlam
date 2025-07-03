import React from 'react';
import HeroSection from './HeroSection';
import BeautyBanner from '../img/BeautyBanner.png';
import JewelBanner from '../img/JewelBanner.png';
import WomenBanner from '../img/WomenBanner.png';
import FootwearBanner from '../img/FootwearBanner.png';
import WatchBanner from '../img/WatchBanner.png';
import BagBanner from '../img/BagBanner.png';
import AccessoriesBanner from '../img/AccessoriesBanner.png';
import './HomePage.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {

  return (
    <div className="homepage-wrapper">
      
      <div className="banners">
        <Link to="/beauty" className='banner-link'>
          <img
            src={BeautyBanner}
            alt="Beauty Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/jewel" className='banner-link'>
          <img
            src={JewelBanner}
            alt="Jewel Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/women" className='banner-link'>
          <img
            src={WomenBanner}
            alt="Women Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/footwear" className='banner-link'>
          <img
            src={FootwearBanner}
            alt="Footwear Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/watch" className='banner-link'>
          <img
            src={WatchBanner}
            alt="Watch Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/bag" className='banner-link'>
          <img
            src={BagBanner}
            alt="Bag Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <Link to="/accessories" className='banner-link'>
          <img
            src={AccessoriesBanner}
            alt="Accessories Banner"
            className="banner-image"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>
      <HeroSection />
      <div className="footer" style={{ textAlign: 'center', padding: '1rem',marginTop: '2rem' }}>
        <p>&copy; 2023 My E-commerce Site. All rights reserved.</p>
      </div>
    </div>
  );
};

export default HomePage;
