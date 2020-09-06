import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PromoContainer = () => {
  return (
    <PromoSection>
      <div className='container section-container'>
        <div className='row section-grid'>
          <div className='col-lg-5 col-md-6 sec-left'>
            <div className='promo-card'>
              <h2 className='heading-2'>Earn Neighborly Tool Points.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus suscipit nesciunt ea dolorem ducimus beatae
                repellendus deleniti excepturi, cumque reprehenderit dolorum sapiente repellat quidem. Modi maxime quae qui mollitia?
              </p>
              <Link to='/' className='btn btn-primary cta'>
                Learn more
              </Link>
              <div className='muted'>
                Amet nostrum consequuntur modi sequi libero impedit mollitia recusandae eveniet eos temporibus doloremque.
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-6 sec-right'></div>
        </div>
      </div>
    </PromoSection>
  );
};

const PromoSection = styled.section`
  background: var(--color-primary);

  .promo-card {
    background: var(--color-light);
    padding: 1.5rem 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    border-radius: 1rem;

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
`;

export default PromoContainer;
