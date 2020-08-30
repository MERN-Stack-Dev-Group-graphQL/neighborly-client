import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/auth";
import Login from "./home/pages/Login";
import Register from "./home/pages/Register";
import Home from "./home/pages/Home";
import AuthRoute from "../util/AuthRoute";
import PublicRoute from "../util/PublicRoute";
import * as routes from "../constants/routes";
import PageContainer from "./shared/components/PageContainer";
import { createBrowserHistory } from "history";

const App = () => (
  <AuthProvider>
    <PageContainer>
      <Router>
        <AuthRoute exact path={routes.LOGIN} component={Login} />
        <AuthRoute exact path={routes.REGISTER} component={Register} />
        <PublicRoute exact path={routes.HOME} component={Home} />
      </Router>
    </PageContainer>
  </AuthProvider>
);

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export default App;
