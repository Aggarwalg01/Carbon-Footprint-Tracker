import { useState } from 'react';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../firestore/firebase';

export default function Category({ isOpen, onClose, category, userId }) {
    const [data, setEnergy] = useState(0);
    if (!isOpen) return null;

    const handleInputChange = (event) => {
        setEnergy(event.target.value);
    };

    async function setData(url,options,userId,category,val) {
        fetch(url,options).then(async (res) => {
            var data;
            console.log(data = await res.json());
            switch (category){
                case 'travel':
                    val = data.carbonEquivalent;
                    break;
                case 'vehicle':
                    val = data.carbonEquivalent;
                    break;
                case 'food':
                    val = data[0].footprint
                    break;
                case 'electricity':
                    val = data.co2e;
                    break;
                default:
                    break;
            }
                   
            var date = new Date();
            const date1 = date.getDate()
            const time = date.getHours() 
            + ':' + date.getMinutes() 
            + ":" + date.getSeconds();
            console.log(typeof(db))
            setDoc(doc(db, userId,category), {
            [date1] : {
                  [time] : val || null
                }
              }).then((res) =>{console.log(res)}).catch((e) => console.log(e));
            await onClose();
        }).catch((e) => {console.log(e)})
    }
    

    async function updateValue() {
        console.log(category)
        switch (category) {
            case 'travel':
                const travelUrl =  `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=SmallDieselCar&distance=${data}`;
                const travelOptions = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
                        'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
                    }
                };
                setData(travelUrl,travelOptions,userId,category,0);
                break;

            case 'vehicle':
                const vehicleUrl =  `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?type=${energy}&distance=100`
                const vehicleOptions  = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
                            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
                        }
                    };
            
            
                setData(vehicleUrl,vehicleOptions,userId,category,0)
                break;

            case 'food':
                const foodUrl = `https://foodprint.p.rapidapi.com/api/foodprint/name/${energy}`;
                const foodOptions= {
                            method: 'GET',
                            headers: {
                                 'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
                    'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
                            }
                        };
setData(foodUrl,foodOptions,userId,category,0)
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
                setData(electricityUrl,electricityOptions,userId,category,0)
                break;

            default:
                break;
        }
        await onClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Update for today</h2>
                <form>
                    <input type="text" onChange={handleInputChange} className="text-base" placeholder="Enter the updated value" /><br/>
                </form>
                <button onClick={updateValue} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded text-lg">
                    Close
                </button>
            </div>
        </div>
    );
}

