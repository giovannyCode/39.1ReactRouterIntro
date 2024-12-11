import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import NavBar from "./NavBar";
import Cookie from "./Cookie";
import Home from "./Home";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Chips" component={Chips} />
          <Route path="/Soda" component={Soda} />
          <Route path="/Cookie" component={Cookie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
