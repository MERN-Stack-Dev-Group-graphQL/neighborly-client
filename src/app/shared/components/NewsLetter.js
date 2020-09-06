import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { NewsLetterWrapper, NewsLetterContainer } from './NewsLetter.element';

const NewsLetter = () => {
  return (
    <NewsLetterWrapper className='call-to-action--newsletter-callout'>
      <NewsLetterContainer className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-sm-12 col-md-10 col-lg-8'>
            <h2>Want to stay updated?</h2>
            <p>Join our mailing list to stay up-to-date on events, sales, and the latest Neighborly news.</p>
            <div className='newsletter_wrapper'>
              <InputGroup className='mb-3'>
                <FormControl placeholder='johndoe@gmail.com' aria-label='johndoe@gmail.com' aria-describedby='basic-addon2' />
                <InputGroup.Append>
                  <Button variant='outline-primary'>Submit</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        </div>
      </NewsLetterContainer>
    </NewsLetterWrapper>
  );
};

export default NewsLetter;
