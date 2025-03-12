import React from "react"
import Header from "../common/header/Header"
import About from "../about/About";
import Services from "../services/Services";
import Blog from "../blog/Blog";
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
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Router>
    </>
  );
}
export default Pages
