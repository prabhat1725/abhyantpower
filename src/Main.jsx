import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ElectricalContracting from "./ElectricalContracting";
import ElectricalSwitchboard from "./ElectricalSwitchboard";
import ContactUs from "./ContactUs";
import WhyUs from "./Whyus";
import Copyright from "./Copyright";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import Sitemap from "./Sitemap";
import Profile from "./Profile";
import Management from "./Management";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



export class Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/electricalContracting">
              <ElectricalContracting/>
            </Route>
            <Route path="/electricalSwitchboard">
              <ElectricalSwitchboard/>
            </Route>
            <Route path="/contactus">
              <ContactUs/>
            </Route>
            <Route path="/whyus">
              <WhyUs/>
            </Route>
            <Route path="/privacypolicy">
              <PrivacyPolicy/>
            </Route>
            <Route path="/terms">
              <Terms/>
            </Route>
            <Route path="/sitemap">
              <Sitemap/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/management">
              <Management/>
            </Route>
          </Switch>
          <Footer />
          <Copyright/>
        </Router>
      </div>
    );
  }
}

export default Main;
