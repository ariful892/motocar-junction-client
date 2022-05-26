import React from 'react';

const Report = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl text-primary font-bold">Report to Admin!</h1>
                    <p className="py-6">If you face any problems with any product or having any technical issues please send report to the admin.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Report</span>
                            </label>
                            <input type="text" placeholder="Write your issues here" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;