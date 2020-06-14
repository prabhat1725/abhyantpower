import React from "react";
import Img from "./ImgTag";
import Images from "./ImageHelper";

const ContactUs = ()=>{

    return (
        <div className="contact-us min-h-500">
            <div className="p-28">
            <h1 className="mb-16"> Contact us</h1>
<h4 className="mb-16">Abhyant Power Projects</h4>
<Img src={Images.gst.url}/>
<div className="mb-16"><Img src={Images.location.url} width={20}/>B-279/10B, Street No-11, Kh. No. 621, Ashok Nagar, Shahdra, Delhi-110093 / Khasra No.57, Garhi, Meerut Road, Ghaziabad<br/></div>

<div className="mb-16"><Img src={Images.phone.url} width={20}/>Phone: +91-9810869706 / 8800505152 / 8510024008<br/></div>

<div className="mb-16"><Img src={Images.email.url} width={20}/>Email Id: abhyantpowers@gmail.com</div>
<div><Img src={Images.gstin.url} width={40}/>GSTIN: 07AB0FA8541P1ZP</div>
        </div>
        </div>
    )
}
export default ContactUs;