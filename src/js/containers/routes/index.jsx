import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { routeList } from "./routeList";
import Layout from "../layout";

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Layout>
          {routeList &&
            routeList.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
        </Layout>
      </Switch>
    );
  }
}

export default withRouter(Routes);
