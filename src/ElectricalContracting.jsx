import React from "react";
import Img from "./ImgTag";
import Images from "./ImageHelper";
import { Link } from "react-router-dom";

const ElectricalContracting = ()=>{
    return(
        <div className="electrical-contracting">
        <div className="min-h-500">
            <div className="d-flex mt-20">
                <div className="mr-4"><h6>Electrical Contracting</h6></div>
             <h6 className="mr-4">/</h6>
             <div> 
             <Link to= "/electricalSwitchboard">
                <h6>
            Electrical Switchboards
            </h6>
            </Link>
             </div>
            
            </div>
            <h1>Electrical Contracting </h1>
            <div className="d-flex">
                <div className="mr-16">
                    <Img src={Images.electricalContract.url} width={800} height={600}/>
                </div>
                <div>
                <h4 className="mb-32">We, at Abhyant Power Projects, have capability of offering complete Electrification solutions including -</h4>
<ul>
    <li><h6>Substations (Indoor/Outdoor) 33 KV / 11 KV</h6></li>
    <li><h6>DG Sets upto 1250 KVA or more</h6></li>
    <li><h6>Electrical Switchboards / Bus Ducts</h6></li>
    <li><h6>Power Distribution - Cable Trays, Cabling, Termination</h6></li>
    <li><h6>Associated Steel Fabrication & Civil works</h6></li>
    <li><h6>Earthing in Copper, G.I., Cast Iron, M. S.</h6></li>
    <li><h6>Lighting (Point Wiring, Light Fixtures, Office/Industrial)</h6></li>
    <li><h6>Fire Detection & Alarm Systems (Sensors, Panels, Wiring, Integration)</h6></li>
    <li><h6>Low Voltage Services – Telephone system, P.A./ Music System, CCTV, MATV, Nurses Call, Intruder Alarm, Access Control and other related services.</h6></li>
    <li><h6>Floor Trunking Systems</h6></li>
    <li><h6>Structured Cabling (Networking) - Cat 5, 5E & 6 cabling along with other requirements.</h6></li>
    <li><h6>Flame Proof Installations</h6></li>
    <li><h6>Plumbing</h6></li>
    <li><h6>Fire Fighting</h6></li>
    <li><h6>Solar System</h6></li>

</ul>


                </div>
            </div>

            
        </div>
        </div>
    )
}
export default ElectricalContracting;