import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import backgroundPattern from "../components/assets/pattern-bg.png";

const AlchemyPage = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Navbar and Header Container */}
            <div className="relative w-full">
                <Navbar />

                {/* Header with Hover to Trigger Dropdown */}
                <div className="relative w-full h-60 flex items-center justify-center">
                    <div className="dropdown text-[34px] font-bold text-[#2E3E65] text-center font-poppins cursor-pointer relative">
                        What does Alchemyte do?
                        {/* Dropdown Menu */}
                        <div className="dropdown-content absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg p-4 w-60 z-10 hidden group-hover:block">
                            <ul className="space-y-2">
                                <li 
                                    className="cursor-pointer hover:text-blue-600 text-[12px] font-semibold"
                                    onClick={() => handleNavigation("/service1")}
                                >
                                    Data & AI Strategy
                                </li>
                                <li 
                                    className="cursor-pointer hover:text-blue-600 text-[12px] font-semibold"
                                    onClick={() => handleNavigation("/service2")}
                                >
                                    Innovative Products
                                </li>
                                <li 
                                    className="cursor-pointer hover:text-blue-600 text-[12px] font-semibold"
                                    onClick={() => handleNavigation("/service3")}
                                >
                                    Growth Startups
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Background Pattern */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="bg-white min-h-[20vh] p-4 pt-2 md:px-8 lg:px-16 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="mt-8 text-left space-y-6">
                        {/* Data & AI Strategy Section */}
                        <div 
                            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg border border-gray-300 hover:bg-gray-100"
                            onClick={() => handleNavigation("/service1")}
                        >
                            <h2 className="text-[15px] font-semibold text-[#2E3E65] transition-colors duration-300 font-poppins">
                                Data & AI Strategy
                            </h2>
                            <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                                Build a robust AI-driven roadmap to align technology with your leadership goals. We craft tailored strategies that help enterprises adopt data-centric approaches for decision-making and operational excellence.
                            </p>
                            <p 
                                className="text-[14px] font-semibold text-blue-600 mt-3 hover:underline"
                                onClick={() => handleNavigation("/service1")}
                            >
                                Click here →
                            </p>
                        </div>
                        
                        {/* Innovative Products Section */}
                        <div 
                            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg border border-gray-300 hover:bg-gray-100"
                            onClick={() => handleNavigation("/service2")}
                        >
                            <h2 className="text-[15px] font-semibold text-[#2E3E65] transition-colors duration-300 font-poppins">
                                Innovative Products
                            </h2>
                            <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                                Discover cutting-edge tools designed for the modern enterprise and startups, built to address real-world challenges with innovative solutions.
                            </p>
                            <p 
                                className="text-[14px] font-semibold text-blue-600 mt-3 hover:underline"
                                onClick={() => handleNavigation("/service2")}
                            >
                                Click here →
                            </p>
                        </div>
                        
                        {/* Growth Startups Section */}
                        <div 
                            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg border border-gray-300 hover:bg-gray-100"
                            onClick={() => handleNavigation("/service3")}
                        >
                            <h2 className="text-[15px] font-semibold text-[#2E3E65] transition-colors duration-300 font-poppins">
                                Growth Startups
                            </h2>
                            <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                                Partnering with visionary startups to accelerate growth, refine AI products, and scale operations effectively. From ideation to execution, we're here to make your journey seamless.
                            </p>
                            <p 
                                className="text-[14px] font-semibold text-blue-600 mt-3 hover:underline"
                                onClick={() => handleNavigation("/service3")}
                            >
                                Click here →
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlchemyPage;
