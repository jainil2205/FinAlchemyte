import React from "react";
import Navbar from "../components/Navbar";
import backgroundPattern from "../components/assets/pattern-bg.png";

const Intro = () => {
    return (
        <>
            {/* Navbar and Header Container with Background */}
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-48 md:h-60 bg-gray-100 px-4">
                    <h1 className="text-[40px] font-bold text-[#2E3E65] text-center font-poppins">
                        The Alchemy of Data
                    </h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10 font-poppins">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                  

                    <div className="mt-8 text-left">
                        <h2 className="text-[15px] font-semibold text-gray-700">
                            Alchemy /ˈalkəmi/
                        </h2>
                        <p className="text-[15px] text-gray-600 mt-2 leading-relaxed">
                            The ancient science of alchemy intended to convert base metals into gold (value).
                        </p>

                        <h2 className="text-[15px] font-semibold text-gray-700 mt-6">
                            Byte /bʌɪt/
                        </h2>
                        <p className="text-[15px] text-gray-600 mt-2 leading-relaxed">
                            A byte of data by itself holds no value until the right context is applied to create value out of it.
                        </p>
                        <p className="text-[15px] text-gray-600 mt-6 leading-relaxed">
                        Alchemyte = Alchemy + Byte. Alchemyte Data was envisioned with the intent of making every byte create monetary value. This requires every byte to either make you more money or save more money. Period
                        </p>

                        <p className="text-[15px] text-gray-600 mt-6 leading-relaxed">
                        Over the last few decades, companies have spent billions globally on setting up their data ecosystem (compute, storage, apps and models). Far too often, the rationale has been “hygiene’.  Very few executives would be questioned for investing in data without a clearly defined RoI. This has changed. Every Board expects the data ecosystem in their company to pay for itself and more.  The Alchemy of data is now a must-have. 

                        </p>

                        <p className="text-[15px] text-gray-600 mt-6 leading-relaxed">
                        As a business leader, you can leverage Alchemyte's expertise in Data & AI strategy or explore our innovative products or engage one of our Startups, please write to us at <a href="mailto:innovation@alchemytedata.com" className="text-blue-900 underline">innovation@alchemytedata.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
