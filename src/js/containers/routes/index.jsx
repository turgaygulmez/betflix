import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeList } from "./route-list";
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

export default Routes;
