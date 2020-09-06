import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const carouselData = [
  {
    _id: 1,
    heading: 'Rent tools cared for by your neighbors.',
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
    imagePath: require('../../../assets/img/pexels-one.jpg'),
    toolPath: require('../../../assets/img/carousel/slider-tool-4.png'),
  },
  {
    _id: 2,
    heading: 'Watch videos on how to build home projects.',
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
    imagePath: require('../../../assets/img/pexels-two.jpg'),
    toolPath: require('../../../assets/img/carousel/slider-tool-3.png'),
  },
];

const PhotoCarousel = () => {
  return (
    <CarouselWrapper>
      <Carousel className='carousel-main-wrapper' fade={true} timeout={1000}>
        {carouselData.map((item) => (
          <Carousel.Item key={item._id}>
            <img className='slider-background d-block w-100' src={item.imagePath} alt='First slide' />
            <div className='carousel-triangle'></div>
            <div className='carousel-content'>
              <div className='caption-text'>
                <Fade delay={600}>
                  <h1 className='heading-1'>{item.heading}</h1>
                  <Fade delay={1200}>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Fade>
                </Fade>
              </div>
              <div className='caption-image'>
                <Fade delay={800}>
                  <img className='action-image' src={item.toolPath} alt='Slider' />
                </Fade>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  position: relative;

  .carousel-triangle {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 30vw solid;
    border-left: 80vw solid transparent;
    border-bottom-color: #ffffff;
    z-index: 3;
  }

  .carousel-main-wrapper {
    position: relative;
    background-color: #eef2f5;
    bottom: 0;
    z-index: 3;

    &::after {
      content: '';
      background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.65)));
      background: -o-linear-gradient(top, transparent 0, rgba(0, 0, 0, 0.65) 100%);
      background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.65));
      opacity: 0.4;
      height: 420px;
      width: 100%;
      position: absolute;
      z-index: 4;
      bottom: 0;
    }
  }

  &::before {
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(#000));
    background: linear-gradient(180deg, transparent 0.75, #000);
    background: linear-gradient(180deg, rgba(238, 178, 0, 1), rgba(255, 194, 11, 1));
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
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(#000));
    background: linear-gradient(180deg, transparent 0.75, #000);
    background: linear-gradient(180deg, rgba(255, 205, 57, 1), rgba(255, 194, 11, 1));
  }

  .carousel-item .slider-background {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 600px;
    opacity: 0.1;
  }

  .carousel-content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    height: 100%;
    padding: 0 15%;
    z-index: 10;
  }

  .caption-text {
    flex: 1;
  }

  .caption-image {
    flex: 1;

    img {
      width: 100%;
      max-height: 420px;
      object-fit: contain;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 5;
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
  }

  h1 {
    position: relative;
    font: 700 48px/120% 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
    color: var(--color-secondary);
    text-transform: uppercase;
    letter-spacing: 0;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      height: 4px;
      width: 30%;
      background-color: #ef4b46;
      z-index: 2;
    }
  }

  p {
    color: var(--color-secondary);
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

export default PhotoCarousel;
