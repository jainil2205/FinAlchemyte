import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";

const LeadershipPOV = () => {
    const navigate = useNavigate();

    // Function to handle navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Navbar and Header Container with Background */}
            <div className="relative w-full">
                <NavBar />
                <div className="relative w-full h-60 flex items-center justify-center">
                    <h1 className="text-[34px] font-bold text-[#2E3E65] text-center font-poppins">Leadership POV </h1>
                </div>
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen px-6 py-8 bg-white font-poppins">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[12px] text-gray-600 pt-5">
                        {/* As the world around us evolves, we will continue to present our Point of View on evolving trends. */}
                    </p>

                    {/* Clickable POV Links */}
                    <div className="mt-8 text-left space-y-4">
                        <p 
                            className="text-[12px] text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("/pov1")}
                        >
                            {/* If you are not enabling the transaction, you are not creating value - Analytics PoV */}
                        </p>
                        <p 
                            className="text-[12px] text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("/pov2")}
                        >
                            {/* Buy vs Build in the Gen AI world - Product Thinking PoV */}
                        </p>
                        <p 
                            className="text-[12px] text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("/pov3")}
                        >
                            {/* The AI-powered CEO - Leadership PoV */}
                        </p>
                        <p 
                            className="text-[12px] text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("/pov4")}
                        >
                            {/* Not so secret (anymore) Agents - Agent AI PoV */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeadershipPOV;
