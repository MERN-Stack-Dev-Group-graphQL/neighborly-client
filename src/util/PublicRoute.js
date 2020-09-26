import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../app/core/header/NavigationBar';
import SalesBar from '../app/core/header/SalesBar';
import Footer from '../app/core/Footer';

const PublicRoute = ({ component: Component, ...rest }) => {
  const component = (props) => (
    <Fragment>
      <NavigationBar />
      <SalesBar />
      <Component {...props} />
      <Footer />
    </Fragment>
  );

  return <Route {...rest} component={component} />;
};

export default PublicRoute;
