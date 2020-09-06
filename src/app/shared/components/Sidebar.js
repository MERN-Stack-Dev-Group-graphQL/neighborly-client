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
          <span>Tool safety first</span>
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
    color: var(--color-light);
  }

  .side-heading {
    position: relative;
    padding: 1rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    height: 60px;
    color: var(--color-secondary);
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

  .main-heading {
    background: var(--color-secondary);
    color: var(--color-light);
    margin: 1rem auto;
    padding: 0.875rem;

    p {
      color: var(--color-light);
    }
  }

  .filter-list {
    position: relative;
    list-style: none;
    padding: 1.4rem;
    padding-left: 3rem;
    background: #ffffff;
    min-height: 450px;
    border-radius: 2px;

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
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
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
    color: #ffffff;
    background-color: var(--color-secondary);
    font-size: 1.4rem;

    .check-circle-icon {
      position: absolute;
      transform: translateX(-120%);
    }
  }
`;
