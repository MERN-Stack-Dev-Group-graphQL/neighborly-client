import React, { Fragment } from 'react';
import PhotoCarousel from '../../core/carousel/PhotoCarousel';
import { NewsLetter } from '../../shared/components';
import { PromoContainer } from '../../shared/components';
import { FeaturedTools } from './tools/FeaturedTools';

function Home() {
  return (
    <Fragment>
      <PhotoCarousel />
      <FeaturedTools />
      <PromoContainer />
      <NewsLetter />
    </Fragment>
  );
}

export default Home;
