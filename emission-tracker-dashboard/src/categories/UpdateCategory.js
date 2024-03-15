import { useState } from 'react';
import {  setDoc , doc} from "firebase/firestore";
import {db} from '../firestore/firebase';

export default function Category({ isOpen, onClose , category, userId}) {
    // return (
    //     <div>
    //         <alert message="category" />
    //     </div>
    // );
    const [energy, setDistance] = useState(0);
    if (!isOpen) return null;
    
    const handleInputChange = (event) => {
        setDistance(event.target.value);
      };
    function updateValue() {
        //  TRAVEL
        // const url = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=SmallDieselCar&distance=${distance}`;
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
        //         'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        //     }
        // };

        /// VEHICLE (CAR) - need to mention the type of car -- Ex-  SmallDieselCar 
        // const url = `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?vehicle=${vehicle}&distance=100`
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
        //         'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
        //     }
        // };

        /// FOOD
        
    //      const url = `https://foodprint.p.rapidapi.com/api/foodprint/name/${name}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //              'X-RapidAPI-Key': '7112f3b271msh36e3c9c905f726dp1e7e11jsnc2ea975060d8',
    // 'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
    //         }
    //     };
         
        /// ELECTRICITY
        var authToken = "QDMV9AG3NJ47S6GV4HP0BY65X71R" //Put the key in .env
        const url = "https://api.climatiq.io/data/v1/estimate";
        const options = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                "emission_factor": {
                    "activity_id": "electricity-supply_grid-source_total_supplier_mix",
                    "data_version": "^9"
                   },
                  "parameters": {
                    "energy": parseInt(energy),
                    "energy_unit": "kWh"
                  }
            })
        }
        
        fetch(url,options).then(async (res) => {
            var data;
            console.log(data = await res.json());
            var date = new Date();
            const date1 = date.getDate() + ':' + ((date.getMonth()/10).toFixed(0) == 0 ? "0" + date.getMonth() : date.getMonth() )+ ':' + date.getFullYear() 
            const time = date.getHours() 
            + ':' + date.getMinutes() 
            + ":" + date.getSeconds();
            console.log(typeof(db))

            // TRAVEL , VEHICLE
            // var val = data.carbonEquivalent
            
            // FOOD
            // var val = data[0].footprint

            //ELECTRICITY
            var val = data.co2e
            setDoc(doc(db, userId,category), {
            [date1] : {
                  [time] : val || null
                }
              }).then((res) =>{console.log(res)}).catch((e) => console.log(e));
            await onClose();
        }).catch((e) => {console.log(e)})

        // Storage in database - collection - user name => document - category(travel etc) => {
        // date on which data is pushed => time of update => value of carbon emission
        // }
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Update for today</h2>
                {/* Your form components go here */}
                <form>
                    <input type="text" onChange={handleInputChange} className="text-base" placeholder="Enter updated value for today"></input><br/>
                    {/* <input type="text" className="text-base pd-5" placeholder="Something else here"></input> */}
                </form>
                <button onClick={updateValue} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded text-lg">
                    Close
                </button>
            </div>
        </div>
    );
}