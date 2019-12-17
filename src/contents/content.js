import React from 'react';
import imgg from '../images/IMG2.jpg';
function Content() {
    return(
        <div className="content">
            <div className="left-contimg">
                <img src={imgg} alt="Image"></img>
            </div>
            <div className="rightcontent">
                <h2>STORE</h2>
                <p>The Organisation was started 25 years ago. The organization holds the dealership of Supreme Aluminium. Manufacturers of Aluminium Profiles for Windows, Door, Architectural & Industrial Applications.They provide the best discounts on their products and their product have Good Quality of aluminium in the finishing point of view and in the thickness point of view. They also provide the facility for their customer to provide the free delivery all over the Pakistan. supreme Aluminium is the best competitor to other Aluminium industry     </p>
            </div>

            <div className="clear"></div>
        </div>
    );
}
export default Content;