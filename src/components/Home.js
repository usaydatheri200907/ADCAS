import React from "react";
import "../CSS/Home.css"; // Update this line with the correct path

const Home = () => {
    return (
        <div className="desktop">
<div className="div">
                <div className="frame">
                    <div className="frame-2">
                        <div className="text-wrapper">Search...</div>
                        <img className="search" alt="Search" src="./search.png" />
                    </div>
                    <div className="text-wrapper-2">AutoCavity</div>
                    <img className="brightness" alt="Brightness" src="./brightness.png" />
                    <img className="chat" alt="Chat" src="./chat.png" />
                    <img className="bell" alt="Bell" src="./bell.png" />
                    <img className="help-web-button" alt="Help web button" src="./help-web-button.png" />
                    <div className="overlap-group">
                        <div className="text-wrapper-3">Awais</div>
                        <img className="arrow" alt="Arrow" src="./down-arrow.png" />
                    </div>
                </div>
                <div className="frame-3">
                    <div className="MANAGE-PATIENTS-wrapper">
                        <div className="MANAGE-PATIENTS">
                            MANAGE <br />
                            PATIENTS
                        </div>
                    </div>
                    <div className="MANAGE-CLINICAL-wrapper">
                        <div className="MANAGE-CLINICAL">
                            MANAGE
                            <br />
                            CLINICAL
                            <br />
                            NOTES
                        </div>
                    </div>
                    <div className="IMAGE-ANALYSIS-wrapper">
                        <div className="IMAGE-ANALYSIS">
                            IMAGE
                            <br />
                            ANALYSIS
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-4">REPORTING</div>
                    </div>
                    <div className="frame-4">
                        <div className="text-wrapper-5">LOG OUT</div>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-6">HELP</div>
                    </div>
                    <div className="frame-6">
                        <img className="user" alt="User" src="./user.png" />
                        <div className="my-profile">
                            My
                            <br />
                            Profile
                        </div>
                    </div>
                </div>
                <div className="text-wrapper-7">Dashboard</div>
            </div>        </div>
    );
};

export default Home;
