import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <Fragment>
      <Form inline onSubmit={handleSubmit} className='p-2 flex-grow-1 nav-search-wrapper'>
        <FormControl
          type='text'
          name='search'
          autoComplete='off'
          onChange={handleChange}
          value={values.search}
          placeholder='Find a tool...'
          className='mr-sm-2 nav-search-input'
          id='search-input'
          required
        />
        <Button type='submit' variant='info' className='nav-search-btn'>
          <FiSearch />
        </Button>
      </Form>
    </Fragment>
  );
};

export default SearchBar;
