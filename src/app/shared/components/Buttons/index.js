import React from 'react';
import styled from 'styled-components';

export const PrimaryButton = ({ style, onClick }) => {
  return (
    <Button className='more-btn' style={{ ...style }} onClick={onClick}>
      Refetch
    </Button>
  );
};
const Button = styled.button`
  background: var(--color-primary-light);
  color: #ffffff;
  border: 1px solid var(--color-primary-light);
  border-radius: 20px;
  height: 40px;
  min-width: 120px;
  text-align: center;
  margin: 1rem auto;

  a {
    text-transform: uppercase;
    padding: 0.375rem 1rem;
    font-size: 0.875rem;
    color: #ffffff;
  }

  &:hover {
    a {
      color: #ffffff;
    }
  }
`;
