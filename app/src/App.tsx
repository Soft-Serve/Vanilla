import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { Restaurant } from "@presentational";
import { MenuPage, AdminPage } from "@views";
import { routes } from "@routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path={routes.menu}>
          <MenuPage>
            <Restaurant />
          </MenuPage>
        </Route>
        <Route exact path={routes.admin}>
          <MenuPage>
            <AdminPage />
          </MenuPage>
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
