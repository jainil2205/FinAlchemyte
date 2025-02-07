import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar";
import backgroundPattern from "../assets/pattern-bg.png";

const POV = () => {
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
                    <h1 className="text-[40px] font-bold hover:text-blue-600 text-[#2E3E65] text-center font-poppins">
                        POV
                    </h1>
                </div>
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${backgroundPattern})` }}
                ></div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen px-6 py-8 bg-white font-poppins">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[15px] text-gray-600 pt-5">
                        As the world around us evolves, we will continue to present our Point of View on evolving trends.
                    </p>
                    {/* Clickable POV Links */}
                    <div className="mt-8 text-left space-y-4">
                        <p 
                            className="text-[15px]  text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("")}
                        >
                            If you are not enabling the transaction, you are not creating value -{" "}
                            <span className="text-blue-900">Analytics PoV</span>
                        </p>
                        <p 
                            className="text-[15px]  text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("")}
                        >
                            Buy vs Build in the Gen AI world -{" "}
                            <span className="text-blue-900">Product Thinking PoV</span>
                        </p>
                        <p 
                            className="text-[15px]  text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("")}
                        >
                            The AI-powered CEO -{" "}
                            <span className="text-blue9600">Leadership PoV</span>
                        </p>
                        <p 
                            className="text-[15px] text-[#2E3E65] cursor-pointer hover:underline" 
                            onClick={() => handleNavigation("")}
                        >
                            Not so secret (anymore) Agents -{" "}
                            <span className="text-blue-900">Agent AI PoV</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default POV;