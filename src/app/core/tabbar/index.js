import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import styled from 'styled-components';
import { CATEGORIES } from '../../../util/graphql/mock';

export const TabBar = () => {
  const [key, setKey] = useState('General');

  return (
    <TabsWrapper>
      <Tabs id='controlled-tab-example' activeKey={key} onSelect={(k) => setKey(k)}>
        {CATEGORIES.map((category) => (
          <Tab eventKey={category.name} title={category.name}>
            <h3>{category.name} Category</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tempore ab accusantium sit molestiae, ipsa adipisci ut est qui
              perferendis mollitia ea aspernatur earum. Illo voluptates quibusdam expedita quia nemo.
            </p>
          </Tab>
        ))}
      </Tabs>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
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
