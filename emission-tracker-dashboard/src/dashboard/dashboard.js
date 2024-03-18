import "../index.css";
import Category from "../categories/UpdateCategory.js";
import { useState } from "react";
import footprintSvg from './footprint.svg'; // Import the SVG file
import FootprintDiv from "./footprintDiv";
export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-slate-900 p-10">
      <h1 className="text-5xl text-white font-bold py-10">Emission Tracking Dashboard</h1>
      <div className="bg-white rounded-lg p-5">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div className="flex flex-row">
              <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('vehicle')}>Vehicle</button>
              </div>
              <div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('electricity')}>Electricity</button>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('travel')}>Travel</button>
              </div>
              <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('food')}>Food</button>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="basis-1/2 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('Water')}>Water</button>
              </div>
              <div className="basis-1/2 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                <button onClick={() => openModal('Waste')}>Waste</button>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            {/*<img src={footprintSvg} alt="Footprint" className="w-full" /> {/* Use footprint.svg */}
            <FootprintDiv fillPercentage={80} />
          </div>
        </div>
      </div>
      <Category isOpen={isModalOpen} onClose={closeModal} category={selectedCategory} userId={"Disha"} />
    </div>
  );
}
