import React from "react";
import Navbar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";
import { useNavigate } from "react-router-dom";

const DataAIStrategy = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="relative w-full">
                <Navbar />
                <div className="relative flex items-center justify-center h-60 bg-gray-100">
                    <h1 className="text-[40px] font-bold text-[#2E3E65] text-center font-poppins">Data & AI Strategy</h1>
                </div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            <div className="bg-white min-h-[20vh] px-4 py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 lg:px-20">
                    <p className="text-[15px] text-[#2E3E65] pt-5 text-center md:text-left font-poppins">
                        Transform your organization with strategic data and AI services tailored for leadership excellence:
                    </p>

                    <div className="mt-8 text-left">
                        <h2 className="text-[15px] font-semibold text-[#2E3E65] font-poppins">Data and AI Ecosystem Assessment</h2>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Identify gaps and opportunities in your current data landscape to build a robust foundation for AI.
                        </p>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Example: A CEO gains clarity on underperforming data assets and allocates resources to the most impactful areas.
                        </p>

                        <h2 className="text-[15px] font-semibold text-[#2E3E65] mt-6 font-poppins">AI-Driven Decision Frameworks</h2>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Enable faster, smarter decision-making with AI-powered tools that align with strategic goals.
                        </p>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Example: AI highlights top-performing markets and suggests optimized allocation of marketing budgets.
                        </p>

                        <h2 className="text-[15px] font-semibold text-[#2E3E65] mt-6 font-poppins">Predictive Business Insights</h2>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Stay ahead with predictive analytics that identify trends and risks before they happen.
                        </p>
                        <p className="text-[15px] text-[#2E3E65] mt-2 font-poppins">
                            Example: A CEO receives forecasts on industry disruptions, allowing proactive adjustments to strategy.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
                        
                        <button 
                            className="bg-[#2E3E65] text-white px-6 py-3 rounded-md text-[15px] font-bold w-full md:w-auto font-poppins"
                            onClick={() => navigate("/service2")}>
                            Innovative Products &raquo;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataAIStrategy;