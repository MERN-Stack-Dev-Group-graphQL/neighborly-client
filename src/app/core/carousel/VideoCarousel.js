import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import videoOne from '../../../assets/videos/video1.mp4';
import videoTwo from '../../../assets/videos/video2.mp4';
import styled from 'styled-components';

const carouselData = {
  heading: 'Rent amazing tools shared and cared for by your neighbors.',
  cta: [
    {
      route: '/tools',
      title: 'Explore Tools',
    },
    {
      route: '/dashboard/add-tool',
      title: 'List Tools',
    },
  ],
};

const VideoCarousel = () => {
  return (
    <CarouselWrapper>
      <div className='page-header__title'>
        <h1>Rent amazing tools shared and cared for by your neighbors.</h1>
        <div className='cta-wrapper'>
          <Link to='/tools' className='btn btn-outline-primary btn-lg carousel-cta'>
            Explore Tools
          </Link>
          <Link to='/dashboard/add-tool' className='btn btn-outline-primary btn-lg carousel-cta'>
            List Tools
          </Link>
        </div>
      </div>
      <Carousel fade={true}>
        <Carousel.Item>
          <video className='page-header__bg-video' poster='true' playsInline autoPlay muted loop>
            <source src={videoOne} type='video/mp4' />
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <video className='page-header__bg-video' poster='true' playsInline autoPlay muted loop>
            <source src={videoTwo} type='video/mp4' />
          </video>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;

  &::before {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(#000));
    background: linear-gradient(180deg, transparent 0.75, #000);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.75), #12244d);
    height: 100%;
    width: 100%;
    bottom: 0;
    content: '';
    display: block;
    position: absolute;
    opacity: 0.95;
    -webkit-transition: opacity ease-in-out 0.5s;
    transition: opacity ease-in-out 0.5s;
    z-index: 2;
  }

  .carousel-item {
    height: 60vh;
    min-height: 480px;
  }

  .carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 600px;
  }

  .carousel-caption {
    bottom: 50%;
    transform: translateY(50%);
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 3;
  }

  .page-header__title {
    position: absolute;
    color: #fff;
    right: 15%;
    bottom: 50%;
    left: 15%;
    transform: translateY(50%);
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    z-index: 10;

    h1 {
      font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
      font-size: 3rem;
      font-weight: 700;
      font: 500 42px/130% 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

      letter-spacing: 0;
      text-transform: uppercase;
      max-width: 720px;
      width: 100%;
    }
  }

  .carousel-cta {
    font-size: 1rem;
    height: 50px;
    line-height: 50px;
    padding: 0 1.2rem;
    margin: 2rem 1rem 2rem 0;
    color: var(--color-light);
    border-color: var(--color-light);

    &:hover {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }

  .page-header__scroll-arrow {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    z-index: 999;
    margin-left: -11px;
    display: block;
  }
`;

export default VideoCarousel;
