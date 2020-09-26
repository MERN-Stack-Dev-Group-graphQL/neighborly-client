import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TOOLS_BY_CATEGORY } from '../../../../util/graphql';
import { Button } from '../../../shared/components/Buttons';
import ToolCard from './ToolCard';
import styled from 'styled-components';
// import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
// import Glide from '@glidejs/glide';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export const ToolsByCategory = ({ categoryName }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(FETCH_TOOLS_BY_CATEGORY, {
    variables: { category: categoryName },
    notifyOnNetworkStatusChange: true,
  });

  // const sliderConfiguration = {
  //   gap: 20,
  //   perView: 3,
  //   startAt: 0,
  //   type: 'slider',
  // };

  // const slider = new Glide('.glide', sliderConfiguration);

  // useEffect(() => {
  //   return () => slider.mount();
  // }, [slider]);

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <Section>
      <div className='container'>
        <div className='row card-slider'>
          {loading ? (
            <h1>Loading tools...</h1>
          ) : (
            <>
              <OwlCarousel className='owl-carousel owl-theme owl-loaded' items='3' autoplay nav={false} dots={false} loop margin={10}>
                <div className='owl-stage-outer'>
                  <div className='owl-stage'>
                    {data.getToolsByCategory.edges &&
                      data.getToolsByCategory.edges.map((tool) => (
                        <div className='owl-item' key={tool._id}>
                          <ToolCard tool={tool} />
                        </div>
                      ))}
                  </div>
                </div>
              </OwlCarousel>
              <Button
                buttonStyle='btn--primary'
                customStyle={{ margin: '0 0 0 1rem', minWidth: '120px', backgroundColor: 'var(--color-primary)' }}
                onClick={() => refetch()}
              >
                Refetch
              </Button>
              {/*  <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                  <ul className='glide__slides'>
                    {data.getToolsByCategory.edges &&
                      data.getToolsByCategory.edges.map((tool) => (
                        <li className='glide__slide slider' key={tool._id}>
                          <ToolCard tool={tool} />
                        </li>
                      ))}
                  </ul>
                </div>                

                <div className='row slide-actions'>
                  <Button buttonStyle='btn--primary' customStyle={{ margin: '0 0 0 1rem', minWidth: '120px' }} onClick={() => refetch()}>
                    Refetch
                  </Button>

                  <div className='slide-control-container glide__arrows' data-glide-el='controls'>
                    <Link to='/' className='glide__arrow slide-control glide__arrow--left' data-glide-dir='<'>
                      <FiArrowLeft />
                    </Link>
                    <Link to='/' className='glide__arrow slide-control glide__arrow--right' data-glide-dir='>'>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  .slide-control-container {
    display: flex;
    margin-right: 1rem;
  }

  .owl-theme {
    .owl-nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .owl-prev,
      .owl-next {
        display: flex;
        height: 50px;
        width: 50px;
        border-radius: 25px;
        background: var(--color-primary);
        font-size: 24px;
        color: var(--color-light);
        align-items: center;
        justify-content: center;
        margin: 0 0.25rem;
        transition: all 0.3s ease-out;

        &:hover {
          background: var(--color-primary-light);
        }
      }
    }
  }

  .glide__arrow {
    position: relative;
    top: 0;
    z-index: 2;
    text-transform: uppercase;
    padding: 9px 12px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
    text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);
    opacity: 1;
    cursor: pointer;
    transform: translateY(0);
    line-height: 1;
  }

  .glide__arrow--left {
    left: 0;
  }

  .glide__arrow--right {
    right: 0;
  }

  .slide-control {
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: var(--color-primary);
    color: var(--color-light);
    align-items: center;
    justify-content: center;
    margin: 0 0.25rem;
    transition: all 0.3s ease-out;

    &:hover {
      background: var(--color-primary-light);
    }
  }
`;
