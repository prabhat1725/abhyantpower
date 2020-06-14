import React from "react";
import Img from "./ImgTag";
import Images from "./ImageHelper";

const Profile =()=>{
    return(
        <div className="profile p-28">
            <h1 className="mb-32">Profile</h1>
            <div className="d-flex mb-16">
                <div className="mr-32">
                    <Img src={Images.panel.url} width={800}/>
                </div>
                <div>
                <p className="mb-16 profile-heading">Abhyant Power Project is the prominent arm of Abhyant Group since 2000.</p>
<p className="mb-8">The company was established in the year 1984, and has been carrying out detailed engineering, supply of electrical equipment, erection and commissioning of systems like outdoor substation, indoor substation, power distribution in plants and buildings, Lighting, earthing & low voltage systems. For the last 3-4 years it is also taking up plumbing, fire fighting & associated civil & structural works.</p> <br/>

<p>Milestones Engineering is backed by a team professionally qualified, experienced and skilled people comprising of Engineers, Supervisors and dedicated Supporting Staff. As a leading professional electrical contracting company in India, it prides itself on providing a comprehensive range of businesses with world-class electrical and Lighting solutions.</p>
                </div>
            </div>
            <div className="mb-20">
            The industry domains served by the company include Embassies, Commercial Buildings, Shopping Malls, Hospitals, Hotels, Housing, Infrastructure, Sugar Industry, Pharmaceuticals, Food & Breweries, Textile, Paper Industry, Automobile Industry, Steel, Power Generation, Cement and a large number of Government projects. For all these industry verticals, the array of its electrical contracting services span right from the entire electrical framework to routine maintenance and inspections.
            </div>
            <div className="mb-20">
            The company has also carried out associated civil work, steel fabrication, instrumentation & pneumatic lines with equal professional capabilities. The level of customer satisfaction that Milestones Engineering has achieved is reflected in the repeat orders that it gets.
            </div>
            <div className="mb-20">
            Some of the most salient advantages of Milestones Engineering solutions include very low downtime after handing over, Time Consciousness, Adherence to High Quality Standards, Quick Response, Cost-effectiveness, Experienced Workforce which puts us in a different league of contractors.
            </div>
            <div className="mb-20">
                <h4 className="text-center mb-32"><strong>Mission</strong></h4>
            
            To be globally recognized as a competitive organization, providing value to our customers through continuous improvement, and to deliver global quality products and services at highly competitive prices with on-time deliveries!
            </div>
            <div>
                <h4 className="text-center mb-32"><strong>Vision</strong></h4>
                To be a premier company in providing integrated Electrical Solutions to our customers, and also to be recognized as a leader in Electric Industry for Turnkey Projects.
            </div>

        </div>
    )
}
export default Profile;