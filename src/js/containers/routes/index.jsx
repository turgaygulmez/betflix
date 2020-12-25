import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeList } from "./route-list";

class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
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
      </Switch>
    );
  }
}

export default Routes;
