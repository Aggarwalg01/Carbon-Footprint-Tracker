import { useState } from 'react';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../firestore/firebase';

export default function Category({ isOpen, onClose, category, userId }) {
    const [energy, setEnergy] = useState(0);
    const [vehicle, setVehicle] = useState('');
    const [foodName, setFoodName] = useState('');
    const [electricity, setElectricity] = useState('');
    if (!isOpen) return null;

    const handleInputChange = (event) => {
        setEnergy(event.target.value);
    };

    function updateValue() {
        switch (category) {
            case 'travel':
                const travelUrl = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=${vehicle}&distance=${energy}`;
                const travelOptions = { method: 'GET', headers: { /* Headers */ } };
                fetch(travelUrl, travelOptions).then(/* Handle response */).catch(/* Handle error */);
                break;

            case 'vehicle':
                const vehicleUrl = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=${vehicle}&distance=100`;
                const vehicleOptions = { method: 'GET', headers: { /* Headers */ } };
                fetch(vehicleUrl, vehicleOptions).then(/* Handle response */).catch(/* Handle error */);
                break;

            case 'food':
                const foodUrl = `https://foodprint.p.rapidapi.com/api/foodprint/name/${foodName}`;
                const foodOptions = { method: 'GET', headers: { /* Headers */ } };
                fetch(foodUrl, foodOptions).then(/* Handle response */).catch(/* Handle error */);
                break;

            case 'electricity':
                const authToken = "QDMV9AG3NJ47S6GV4HP0BY65X71R";
                const electricityUrl = "https://api.climatiq.io/data/v1/estimate";
                const electricityOptions = { 
                    method: "POST", 
                    headers: { 'Authorization': `Bearer ${authToken}` },
                    body: JSON.stringify({
                        "emission_factor": { "activity_id": "electricity-supply_grid-source_total_supplier_mix", "data_version": "^9" },
                        "parameters": { "energy": parseInt(energy), "energy_unit": "kWh" }
                    })
                };
                fetch(electricityUrl, electricityOptions).then(/* Handle response */).catch(/* Handle error */);
                break;

            default:
                break;
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Update for today</h2>
                <form>
                    <input type="text" onChange={handleInputChange} className="text-base" placeholder="Enter the updated value" /><br/>
                </form>
                <button onClick={() => { onClose(); }} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded text-lg">
                    Close
                </button>
            </div>
        </div>
    );
}

