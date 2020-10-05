import React, { Fragment } from 'react';
import HeroSection from '../../../core/carousel/HeroSection';
import PhotoCarousel from '../../../core/carousel/PhotoCarousel';
import { NewsLetter } from '../../../shared/components';
import { FeaturedTools } from '../tools/FeaturedTools';
import { homeObjOne, homeObjTwo } from './data';
import Feedback from '../../../shared/components/Feedback';
import DIYContent from '../../../shared/components/DIYContent';
import Testimonials from '../../../core/testimonials/Testimonials';
import RecommendedDIY from '../../../shared/components/recommended-content/RecommendedDIY';

function Home() {
  return (
    <Fragment>
      <PhotoCarousel />
      <FeaturedTools />
      <DIYContent />
      <Testimonials />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <RecommendedDIY />
      <NewsLetter />
      <Feedback />
    </Fragment>
  );
}

export default Home;
