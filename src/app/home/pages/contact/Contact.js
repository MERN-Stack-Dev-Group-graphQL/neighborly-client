import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Button } from '../../../shared/components/Buttons';
import Banner from '../../../core/banner/Banner';
import './Contact.scss';

const mockBanner = {
  primary: true,
  lightBg: false,
  lightText: true,
  lightTextDescription: true,
  headline: 'Contact us',
  description:
    'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.',
  buttonLabel: 'Learn More',
  img: require('../../../../assets/img/diy/project-one/tool-bg.png'),
  alt: 'Banner',
  start: '',
};

const Contact = () => {
  return (
    <section id='nbs-banner'>
      <Banner {...mockBanner}>
        <h3 className='heading heading-3'>Contact us</h3>
      </Banner>
      <ContactContainer className='container'>
        <div className='row'>
          <h2 className='extra-header__secondary text-center col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
            Got
            <b>amazing diy ideas?</b>
            Let’s bring it to market together
          </h2>
          <div className='col-md-6'>
            <h5 className='sub-heading'>Welcome to Neighborly</h5>
            <h1 className='heading heading-1'>
              We love to hear
              <br />
              your feedback
            </h1>
            <div className='lead'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium poeyi doloremque laudantium, totam rem aperiam,
              eaque ipsa quae apsb illo inventore veritatis et quasi architecto beiatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, seprid quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam aliqueam quaerat voluptatem.
            </p>
          </div>
          <div className='col-md-6 contact-flow'>
            <Form>
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Form.Label>Your name</Form.Label>
                <Form.Control type='text' placeholder='Your name' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput2'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput3'>
                <Form.Label>Phone number</Form.Label>
                <Form.Control type='text' placeholder='Phone number' />
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows='3' />
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </div>
          <div className='col-md-12'>
            <div className='contact-action'>
              <div className='phone'>
                <FiPhone size={16} className='icons phone-icon' />
                <span>662-697-3435</span>
              </div>
              <div className='social'>
                <FaFacebookF size={16} className='icons facebook-icon' />
                <FaInstagram size={16} className='icons instagram-icon' />
                <FaYoutube size={16} className='icons youtube-icon' />
                <FaTwitter size={16} className='icons twitter-icon' />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </ContactContainer>
    </section>
  );
};

const ContactContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default Contact;
