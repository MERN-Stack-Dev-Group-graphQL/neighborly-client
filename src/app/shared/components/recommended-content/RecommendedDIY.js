import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './RecommendedDIY.scss';
import { FaPlay } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';

const mockRecommendedDIY = [
  {
    _id: 1,
    title: 'Oil change DIY',
    image: require('../../../../assets/img/diy/featured/diy-project-1.png'),
  },
  {
    _id: 2,
    title: 'Homemade Quilts',
    image: require('../../../../assets/img/diy/featured/diy-project-2.png'),
  },
  {
    _id: 3,
    title: 'Handmade Bags',
    image: require('../../../../assets/img/diy/featured/diy-project-3.png'),
  },
  {
    _id: 4,
    title: 'Embroidery',
    image: require('../../../../assets/img/diy/featured/diy-project-4.png'),
  },
];

const RecommendedDIY = () => {
  return (
    <section id='recommended-diy'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='heading-wrapper text-center mb-5'>
              <h2 className='heading-2'>DIY Videos</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <OwlCarousel className='owl-theme' items='4' autoplay nav={false} dots={false} loop margin={10}>
              {mockRecommendedDIY.map((recommendedDIY) => (
                <div className='item diy-item' key={recommendedDIY._id}>
                  <img className='diy-video-thumbnail' src={recommendedDIY.image} alt={recommendedDIY.title} />
                  <div className='title'>{recommendedDIY.title}</div>
                  <div className='diy-controls'>
                    <button className='play-btn'>
                      <BsPlay size={24} className='play-icon' />
                    </button>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDIY;
