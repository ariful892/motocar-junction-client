import React from 'react';
import banner from '../../assests/banner.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={banner} className="max-w-sm lg:w-96rounded-lg shadow-2xl rounded-lg" alt='Car' />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">The <span className='text-secondary'>Motocar</span> Junction</h1>
                        <p className="py-6">We supply Engine Parts Included Engine Block, Cylinder Liner, Piston, Piston Pin, Piston Ring Kit, Head Gasket, Overhaul Gasket,Turbo Charger, Oil Pump, Water Pump, Main Bearing, Conrad Bearing, Crankshaft, Camshaft, Connecting Rod, Bushing, Valve In, Valve Ex, Cylinder Head , Injection pump, Nozzle, Plunger,etc.</p>
                        <button className="btn btn-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;