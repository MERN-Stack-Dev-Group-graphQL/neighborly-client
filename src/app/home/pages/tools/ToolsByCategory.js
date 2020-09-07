import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TOOLS_BY_CATEGORY } from '../../../../util/graphql';
import { PrimaryButton } from '../../../shared/components/Buttons';
import ToolCard from './ToolCard';
import styled from 'styled-components';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Glide from '@glidejs/glide';

const sliderConfiguration = {
  gap: 20,
  perView: 3,
  startAt: 0,
  type: 'slider',
};

export const ToolsByCategory = ({ categoryName }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(FETCH_TOOLS_BY_CATEGORY, {
    variables: { category: categoryName },
    notifyOnNetworkStatusChange: true,
  });

  const slider = new Glide('.glide', sliderConfiguration);

  useEffect(() => {
    return () => slider.mount();
  }, [slider]);

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
              <div className='glide'>
                <div className='glide__track' data-glide-el='track'>
                  <ul className='glide__slides'>
                    {data.getToolsByCategory.edges &&
                      data.getToolsByCategory.edges.map((tool) => (
                        <li className='glide__slide slider'>
                          <ToolCard tool={tool} key={tool._id} />
                        </li>
                      ))}
                  </ul>
                </div>

                <div className='glide__arrows' data-glide-el='controls'>
                  <button className='glide__arrow glide__arrow--left' data-glide-dir='<'>
                    <FiArrowLeft />
                  </button>
                  <button className='glide__arrow glide__arrow--right' data-glide-dir='>'>
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='row slide-actions'>
          <PrimaryButton style={{ margin: '0 0 0 1rem' }} onClick={() => refetch()} />
          <div className='slide-control-container'>
            <Link className='slide-control slide-left'>
              <FiArrowLeft />
            </Link>
            <Link className='slide-control slide-right'>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  .slide-actions {
  }

  .slide-control-container {
    display: flex;
    margin-right: 1rem;

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
      transition: all 0.1s ease-in;

      &:hover {
        background: var(--color-secondary);
      }
    }
  }
`;

const HorizontalScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;

  ::-webkit-scrollbar {
    width: 4px;
  }
`;
