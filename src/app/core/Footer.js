import React from 'react';
import styled from 'styled-components';
import brandLogo from '../../assets/img/brand/brand-logo.svg';
import { CATEGORIES } from '../../util/graphql/mock';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='footer-content'>
              <div className='footer-category-wrapper'>
                <h4 className='heading-4'>Categories</h4>
                <ul>
                  {CATEGORIES.map((category, index) => (
                    <li key={index}>
                      <BsDot size={16} className='icons dot-icon' />
                      <span>{category.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='footer-contact-wrapper'>
                <h4 className='heading-4'>Contact</h4>
                <ul>
                  <li>
                    <FiPhone size={16} className='icons phone-icon' />
                    <span>(646) 622-8635</span>
                  </li>
                  <li>
                    <FiMail size={16} className='icons email-icon' />
                    <span>info@neighborly.com</span>
                  </li>
                  <li>
                    <FiMapPin size={16} className='icons address-icon' />
                    <span>
                      Center City, Philadelphia
                      <br />
                      PA 19082, USA
                    </span>
                  </li>
                </ul>
              </div>
              <div className='footer-information-wrapper'>
                <h4 className='heading-4'>Information</h4>
                <ul>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>How does it work?</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>FAQs</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>Terms of Use</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>Privacy & Legal</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>Press</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>Careers</span>
                  </li>
                  <li>
                    <BsDot size={16} className='icons dot-icon' />
                    <span>Contact Us</span>
                  </li>
                </ul>
              </div>
              <div className='footer-brand-wrapper'>
                <img src={brandLogo} className='footer-brand' alt='Brand' />
                <p className='lead'>We connect families to community-based services and resources.</p>
                <div className='footer-social'>
                  <FaFacebookF size={16} className='icons facebook-icon' />
                  <FaInstagram size={16} className='icons instagram-icon' />
                  <FaYoutube size={16} className='icons youtube-icon' />
                  <FaTwitter size={16} className='icons twitter-icon' />
                </div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <p className='text-center foot-note'>
              Copyright &copy; 2020 - {currentYear} Neighborly Tool Rental Application. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

// background: url(https://link-to-file.svg) no-repeat;
const FooterWrapper = styled.div`
  position: relative;
  color: #ffffff;
  background: var(--color-secondary);
  padding: 7rem 1rem 3rem 1rem;
  border-radius: 0;
  margin-top: auto;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 67%;
    z-index: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 300vw 400vw;
    border-color: transparent transparent rgba(255, 255, 255, 0.05) transparent;
  }

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.85);
    }

    .footer-category-wrapper,
    .footer-contact-wrapper,
    .footer-information-wrapper {
      padding: 1rem;

      ul {
        margin: 0;
        padding: 0;

        li {
          position: relative;
          list-style: none;
          font-weight: 300;
          font-size: 0.875rem;
          padding-left: 24px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.75);
          -webkit-font-smoothing: antialiased;
        }
      }
    }

    .footer-category-wrapper {
      .icons {
        position: absolute;
        transform: translateX(-24px);
        top: 5px;
      }
    }

    .footer-contact-wrapper {
      .icons {
        position: absolute;
        transform: translateX(-24px);
        top: 5px;
      }
    }

    .footer-information-wrapper {
      .icons {
        position: absolute;
        transform: translateX(-24px);
        top: 5px;
      }
    }

    .footer-brand-wrapper {
      position: relative;
      padding: 1rem;
      max-width: 360px;
      z-index: 2;

      .footer-brand {
        max-width: 320px;
        margin-bottom: 2rem;
      }

      hr {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }

      p {
        color: rgba(255, 255, 255, 0.75);
        font-size: 0.875rem;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
      }
    }
  }

  .footer-social {
    display: flex;

    .icons {
      background: rgba(255, 255, 255, 0.9);
      fill: var(--color-secondary);
      stroke: var(--color-secondary);
      height: 30px;
      width: 30px;
      border-radius: 5px;
      margin-right: 16px;
      padding: 5px;
      transition: all 0.3s ease-in;

      &:hover {
        background: rgba(255, 255, 255, 1);
        cursor: pointer;
      }
    }
  }

  .foot-note {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.875rem;
    margin-top: 3rem;
    -webkit-font-smoothing: antialiased;
  }
`;
