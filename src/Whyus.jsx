import React from "react";
import Img from "./ImgTag";
import Images from "./ImageHelper";

const WhyUs = ()=>{
    return(
        <div className="whyus min-h-500 p-28">
<h1 className="mb-24">Why Us</h1>
<div className="mb-16">We, at Milestones Engineering, believe in our core values of integrity, maximum client satisfaction and innovation that sets us apart from our rivals within the business.</div>

<div className="mb-16">Our principal focus on achieving as well as maintaining a measurable customer satisfaction has created a culture in the company culture where we deliver a comprehensive range of global quality engineering solutions every day touching people’s lives. For us customer requirements are supreme & becomes starting & ending point throughtout our association.</div>

<div className="mb-32"> <h5>Some salient factors that put us on the cutting-edge include the following:</h5></div>
<div className="d-flex">
    <div className="mr-50">
<Img src={Images.maintenance.url} width={700}/>
    </div>
    <div>
    <h6 className="mb-16">Zero Maintenance</h6>
Barring teething troubles, to a large extent our jobs have almost zero maintenance for first 1 to 3 years, thereby, saving down-time, enhancing production, and saving money for the clients on maintenance and risking sub-standard repairs onsite. We achieve this performance by laying stress on quality whether visible to the client or invisible, using experienced work force, avoiding sub contractors, comprehensively testing and checking once again at the end of the job.
    </div>
</div>
<div className="d-flex">
    
    <div className="mr-50">
    <h6>Unmatched After-sales Service</h6>
We always give immense importance to ‘After-sales Service’ in which the client may want modifications, improvements or attend any work even at a very short notice. The need for ‘After-sales Service’ is usually low because of the inherent high quality of work offered by us through our well-trained and experienced manpower.
    </div>
    <div>
<Img src={Images.aftersale.url}/>
    </div>
</div>


<div className="d-flex">
    <div className="mr-50">
<Img src={Images.testing.url} width={700}/>
    </div>
    <div>
    <h6>Testing Teams</h6>
Our specialized teams very painstakingly test all the panels, HT, LT & Transformers, Cables and Earthing for continuity, functions, relay working, control circuit checking, insulation values, oil values etc., before commissioning. We use primary & secondary current injection sets and high voltage breakdown test to confirm healthy condition of equipment before commissioning.
    </div>

</div>






 
        </div>
    )
}
export default WhyUs;