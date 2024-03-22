# Carbon-Footprint-Tracker


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW52aXRpbmctd2FydGhvZy05LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_kHrpi7U0NoIQjhDDRMSG9IBobJf01deBHu4iJQ9sO1
REACT_APP_OPENAI_API_KEY="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"
APP_ID = 0xAEb1C95937B6F950d25D5e070306b7D44447Ba7F
APP_SECRET_KEY = 0x33eea3fbda5b62921e37a3752d28105663894398068fe5b626d62bfe076b83f8 


.env  file (make folder in main branch)

<!-- import React, { useEffect , useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {calculateMonthlyData} from '../../components/firebase_operations'
import { useUser } from '@clerk/nextjs';

const BarGraph = () => {
    const [dataArray,setDataArray] = useState([0,0,0,0,0,0])
    const {user} = useUser()
    useEffect( () => {
     if(user != undefined) {
        for (let i = 1; i <= 6; i++) {

            calculateMonthlyData(user?.fullName,dataArray,i,setDataArray);
            console.log(dataArray[i-1])
        }
     }
    },[])
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Monthly Statistics',
                data: dataArray,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <h2>Bar Graph</h2>
            <Bar
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Carbon Emission this month"
                        }
                    },
                    // maintainAspectRatio: false,
                    width:500,
                    height:3000,
                    responsive: true,
                }}
            />
        </div>
    );
};

export default BarGraph; -->