import React, { useState } from 'react';
import { CATEGORIES } from '../../../../util/graphql/mock';
import { ToolsByCategory } from './ToolsByCategory';
import { Sidebar } from '../../../shared/components/Sidebar';
import dotsTopLeft from '../../../../assets/img/patterns/dots-left.svg';
import dotsTopRight from '../../../../assets/img/patterns/dots-right-top.svg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styled from 'styled-components';

export const FeaturedTools = () => {
  const [key, setKey] = useState('General');

  return (
    <CategoryWrapper>
      <div className='featured-category'>
        <div className='container-fluid featured-container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='page-title my-5'>
                <h1>Featured Categories</h1>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <TabsWrapper>
                <Tabs id='controlled-tab-tools' activeKey={key} onSelect={(k) => setKey(k)}>
                  {CATEGORIES.map((category) => (
                    <Tab eventKey={category.name} title={category.name} key={category.id}>
                      <ToolsByCategory categoryName={category.name.toUpperCase()} />
                    </Tab>
                  ))}
                </Tabs>
              </TabsWrapper>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </CategoryWrapper>
  );
};

const TabsWrapper = styled.div`
  .tab-heading {
    padding-left: 1rem;
    margin-bottom: 2rem;
  }

  .nav-tabs {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 1.5rem;

    .nav-item {
      min-width: 80px;
      text-align: center;
    }

    .nav-link {
      font-weight: 300;
      letter-spacing: 0.25px;
      color: rgba(255, 255, 255, 0.7);
      padding: 1rem;
      border: none;
      background: transparent;
      transition: all 0.3s ease-out;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }

    .active {
      color: var(--color-white);
      border-bottom: 4px solid var(--color-primary);
    }
  }
`;

const CategoryWrapper = styled.div`
  .featured-container {
    position: relative;
    background-image: url(${dotsTopLeft}), url(${dotsTopRight});
    background-size: auto 150px;
    background-color: var(--color-secondary);
    background-repeat: no-repeat;
    background-position: left top, right top, left bottom, right bottom;
    max-width: 1440px;
    padding: 30px 30px 50px 30px;
    margin: -15% auto 0px;
    z-index: 3;
  }

  .featured-category {
    position: relative;
    padding: 160px 0 0;

    &::before {
      content: '';
      position: absolute;
      height: 30vw;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
    }
  }

  .nav-category-wrapper {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    .nav-item {
      min-width: 80px;
      text-align: center;
    }

    .nav-link {
      padding: 1rem;
    }

    .active {
      border-bottom: 4px solid var(--color-primary);
    }
  }

  .slide-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .slide-controls {
    display: flex;
    margin-right: 1rem;

    .icons {
      display: block;
      height: 24px;
      width: 24px;
      line-height: 24px;
      border-radius: 12px;
      color: var(--color-light);
      background: rgba(0, 0, 0, 0.25);
      margin-left: 4px;

      &:hover {
        background: var(--color-primary);
        cursor: pointer;
      }
    }
  }
`;
