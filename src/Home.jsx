import React from "react";
import Images from "./ImageHelper";
import Img from "./ImgTag";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="firstpart mb-20">
          <img src={Images.firstback1.url} className="mb-20" />
          <dv className="d-flex">
            <div>
              <p>India’s Leading Electrical Contracting Company Since 1984</p>
              Abhyant power Projects is an electrical Contracting Company having
              ability to provide concept, Basic Design, Detailed Engineering,
              Supply of Materials, Erection at site, Testing/ Commissioning and
              Operation and Maintenance of Systems like Power distribution,
              Lighting system, Earthing etc.
            </div>
            <div className="second-back">
              <Img src={Images.firstback.url} />
            </div>
          </dv>
        </div>
      </div>
    );
  }
}
export default Home;
