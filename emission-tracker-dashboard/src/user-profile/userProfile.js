import React from 'react';
import "../index.css"
import UserStats from "./userStats.js";
// import svg file
import ProfileSvg from "../man-coloured.svg"
export default function UserProfile() {
    return (
        <div className="bg-black text-white">
            <h1 className="text-5xl font-bold py-10">User Profile</h1>
            {/* two sections of the page - left side having details name, city, etc. and right side having profile picture */}

            <div className="flex">
                <div className="w-1/2 p-4">
                    <h1 className="text-3xl font-bold">Shambhavi Jahagirdar</h1>
                    <p className="text-xl">Email: user@example.com</p>
                    <p className="text-xl">Location: City, Country</p>
                </div>
                <div className="w-1/2 p-4">
                    <img src={ProfileSvg} alt="Profile Picture" className="rounded-full h-64 w-64 mx-auto" style={{ fill: 'white' }} />
                </div>
            </div>
            <div className="flex">
                <UserStats />
            </div>
        </div>
    );
}