import React from "react"
import Header from "../common/header/Header"
import About from "../about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} /> 
        </Switch>
      </Router>
    </>
  );
}
export default Pages
