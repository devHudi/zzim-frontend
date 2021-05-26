import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { Layout } from "components";
import {
  Main,
  ItemDetail,
  ItemManuallyAdd,
  Fetching,
  NotSupported,
  AddComplete,
  Share,
  Sign,
} from "pages";

const RootRouter = () => {
  const history = useHistory();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/item-detail/:id">
            <ItemDetail />
          </Route>
          <Route exact path="/item-manually-add">
            <ItemManuallyAdd />
          </Route>
          <Route exact path="/fetching">
            <Fetching />
          </Route>
          <Route exact path="/not-supported">
            <NotSupported />
          </Route>
          <Route exact path="/add-complete">
            <AddComplete />
          </Route>
          <Route exact path="/share-target">
            <Share />
          </Route>
          <Route exact path="/sign">
            <Sign />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:id">
            <Main />
          </Route>
          <Router path="*">
            <Main />
          </Router>
        </Switch>
      </Layout>
    </Router>
  );
};

export default RootRouter;
