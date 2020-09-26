import React from 'react';
import { Link } from 'react-router-dom';
import promoImage from '../../../assets/img/carousel/slider-tool-7.png';
import styled from 'styled-components';
import { Button } from './Buttons';

const PromoContainer = () => {
  return (
    <PromoSection>
      <div className='container section-container'>
        <div className='row section-grid'>
          <div className='promo-triangle'></div>
          <div className='col-lg-5 col-md-6 sec-left'>
            <div className='promo-card'>
              <h2 className='heading-2'>Earn Neighborly Tool Points.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus suscipit nesciunt ea dolorem ducimus beatae
                repellendus deleniti excepturi, cumque reprehenderit dolorum sapiente repellat quidem. Modi maxime quae qui mollitia?
              </p>
              <Link to='/'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large' customStyle={{ width: '100%', marginBottom: '1rem' }}>
                  Learn more
                </Button>
              </Link>
              <div className='muted'>
                Amet nostrum consequuntur modi sequi libero impedit mollitia recusandae eveniet eos temporibus doloremque.
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-6 sec-right'>
            <img src={promoImage} alt='Promo Tools' className='promo-image' />
          </div>
        </div>
      </div>
    </PromoSection>
  );
};

const PromoSection = styled.section`
  position: relative;
  background: var(--color-primary);
  padding: 160px 0;
  overflow: hidden;

  .promo-triangle {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 30vw solid;
    border-left: 100vw solid transparent;
    border-bottom-color: #ffffff;
    z-index: 1;
  }

  .promo-card {
    position: relative;
    background: var(--color-light);
    padding: 1.5rem 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    border-radius: 1rem;
    z-index: 2;

    .muted {
      color: rgba(0, 0, 0, 0.5);
      font-size: 0.875rem;
    }
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.5rem;
    min-width: 12.5rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
  }

  .sec-right {
    display: flex;
    align-items: center;
  }

  .promo-image {
    position: relative;
    z-index: 2;
  }
`;

export default PromoContainer;
