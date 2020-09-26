import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './DIYContent.scss';
import dotsTopLeft from '../../../assets/img/patterns/dots-left.svg';
import dotsTopRight from '../../../assets/img/patterns/dots-right-top.svg';
import dotsBottomLeft from '../../../assets/img/patterns/dots-left-bottom.svg';
import dotsBottomRight from '../../../assets/img/patterns/dots-right.svg';
import { Fade, Slide } from 'react-awesome-reveal';
import { Button } from './Buttons';

const mockDIYContent = [
  {
    _id: 1,
    title: 'DIY Garden Bench',
    diyUrl: '',
    description:
      'Iste delectus laborum soluta dolorum quasi magni architecto consequuntur adipisci ducimus fuga debitis eligendi modi facilis dolor totam.',
    brandLogoUrl: require('../../../assets/img/diy/diy-content-brand.png'),
    backgroundImage: require('../../../assets/img/diy/project-one/tool-bg.png'),
    diyProjectTools: [
      {
        name: 'Sander',
        imgUrl: require('../../../assets/img/diy/project-one/tool-1.png'),
      },
      {
        name: 'Circular Saw',
        imgUrl: require('../../../assets/img/diy/project-one/tool-2.png'),
      },
      {
        name: 'Router',
        imgUrl: require('../../../assets/img/diy/project-one/tool-3.png'),
      },
      {
        name: 'Hammer',
        imgUrl: require('../../../assets/img/diy/project-one/tool-4.png'),
      },
      {
        name: 'Cordless Drill',
        imgUrl: require('../../../assets/img/diy/project-one/tool-5.png'),
      },
    ],
  },
  {
    _id: 2,
    title: 'DIY Backyard Patio',
    diyUrl: '',
    description:
      'Iste delectus laborum soluta dolorum quasi magni architecto consequuntur adipisci ducimus fuga debitis eligendi modi facilis dolor totam.',
    brandLogoUrl: require('../../../assets/img/diy/diy-content-brand.png'),
    backgroundImage: require('../../../assets/img/diy/project-two/tool-bg.png'),
    diyProjectTools: [
      {
        name: 'Sander',
        imgUrl: require('../../../assets/img/diy/project-two/tool-1.png'),
      },
      {
        name: 'Circular Saw',
        imgUrl: require('../../../assets/img/diy/project-two/tool-2.png'),
      },
      {
        name: 'Router',
        imgUrl: require('../../../assets/img/diy/project-two/tool-3.png'),
      },
      {
        name: 'Hammer',
        imgUrl: require('../../../assets/img/diy/project-two/tool-4.png'),
      },
      {
        name: 'Cordless Drill',
        imgUrl: require('../../../assets/img/diy/project-two/tool-5.png'),
      },
    ],
  },
];

const DIYContent = () => {
  return (
    <section id='diy-content' className='diy-content'>
      <OwlCarousel className='owl-theme' items='1' autoplay autoplayHoverPause={true} nav dots={false} loop>
        {mockDIYContent.map((diy) => (
          <div className='item tns-item' key={diy._id}>
            <div className='diy-background' style={{ backgroundImage: `url(${diy.backgroundImage})` }}></div>
            <div className='container'>
              <div className='diy-inner'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h1 className='title'>{diy.title}</h1>
                    <hr style={{ borderTop: '1px solid rgba(255,255,255, 0.1)' }} />
                    <div className='comment mb-5'>{diy.description}</div>
                    <Button>Learn How</Button>
                  </div>
                  <div className='col-md-4'>
                    <Slide
                      className='box'
                      childClassName='diy-brand-logo'
                      direction='right'
                      style={{
                        backgroundImage: `url(${dotsTopLeft}), url(${dotsTopRight}), url(${dotsBottomLeft}), url(${dotsBottomRight})`,
                      }}
                    >
                      <img src={diy.brandLogoUrl} alt='DIY Brand Logo' />
                    </Slide>
                  </div>
                </div>
                <Fade delay={600}>
                  <div className='row'>
                    <div className='col-md-12'>
                      <h4 className='heading-4 text-center mb-3'>Tools used in this project</h4>
                      <div className='project-tools'>
                        {diy.diyProjectTools.map((tool) => (
                          <div className='tool-item' key={tool.name}>
                            <img className='tool-image' src={tool.imgUrl} alt={tool.name} />
                            <span className='tool-name'>{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default DIYContent;
