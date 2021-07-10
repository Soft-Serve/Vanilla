/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Restaurant } from "@presentational";
import { MenuPage, AdminPage } from "@views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "@routes";
import { client } from "./client";
import { PostCategoryPage } from "./views/PostCategoryPage";
import { PostMenuPage } from "./views/PostMenuPage";
import { GlobalProvider } from "./contexts";

const App = () => (
  <ApolloProvider client={client}>
    <GlobalProvider>
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
          <Route exact path={routes.postCategory}>
            <MenuPage>
              <PostCategoryPage />
            </MenuPage>
          </Route>
          <Route exact path={routes.postMenu}>
            <MenuPage>
              <PostMenuPage />
            </MenuPage>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  </ApolloProvider>
);

export default App;
