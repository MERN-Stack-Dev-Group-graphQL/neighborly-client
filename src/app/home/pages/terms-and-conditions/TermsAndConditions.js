import React from 'react';
import Banner from '../../../core/banner/Banner';
import './TermsAndConditions.scss';

const mockBanner = {
  primary: true,
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  headline: 'Terms and Conditions',
  description:
    'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
  buttonLabel: 'Learn More',
  img: require('../../../../assets/img/diy/project-one/tool-bg.png'),
  alt: 'Banner',
  start: '',
};

function TermsAndConditions() {
  return (
    <section id='terms-and-conditions'>
      <Banner {...mockBanner}>
        <h3 className='heading heading-3'>{mockBanner.headline}</h3>
      </Banner>
      <section className='terms-and-conditions'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TermsAndConditions;
