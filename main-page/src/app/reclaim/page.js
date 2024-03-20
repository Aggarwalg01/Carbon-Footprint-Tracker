"use client"
import "../index.css";
import Category from "../categories/Updateqr.js";
import { useEffect, useState } from "react";
import FootprintDiv from "../dashboard/footprintDiv";
import {calculateFootprintPercentage} from '../../components/firebase_operations'
import { useUser } from "@clerk/nextjs";
import io, { Socket } from 'socket.io-client';

var socket = null; 

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [calculatedUber, setCalculatedUber] = useState('');
  const [calculatedBlinkit, setCalculatedBlinkit] = useState('');
  const [calculatedBigBasket, setCalculatedBigBasket] = useState('');
  const [calculatedAmazon, setCalculatedAmazon] = useState('');
  const [url,seturl] = useState('')
  const [statusUrl,setStatusUrl] = useState('')
  const [percentage,setPercentage] = useState(0);
 const {user} = useUser();
  const openModal = async (category) => {
    setSelectedCompany(category);
    await fetchRequestUrl(category);
    console.log(socket)
    console.log(url)
    console.log(statusUrl)
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  

  const setPage = (val) => {
    console.log("hey")
    switch (selectedCompany) {
      case 'uber':
         setCalculatedUber(val)
         break;
      case 'amazon':
         setCalculatedAmazon(val)
         break;
      case 'bigbasket':
         setCalculatedBigBasket(val)
         break;
      case 'blinkit':
         setCalculatedBlinkit(val)
         break;
      default:
         break;
        }
    }

    const fetchRequestUrl = async (company) => {
  
        fetch("http://localhost:3000/createProofRequest",
        {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json',
            'Access-Control-Allow-Origin': ''
          },
          body: JSON.stringify({
            sessionId: "sessionId", // add the cluster id
            addressUser: "addressUser", // add the wallet address
            messageUser: "messageUser", // add the item being calculated
            provider : company //company to perform task
          })
        }).then(async (response) => {
          const data = await  response.json();
          console.log(data[1])
          seturl(data[0])
          setStatusUrl(data[1])
        }).catch (async (error) => {
          const data = await  error;
          console.error('Error fetching data:',  data);
        });
    };

  useEffect(() => {
    if(user != undefined) {
      calculateFootprintPercentage(user?.fullName,setPercentage);
    }
  },[])

  return (
    <div className="bg-slate-900 p-10">
      <h1 className="text-5xl text-white font-bold py-10">Emission Tracking Dashboard</h1>
      <div className="bg-white rounded-lg p-5">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className="flex flex-row">
            <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('uber')}>Uber</button>
  {calculatedUber && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedUber} rides</div>}
</div>
<div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('amazon')}>Amazon</button>
  {calculatedAmazon && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedAmazon} orders</div>}
</div>
            </div>
            <div className="flex flex-row">
            <div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('blinkit')}>Blinkit</button>
  {calculatedBlinkit && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedBlinkit} items</div>}
</div>
<div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('bigbasket')}>BigBasket</button>
  {calculatedBigBasket && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedBigBasket} items</div>}
</div>
</div>
            <div className="flex flex-row">
              <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
                <button onClick={() => openModal('Water')}>Swiggy</button>
              </div>
              <div className="basis-1/2 bg-gray-800 text-white  px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
                <button onClick={() => openModal('Waste')}>Alphabot</button>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            {/*<img src={footprintSvg} alt="Footprint" className="w-full" /> {/* Use footprint.svg */}
            <FootprintDiv fillPercentage={percentage} />
          </div>
        </div>
      </div>
      <Category isOpen={isModalOpen} onClose={closeModal} category={selectedCompany}  setCalculatedValue={setPage}  url={url} statusUrl={statusUrl}/>
    </div>
  );
}
