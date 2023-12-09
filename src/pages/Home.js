import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <>
        <Navbar />
        <Sidebar />
        {/* <div className="relative items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold text-gray-700 light:text-black">
            Home
            </h1>
        </div> */}
        </>
    );
};

export default Home;