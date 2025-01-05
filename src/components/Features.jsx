import React from 'react';

const Features = () => {
    return (
        <section className="bg-neutral-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                    Why Choose <span className="text-blue-500">URLBite</span>?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Simple</h3>
                        <p className="text-gray-500">Shorten URLs with a single click.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Fast</h3>
                        <p className="text-gray-500">Get short URLs instantly.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">Secure</h3>
                        <p className="text-gray-500">Your links are private and secure.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
