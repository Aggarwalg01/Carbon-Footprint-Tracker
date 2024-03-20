"use client";
import React , {useEffect, useState}from 'react';
import "../index.css"
import UserStats from "./userStats.js";
import { useUser } from '@clerk/nextjs';
import {calculateFootprintPercentage} from '../../components/firebase_operations'
// import svg file
import ProfileSvg from "../../../public/man-coloured.svg"
export default function UserProfile() {
    const {user} = useUser()
    const [percentage, setPercentage] = useState(0);
    useEffect(()=>{
     if(user != undefined) {
        calculateFootprintPercentage(user?.fullName,setPercentage);
        console.log(user?.primaryEmailAddress.emailAddress)
     }
    },[])
    return (
        <div className="bg-black text-white">
            <h1 className="text-5xl font-bold py-10">User Profile</h1>
            {/* two sections of the page - left side having details name, city, etc. and right side having profile picture */}

            <div className="flex">

                <div className="w-5/12 p-8 ml-40 rounded-lg text-justify bg-pink-600">
                    <h1 className="text-4xl font-bold py-4">{user?.fullName}</h1>
                    {/* create a table that should span the entire flexbox */}
                    
                    <table className="w-full table-auto text-xl px-3 leading-loose">
                        <tbody>
                            <tr>
                                <td className="text-left">Location: </td>
                                <td className="text-right">Hyderabad, India</td>
                            </tr>
                            <tr>
                                <td className="text-left">Email: </td>
                                <td className="text-right">{user?.primaryEmailAddress.emailAddress}</td>
                            </tr>
                            <tr>
                                <td className="text-left">Joined: </td>
                                <td className="text-right">{user?.createdAt.toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="text-left">Total Footprint: </td>
                                <td className="text-right">{percentage} %</td>
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