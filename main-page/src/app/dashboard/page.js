"use client"
import "../index.css";
import Category from "../categories/UpdateCategory.js";
import { useEffect, useState } from "react";
import FootprintDiv from "./footprintDiv";
import {calculateFootprintPercentage} from '../../components/firebase_operations'
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [calculatedVehicle, setCalculatedVehicle] = useState('');
  const [calculatedElectricity, setCalculatedElectricity] = useState('');
  const [calculatedTravel, setCalculatedTravel] = useState('');
  const [calculatedFood, setCalculatedFood] = useState('');
  const [percentage,setPercentage] = useState(0);
 const {user} = useUser();
  const openModal = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const setPage = (val) => {
    console.log("hey")
    switch (selectedCategory) {
      case 'vehicle':
         setCalculatedVehicle(val)
         break;
      case 'travel':
         setCalculatedTravel(val)
         break;
      case 'food':
         setCalculatedFood(val)
         break;
      case 'electricity':
         setCalculatedElectricity(val)
         break;
      default:
         break;
        }
    }

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
  <button onClick={() => openModal('vehicle')}>Vehicle</button>
  {calculatedVehicle && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedVehicle} kt</div>}
</div>
<div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('electricity')}>Electricity</button>
  {calculatedElectricity && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedElectricity} kt</div>}
</div>
            </div>
            <div className="flex flex-row">
            <div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('travel')}>Travel</button>
  {calculatedTravel && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedTravel} kt</div>}
</div>
<div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
  <button onClick={() => openModal('food')}>Food</button>
  {calculatedFood && <div style={{ justifyContent: "center" , fontSize: "20px"}}>{calculatedFood} kt</div>}
</div>
</div>
            <div className="flex flex-row">
              <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
                <button onClick={() => openModal('Water')}>Water</button>
              </div>
              <div className="basis-1/2 bg-gray-800 text-white  px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl flex flex-col items-center">
                <button onClick={() => openModal('Waste')}>Waste</button>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            {/*<img src={footprintSvg} alt="Footprint" className="w-full" /> {/* Use footprint.svg */}
            <FootprintDiv fillPercentage={percentage} />
          </div>
        </div>
      </div>
      <Category isOpen={isModalOpen} onClose={closeModal} category={selectedCategory}  setCalculatedValue={setPage}/>
    </div>
  );
}
