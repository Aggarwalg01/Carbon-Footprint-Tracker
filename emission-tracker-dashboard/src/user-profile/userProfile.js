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

                <div className="w-5/12 p-8 ml-40 rounded-lg text-justify bg-pink-600">
                    <h1 className="text-4xl font-bold py-4">Shambhavi Jahagirdar</h1>
                    {/* create a table that should span the entire flexbox */}
                    
                    <table class="w-full table-auto text-xl px-3 leading-loose">
                        <tbody>
                            <tr>
                                <td className="text-left">Location: </td>
                                <td className="text-right">Hyderabad, India</td>
                            </tr>
                            <tr>
                                <td className="text-left">Email: </td>
                                <td className="text-right">shambhavi.jahagirdar@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="text-left">Joined: </td>
                                <td className="text-right">May, 2023</td>
                            </tr>
                            <tr>
                                <td className="text-left">Last Updated: </td>
                                <td className="text-right">Today</td>
                            </tr>
                            <tr>
                                <td className="text-left">Total Footprint: </td>
                                <td className="text-right">50%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-1/2 p-4 mr-20 rounded-lg align-middle">
                    <img src={ProfileSvg} alt="Profile Picture" className="rounded-full h-64 w-64 mx-auto" style={{ fill: 'white' }} />
                </div>
            </div>
            <div className="flex">
                <UserStats />
            </div>
        </div>
    );
}