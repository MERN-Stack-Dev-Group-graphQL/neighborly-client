import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import Login from './home/pages/Login';
import Register from './home/pages/Register';
import Home from './home/pages/home/Home';
import Tools from './home/pages/tools/Tools';
import ToolDetailPage from './home/pages/tools/ToolDetailPage';
import Contact from './home/pages/contact/Contact';
import PrivacyPolicy from './home/pages/privacy-policy/PrivacyPolicy';
import TermsAndConditions from './home/pages/terms-and-conditions/TermsAndConditions';
import FAQs from './home/pages/faqs/FAQs';
import AuthRoute from '../util/AuthRoute';
import PublicRoute from '../util/PublicRoute';
import PageContainer from './shared/components/PageContainer';
import PageNotFound from './shared/components/PageNotFound';
import * as routes from '../constants/routes';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const App = () => (
  <AuthProvider>
    <PageContainer>
      <Router history={history}>
        <Switch>
          <AuthRoute path={routes.LOGIN} component={Login} />
          <AuthRoute path={routes.REGISTER} component={Register} />
          <PublicRoute exact path={routes.HOME} component={Home} />
          <PublicRoute path={routes.TOOLS} component={Tools} />
          <PublicRoute exact path={routes.TOOL_DETAIL} component={ToolDetailPage} />
          <PublicRoute exact path={routes.CONTACT} component={Contact} />
          <PublicRoute exact path={routes.PRIVACY_POLICY} component={PrivacyPolicy} />
          <PublicRoute exact path={routes.TERMS_AND_CONDITIONS} component={TermsAndConditions} />
          <PublicRoute exact path={routes.FAQS} component={FAQs} />
          <PublicRoute path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </PageContainer>
  </AuthProvider>
);

export default App;
