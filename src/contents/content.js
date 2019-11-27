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
                <p>This paragraph demonstrate about the store imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently </p>
            </div>

            <div className="clear"></div>
        </div>
    );
}
export default Content;