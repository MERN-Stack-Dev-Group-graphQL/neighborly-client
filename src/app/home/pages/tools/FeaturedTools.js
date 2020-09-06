import React, { useState } from 'react';
import { CATEGORIES } from '../../../../util/graphql/mock';
import { ToolsByCategory } from './ToolsByCategory';
import { Sidebar } from '../../../shared/components/Sidebar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styled from 'styled-components';

export const FeaturedTools = () => {
  const [key, setKey] = useState('General');

  return (
    <CategoryWrapper>
      <div className='featured-category'>
        <div className='container-fluid' style={{ maxWidth: '1440px', margin: '0px auto' }}>
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;

    .nav-item {
      min-width: 80px;
      text-align: center;
    }

    .nav-link {
      padding: 1rem;
      background: transparent;
      border: none;
    }

    .active {
      border-bottom: 4px solid var(--color-primary);
    }
  }
`;

const CategoryWrapper = styled.div`
  .featured-category {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 20vw;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eaeaea;
    }
  }

  .nav-category-wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

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
