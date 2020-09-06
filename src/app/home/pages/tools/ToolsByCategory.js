import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_TOOLS_BY_CATEGORY } from '../../../../util/graphql';
import { PrimaryButton } from '../../../shared/components/Buttons';
import ToolCard from './ToolCard';
import styled from 'styled-components';

export const ToolsByCategory = ({ categoryName }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(FETCH_TOOLS_BY_CATEGORY, {
    variables: { category: categoryName },
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div className='container'>
      <div className='row card-slider'>
        {loading ? (
          <h1>Loading tools...</h1>
        ) : (
          <HorizontalScroll>
            {data.getToolsByCategory.edges && data.getToolsByCategory.edges.map((tool) => <ToolCard tool={tool} key={tool._id} />)}
          </HorizontalScroll>
        )}
      </div>
      <div className='row slide-actions'>
        <PrimaryButton style={{ margin: '0 0 0 1rem' }} onClick={() => refetch()} />
        <div className='slide-controls'>{/* place slide controls here */}</div>
      </div>
    </div>
  );
};

const HorizontalScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;

  ::-webkit-scrollbar {
    width: 4px;
  }
`;
