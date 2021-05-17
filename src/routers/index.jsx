import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "components";
import { Main } from "pages";

const RootRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Router path="*">404 Error</Router>
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
