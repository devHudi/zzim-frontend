import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "components";
import { Main, Share } from "pages";

const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/share-target">
            <Share />
          </Route>
          <Router path="*">404 Error</Router>
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
