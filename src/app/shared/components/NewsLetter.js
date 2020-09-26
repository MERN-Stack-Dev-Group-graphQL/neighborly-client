import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { NewsLetterWrapper, NewsLetterContainer } from './NewsLetter.element';
import lumberjack from '../../../assets/img/lumberjack.png';
import lumberBg from '../../../assets/img/lumber-bg.png';

const NewsLetter = () => {
  return (
    <NewsLetterWrapper className='call-to-action--newsletter-callout' style={{ backgroundImage: `url(${lumberBg})` }}>
      <div className='overlay overlay-gradient'></div>
      <NewsLetterContainer className='container'>
        <div className='row justify-content-center text-center mb-0'>
          <div className='newsletter_wrapper'>
            <div className='col-sm-12 col-md-9 col-lg-8 newsletter__signup-form'>
              <h2>Want to stay updated?</h2>
              <p>Join our mailing list to stay up-to-date on events, sales, and the latest Neighborly news.</p>
              <div className='newsletter_form'>
                <InputGroup className='mb-3'>
                  <FormControl
                    className='newsletter_input'
                    placeholder='johndoe@gmail.com'
                    aria-label='johndoe@gmail.com'
                    aria-describedby='basic-addon2'
                  />
                  <InputGroup.Append>
                    <Button variant='primary' style={{ height: '100%', borderRadius: '0 30px 30px 0' }}>
                      Submit
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
            <div className='col-sm-12 col-md-3 col-lg-4 lumberjack__wrapper'>
              <img className='lumberjack' src={lumberjack} alt='Lumberjack' />
            </div>
          </div>
        </div>
      </NewsLetterContainer>
    </NewsLetterWrapper>
  );
};

export default NewsLetter;
