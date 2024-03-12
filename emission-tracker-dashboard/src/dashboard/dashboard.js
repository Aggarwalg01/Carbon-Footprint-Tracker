import '../index.css'
import Category from '../categories/UpdateCategory.js';
import { useState } from 'react';

export default function Dashboard() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='bg-slate-900 p-10'>
            <div className='bg-white rounded-lg p-5'>
                <div className="flex flex-row">
                    <div className="basis-1/4 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">
                    <button onClick={openModal}>
                        Vehicle
                    </button>
                    <Category isOpen={isModalOpen} onClose={closeModal} />
                    </div>
                    <div className="basis-1/4 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">Electricity</div>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/4 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">Travel</div>
                    <div className="basis-1/4 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">Food</div>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/4 bg-rose-500 px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">Water</div>
                    <div className="basis-1/4 bg-gray-800 text-white px-8 py-20 rounded-lg mt-5 mr-5 font-medium text-3xl">Waste</div>
                </div>
                {/* <div className="flex flex-row">
                    <button onClick={() => {
                        return <Category name="" />
                    }}><div className="basis-1/4 bg-gray-800 text-white p-10 rounded-lg mt-5 mr-5 font-medium text-2xl">Garden</div></button>
                    <button onClick={() => {
                        return <Category name="" />
                    }}><div className="basis-1/4 bg-rose-500  p-10 rounded-lg mt-5 mr-5 font-medium text-2xl">Walk</div></button>
                </div> */}
                {/* <div>
                    <button onClick={openModal} className="basis-1/4 bg-gray-800 text-white p-10 rounded-lg mt-5 mr-5 font-medium text-2xl">
                        Open Modal
                    </button>
                    <Category isOpen={isModalOpen} onClose={closeModal} />
                </div> */}
            </div>
        </div>
    );
}