import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "components";
import { Main, SubMain } from "pages";

const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/submain">
            <SubMain />
          </Route>
          <Router path="*">404 Error</Router>
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
