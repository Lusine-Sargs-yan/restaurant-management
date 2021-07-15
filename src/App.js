import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes } from "./helpers/routes";
import { useState } from "react";
import CartProvider from "./context/cart/CartState";
import {TableListComponent } from "./reservation/table-list";
import Scroll from "./components/scroll/ScrollToTop";
import SearchComponent from "./containers/search/Search";
import { AdminComponent } from "./admin/admin";
import LocalStorageData from "./helpers/creatingLocalstoragesDate";
import "./App.css";


export const ReserveContext = React.createContext();

export default function App() {
  const [hasReserve, setHasReserve] = useState(false);
  const changeReserveState = () => {
    setHasReserve((prev) => !prev);
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const changeAdminState = () => {
    setIsAdmin((prev) => !prev);
  };

  if (!isAdmin) {
    return (
      <ReserveContext.Provider value={hasReserve}>
        <CartProvider>
          <Router>
            <LocalStorageData />
            <div className="app-wrapper">
              <Header />
              <main>
								<div className="container-info">
									<Nav changeReserveState={changeReserveState} />
									<SearchComponent />
								</div>
                <TableListComponent changeReserveState={changeReserveState} />
                <Switch>
                  {Routes.map(({ route, component: Component }, index) => (
                    <Route exact path={route} key={index}>
                      <Component />
                    </Route>
                  ))}
                  <Route path="*">
                    <h2>Not Found</h2>
                  </Route>
                </Switch>
                <Scroll showBellow={250} />
              </main>
              <Footer changeState={changeAdminState} />
            </div>
          </Router>
        </CartProvider>
      </ReserveContext.Provider>
    );
  }
  return <AdminComponent changeState={changeAdminState} />;
}
