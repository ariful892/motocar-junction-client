import React from 'react';
import background2 from '../../assests/banner2.png';

const History = () => {
    return (
        <div className="hero min-h-sm lg:min-h-screen px-16" style={{ backgroundImage: `url(${background2})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Explore Our History</h1>
                    <p className="mb-5 font-bold">We have started our journey in 1972. In the 50 years we have come out a log way. Visit here to explore our journey.</p>
                    <button className="btn btn-primary px-12">Visit</button>
                </div>
            </div>
        </div>
    );
};

export default History;