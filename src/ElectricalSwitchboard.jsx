import React from "react";
import {Link} from "react-router-dom";
import Images from "./ImageHelper";
import Img from "./ImgTag"

const ElectricalSwitchboard = ()=>{
    return(
        <div className="electrical-switchboard">
        <div className="min-h-500">
            <div className="d-flex mt-20">
                <div className="mr-4"><h6>Electrical Switchboards</h6></div>
             <h6 className="mr-4">/</h6>
             <div> 
             <Link to= "/electricalContracting">
                <h6>
            Electrical Contracting
            </h6>
            </Link>
             </div>
            
            </div>
            <h1>Electrical Switchboards </h1>
            <div className="d-flex">
                <div className="mr-16">
                    <Img src={Images.switchboard.url}  width={800} height={600}/>
                </div>
                <div>
                <h4 className="mb-32">Approved all over the country, we have world-class in-house manufacturing facility for draw-out/non draw-out switchboards Like PCC / MCC, Bus Ducts and the following products</h4>
<ul className="">
    <li> <h6> Power Control Centers</h6></li>
    <li><h6>Motor Control Centers</h6></li>
    <li><h6>Lighting DB's, Feeder Pillars</h6></li>
    <li><h6>Bus Ducts upto 8000 Amps.</h6></li>
    <li><h6>Relay Control Panels, Control desks.</h6></li>
    <li><h6>Relay / PLC based DG Synchronization Panels</h6></li>
    <li><h6>Capacitor Panels, Feeder pillars</h6></li>
    <li><h6>Soft Starter Panels</h6></li>
</ul>









                </div>
            </div>

            
        </div>
        </div>
    )
}
export default ElectricalSwitchboard;