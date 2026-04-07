import React from 'react';

const GetStarted = () => {
    return (
        <div className='max-w-6xl mx-auto mb-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-5'>
                    <div className="card bg-base-100 card-xl shadow-sm relative">
                        {/* Top Right Corner Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            01
                        </div>
                        <div className="card-body grid items-center">
                            <div className=' mx-auto w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6'>
                                <img className='' src="/user.png" alt="" />
                            </div>
                            <div className=''>
                                <h2 className="text-2xl font-bold text-center">Create Account</h2>
                                <p>Sign up for free in seconds. No credit card required to get started.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card bg-base-100 card-xl shadow-sm relative">
                        {/* Top Right Corner Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            02
                        </div>
                        <div className="card-body grid items-center">
                            <div className=' mx-auto w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6'>
                                <img className='' src="/package.png" alt="" />
                            </div>
                            <div className=''>
                                <h2 className="text-2xl font-bold text-center">Choose Products</h2>
                                <p>Browse our catalog and select the tools
                                    that fit your needs.</p>
                            </div>

                        </div>
                    </div>
                    <div className="card bg-base-100 card-xl shadow-sm relative">
                        {/* Top Right Corner Badge */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-linear-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                            03
                        </div>
                        <div className="card-body grid items-center">
                            <div className=' mx-auto w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mb-6'>
                                <img className='' src="/rocket.png" alt="" />
                            </div>
                            <div className=''>
                                <h2 className="text-2xl font-bold text-center">Start Creating</h2>
                                <p>Download and start using your premium
                                    tools immediately.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;