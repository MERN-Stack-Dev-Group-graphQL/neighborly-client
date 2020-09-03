import React, { Fragment } from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const PageNotFound = ({ location }) => {
  const pathName = location.pathname;
  const path = pathName.substr(1);
  console.log(path);

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <PageNotFoundWrapper className='page-not-found__wrapper'>
              <h1>404 page not found</h1>
              <p>
                We are sorry but the page you are looking for titled <span className='pathname'>{path}</span> does not exist.
              </p>
              <Nav.Link href='/' className='primary-btn'>
                Return home
              </Nav.Link>
            </PageNotFoundWrapper>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;

const PageNotFoundWrapper = styled.div`
  padding: 6rem 2rem;
  text-align: center;

  .pathname {
    font-weight: bold;
  }

  .primary-btn {
    display: inline-block;
    background-color: var(--color-primary);
    color: var(--color-light);
    text-transform: uppercase;
    height: 50px;
    line-height: 50px;
    border-radius: 25px;
    padding: 0 2rem;

    &:hover,
    &:active,
    &:focus {
      background-color: rgb(23, 147, 167);
    }
  }
`;
