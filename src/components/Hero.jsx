import React from 'react';
import Shortener from './Shortener';

const Hero = () => {
    return (
        <section className="bg-neutral-900 min-h-[70vh] pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between pt-20 pb-16">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Shorten Your URLs, <br/>
                            <span className="text-blue-500">Expand Your Reach</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mb-8">
                            Transform long, complicated URLs into short, memorable links in seconds.
                        </p>
                        <Shortener/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
