import React from "react";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="pl-0 mb-0">
          <div class="row">
            <div class="col-sm-2 pb-10">

            </div>
            <div class="col-sm-2 pb-10 pt-10">
                <ul >
                  <li className="">
                   <h6> About Us</h6>
                  </li>
                    <li>
                        <Link to="/profile">
                        Profile
                        </Link>
                        </li>
                        <li>
                        <Link to="/management">
                        Management
                        </Link>
                        
                    </li>
                </ul>
            </div>
            <div class="col-sm-2 pt-10">
            <ul >
                  <li className="">
                   <h6> Services</h6>
                  </li>
                    <li>
                        <Link to="/electricalContracting">
                        Electrical Contracting
                        </Link>
                        </li>
                        <li>
                        <Link to="/electricalSwitchboard">
                        Electrical Switchboards
                        </Link></li>
                    
                </ul>
            </div>
            <div class="col-sm-2 pt-10 pb-10">
            <ul >
                  <li className="">
                   <h6> Other Links</h6>
                  </li>
                    <li>
                        <Link to="/whyus">
                        Why Us
                        </Link>
                        </li>
                        <li>
                        <Link to="">
                        Projects
                        </Link></li>
                        <li>
                        <Link to="">
                        Careers
                        </Link>
                        </li>
                        <li>
                        <Link to="/contactus">
                        Contact Us
                        </Link>
                        
                    </li>
                </ul>
            </div>
            <div class="col-sm-2 pt-10">
            <ul >
                  <li className="">
                   <h6></h6>
                  </li>
                    <li>
                        <Link to="/privacypolicy">
                        Privacy Policy
                        </Link>
                        </li>
                        <li>
                        <Link to="/terms">
                        Terms & Condition
                        </Link></li>
                        <li>
                        <Link to="/sitemap">
                        Sitemap
                        </Link>
                        </li>
                  
                </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}
export default Footer;
