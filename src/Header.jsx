import React from "react";
import { Link, NavLink } from "react-router-dom";
import Images from "./ImageHelper";
import Img from "./ImgTag";

export const Header = () => {
  return (
    <div>
      <nav className="abhyant-header navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="d-flex header-first">
          <div>
            <NavLink className="navbar-brand" to="/">
              <Img src={Images.logo.url} className="logoClass" />
            </NavLink>
          </div>
          <div>
            <ul className="navbar-nav pt-58 ml-160">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  PRODUCTS
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex product-list">
                    <div>
                      <ul className="pl-0">
                        <li>
                          <Link className="dropdown-item" to="/">
                            Power Control Center (PCC)
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Motor Control Center (MCC)
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Power Distribution Board
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Automatic Power Factor Control Panel
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Feeder Pillar
                          </Link>
                          <Link className="dropdown-item" to="#">
                            PLC Panels
                          </Link>
                          <Link className="dropdown-item" to="#">
                            AC/DC Drives Panels
                          </Link>
                          <Link className="dropdown-item" to="#">
                            AMF Panels
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Load Sharing Panel (DG Angels)
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Control Desk
                          </Link>
                          <Link className="dropdown-item" to="#">
                            L.T. Erection (Cabling, Earthing etc.)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  SERVICES
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex services-list">
                    <div>
                      <ul className="pl-0">
                        <li>
                          <Link className="dropdown-item" to="/electricalContracting">
                            Electrical Contracting
                          </Link>
                          <Link className="dropdown-item" to="/electricalSwitchboard">
                            Electrical Switchboards
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link success" to="/story">
                  SUCCESS STORIES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link success" to="/whyus">
                  WHY US ?
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  SUPPORT
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex support-list">
                    <div>
                      <ul className="pl-0">
                        <li>
                          <Link className="dropdown-item" to="/contactus">
                            Where to buy
                          </Link>
                          <Link className="dropdown-item" to="/contactus">
                            Get a quote / Price list
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  ABOUT US
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex about-list">
                    <div>
                      <ul className="pl-0">
                        <li>

                          <Link className="dropdown-item" href="#">
                            History
                          </Link>
                          <Link className="dropdown-item" to="/contactus">
                            Contact Support
                          </Link>
                          <Link className="dropdown-item" href="#">
                            Ethics & Compliance
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
