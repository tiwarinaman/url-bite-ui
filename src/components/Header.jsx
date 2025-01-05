import React from 'react';

const Header = () => {
    return (
        <nav className="bg-neutral-900 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                URL<span className="text-blue-500">Bite</span>
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
