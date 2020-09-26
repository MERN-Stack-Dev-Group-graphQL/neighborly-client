import React from 'react';
import Banner from '../../../core/banner/Banner';
import './PrivacyPolicy.scss';

const mockBanner = {
  primary: true,
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  headline: 'Privacy Policy',
  description:
    'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
  buttonLabel: 'Learn More',
  img: require('../../../../assets/img/diy/project-one/tool-bg.png'),
  alt: 'Banner',
  start: '',
};

function PrivacyPolicy() {
  return (
    <section id='privacy-policy'>
      <Banner {...mockBanner}>
        <h3 className='heading heading-3'>{mockBanner.headline}</h3>
      </Banner>
      <section className='privacy-policy'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PrivacyPolicy;
