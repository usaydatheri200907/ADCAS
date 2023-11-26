import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Desktop = () => {
    return (
        <div className="desktop">
            <div className="div">
                <div className="frame">
                    <img className="cloud-computing" alt="Cloud computing" src="cloud-computing-1.png" />
                    <div className="text-wrapper">Upload</div>
                </div>
                <div className="mic-wrapper">
                    <img className="mic" alt="Mic" src="mic-1.png" />
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-2">Submit</div>
                </div>
                <div className="text-wrapper-3">Clinical Notes</div>
                <div className="frame-2">
                    <div className="frame-3">
                        <div className="text-wrapper-4">Search...</div>
                        <img className="search" alt="Search" src="search-1.png" />
                    </div>
                    <div className="text-wrapper-5">AutoCavity</div>
                    <img className="brightness" alt="Brightness" src="brightness-1.png" />
                    <img className="chat" alt="Chat" src="chat-1.png" />
                    <img className="bell" alt="Bell" src="bell-1.png" />
                    <img className="help-web-button" alt="Help web button" src="help-web-button-1.png" />
                    <div className="overlap-group">
                        <div className="text-wrapper-6">Awais</div>
                        <img className="arrow" alt="Arrow" src="arrow-1.svg" />
                    </div>
                </div>
                <div className="frame-4">
                    <div className="rectangle" />
                    <img className="img" alt="Arrow" src="arrow-2.svg" />
                    <img className="arrow-2" alt="Arrow" src="arrow-3.svg" />
                </div>
                <div className="frame-5">
                    <div className="MANAGE-PATIENTS-wrapper">
                        <div className="MANAGE-PATIENTS">
                            MANAGE <br />
                            PATIENTS
                        </div>
                    </div>
                    <Link className="MANAGE-CLINICAL-wrapper" to="/desktop-u45-4">
                        <div className="MANAGE-CLINICAL">
                            MANAGE
                            <br />
                            CLINICAL
                            <br />
                            NOTES
                        </div>
                    </Link>
                    <div className="IMAGE-ANALYSIS-wrapper">
                        <div className="IMAGE-ANALYSIS">
                            IMAGE
                            <br />
                            ANALYSIS
                        </div>
                    </div>
                    <div className="frame-6">
                        <div className="text-wrapper-7">REPORTING</div>
                    </div>
                    <div className="frame-7">
                        <div className="text-wrapper-8">LOG OUT</div>
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-9">HELP</div>
                    </div>
                    <div className="frame-9">
                        <img className="user" alt="User" src="user-1.png" />
                        <div className="my-profile">
                            My
                            <br />
                            Profile
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop;
