import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Banner.scss';

const Banner = ({ children, lightBg, lightText, lightTextDescription, img, alt }) => {
  console.log(img);
  return (
    <Jumbotron style={{ position: 'relative', backgroundColor: 'transparent' }}>
      <div className='banner-container' style={{ backgroundImage: `url(${img})` }}></div>
      <div className='container text-center' style={{ color: '#ffffff' }}>
        {children}
      </div>
    </Jumbotron>
  );
};

export default Banner;
