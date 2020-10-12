import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import HelpPage from "../components/HelpPage.js";
import NotFoundPage from "../components/NotFoundPage.js";
import Header from "../components/Header.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";

const AppRouter = () => (
  //Sempre que o path for / mostra o component
  //exact = true faz com que so os paths IGUAIS a / apareçam
  //e nao todos os que comecam com /
  //Switch verifica tudo e se nenhum der po path mete o geral
  //que nao tem path
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
