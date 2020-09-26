import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { FaTools } from 'react-icons/fa';
import dotsTopLeft from '../../../assets/img/patterns/dots-left.svg';
import dotsTopRight from '../../../assets/img/patterns/dots-right-top.svg';
import styled from 'styled-components';

const SalesBar = () => {
  return (
    <SalesBarSection id='nbs-sales-bar' className='nbs-sales-bar'>
      <div className='nbs-content'>
        <div className='container'>
          <div id='sales-box'>
            <div className='sales-box-content'>
              <div className='left-bar nbs-track-tools'>
                <span className='mr-3'>
                  COVID-19 <br />
                  Delivery FAQS
                </span>
                <FiAlertCircle size={24} />
                <div className='bar-pipe' style={{ background: '#ffffff' }}></div>
              </div>
              <div className='center-bar'>
                <FaTools size={24} />
                <div className='ml-3'>
                  A Revolutionary peer-to-peer tool renting service: <span className='cta-phone'>Call 1.800.GET.TOOL</span>
                </div>
              </div>
              <div className='right-bar nbs-tool-return-policy'>
                <div className='bar-pipe' style={{ background: '#ffffff' }}></div>
                <FiCalendar size={24} />
                <span className='ml-3'>
                  See our <br />
                  Return Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SalesBarSection>
  );
};

export default SalesBar;

const SalesBarSection = styled.section`
  flex: 1 0 auto;
  color: #f5f5f7;

  .bar-pipe {
    margin: 0 15px;
    width: 1px;
    height: 30px;
  }

  .nbs-content {
    background-image: url(${dotsTopLeft}), url(${dotsTopRight});
    background-size: auto 150px;
    background-color: var(--color-secondary-dark);
    background-repeat: no-repeat;
    background-position: left top, right top, left bottom, right bottom;
    height: 60px;
    text-align: center;
    line-height: 48px;
    position: relative;
  }

  #sales-box {
    .sales-box-content {
      display: flex;
      height: 60px;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      .left-bar,
      .center-bar,
      .right-bar {
        display: flex;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.01em;
      }

      .right-bar,
      .center-bar,
      .left-bar {
        align-items: center;
      }

      .left-bar {
        text-align: left;
      }

      .center-bar {
        font-size: 14px;
        font-weight: 300;

        .cta-phone {
          font-size: 16px;
          font-weight: bold;
        }
      }

      .right-bar {
        text-align: right;
      }

      .nbs-track-tools {
        font-size: 12px;
        line-height: 1.2;
        align-items: center;
      }

      .nbs-tool-return-policy {
        font-size: 12px;
        line-height: 1.2;
        align-items: center;

        span {
          text-align: left;
        }
      }
    }
  }
`;
