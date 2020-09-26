import React from 'react';
import Banner from '../../../core/banner/Banner';
import './FAQs.scss';

const mockBanner = {
  primary: true,
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  headline: 'FAQs',
  description:
    'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
  buttonLabel: 'Learn More',
  img: require('../../../../assets/img/diy/project-one/tool-bg.png'),
  alt: 'Banner',
  start: '',
};

function FAQs() {
  return (
    <section id='faqs-wrapper'>
      <Banner {...mockBanner}>
        <h3 className='heading heading-3'>{mockBanner.headline}</h3>
      </Banner>
      <section className='faqs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FAQs;
