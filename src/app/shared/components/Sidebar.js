import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <SIDEBAR className='col-md-3'>
      <h5 className='side-heading'>Filter Results</h5>

      <Form className='filter-list'>
        {['radio'].map((type) => (
          <div key={`default-${type}`} className='mb-3'>
            <Form.Check type={type} id={`owner-${type}`} className='filter-item' label={`Owner`} />
            <Form.Check type={type} id={`location-${type}`} className='filter-item' label={`Location`} />
            <Form.Check type={type} id={`distance-${type}`} className='filter-item' label={`Distance`} />
            <Form.Check type={type} id={`ratings-${type}`} className='filter-item' label={`Ratings`} />
            <Form.Check type={type} id={`brand-${type}`} className='filter-item' label={`Brand`} />
            <Form.Check type={type} id={`category-${type}`} className='filter-item' label={`Category`} />
          </div>
        ))}
      </Form>

      <div className='main-heading'>
        <div className='filter-heading'>
          <FaCheckCircle size={24} className='icons check-circle-icon' />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <span className='mr-2'>Tool</span>
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span>safety</span>
              <svg
                className='nbs-safety-header-underline'
                width='75px'
                height='15px'
                viewBox='0 0 75 15'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'
              >
                <path
                  id='nbs-search-header-underline'
                  fill='rgba(239, 181, 67, 1)'
                  d='M0,10.3c1.4-0.8,2.8-1.5,4.2-2.1C5.6,7.5,7,7,8.4,6.4c1.4-0.5,2.8-1.1,4.3-1.6c1.4-0.4,2.9-0.9,4.3-1.3
c1.5-0.4,2.9-0.8,4.4-1.1l4.4-0.9l4.5-0.7c0.7-0.1,1.5-0.2,2.2-0.3l2.2-0.2L37,0.1l2.2,0c1.5,0,3-0.1,4.5,0c3,0.1,6,0.3,8.9,0.7
L54.8,1c0.7,0.1,1.5,0.2,2.2,0.4l4.4,0.9c1.5,0.3,2.9,0.7,4.3,1.2l4.2,1.3l-4.3-1c-1.4-0.4-2.9-0.7-4.3-0.9l-4.4-0.6
c-0.7-0.1-1.5-0.2-2.2-0.2L52.5,2c-2.9-0.2-5.9-0.2-8.8-0.1c-1.5,0-2.9,0.2-4.4,0.3l-2.2,0.2L35,2.8l-2.2,0.3
c-0.7,0.1-1.4,0.2-2.1,0.4l-4.3,1l-4.2,1.2c-1.4,0.4-2.8,0.9-4.1,1.4c-1.4,0.5-2.7,1.1-4,1.6c-1.3,0.6-2.6,1.2-4,1.8
c-1.3,0.6-2.6,1.3-3.8,2c-1.2,0.7-2.5,1.4-3.6,2.2L0,10.3z'
                  strokeDasharray='147.18386840820312'
                  style={{ stroke: 'rgba(239, 181, 67, 1)' }}
                ></path>
              </svg>
            </span>{' '}
            first
          </div>
        </div>
        <div className='filter-subheading'>
          <p>We listed the measures we take to keep you and your tools safe.</p>
          <Link to='/' className='read-more'>
            Read more
          </Link>
        </div>
      </div>
    </SIDEBAR>
  );
};

const SIDEBAR = styled.aside`
  .read-more {
  }

  .side-heading {
    position: relative;
    padding: 1rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    height: 60px;
    color: var(--color-white);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;

    &::after {
      position: absolute;
      content: '';
      height: 4px;
      width: 80px;
      left: 0;
      bottom: 0;
      background: var(--color-primary);
    }
  }

  .filter-list {
    position: relative;
    list-style: none;
    padding: 1.4rem;
    padding-left: 3rem;
    background: #ffffff;
    border-radius: 5px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      height: 20px;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-primary);
      border-radius: 0 0 2px 2px;
    }

    .filter-item {
      display: flex;
      position: relative;
      align-items: center;
      padding-left: 0;
      padding-bottom: 0.25rem;
      margin-bottom: 0.25rem;
      line-height: 2;
      border-bottom: 1px solid #f9f9f9;

      &:hover {
        color: var(--color-primary);
        cursor: pointer;
      }
    }

    .filter-radio {
      transform: translateX(-1.2rem);
    }

    .form-check-input {
      margin-top: 0;
      margin-left: -1.5rem;
    }
  }

  .filter-heading,
  .filter-subheading {
    margin-left: 2rem;
  }

  .filter-heading {
    display: flex;
    align-items: center;
    color: var(--color-secondary);
    font-size: 1.4rem;

    .check-circle-icon {
      position: absolute;
      transform: translateX(-120%);
    }

    .nbs-safety-header-underline {
      margin-top: -10px;
      margin-bottom: -1rem;
    }
  }

  .filter-subheading {
    margin-top: 0.75rem;
  }

  .main-heading {
    position: relative;
    background: var(--color-white);
    margin: 1rem auto;
    padding: 1.5rem 0.875rem 3rem;
    border-radius: 5px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      height: 20px;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-primary);
      border-radius: 0 0 2px 2px;
    }
  }
`;
