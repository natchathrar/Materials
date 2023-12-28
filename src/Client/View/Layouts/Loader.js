import React from 'react';
import './Loader.css'; // Make sure to import the CSS file containing the loader styles

const Loader = () => {
    return (
        <div className="container   align-items-center d-flex flex-row justify-content-center">
            {/* <section> */}
            <div className="loader-container">
                <div className="loader loader-1">
                    <div className="loader-outter"></div>
                    <div className="loader-inner"></div>
                </div>
            </div>
            {/* </section> */}

        </div>
    );
};

export default Loader;