import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backIcon from '../../public/back.svg'

const Payment = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const handleGoBack = () => {
        navigate(-1); // -1 to go back to the previous page
      };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen ">

            <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-[600px] md:w-[600px] sm:w-full mx-5">
                <div className=' relative min-h-[500px]'>
                    <h2 className="text-2xl font-semibold mb-6 text-center relative">
                        <span className='inline-block absolute left-0'>
                            <img src={backIcon} alt='Back' className='w-8 cursor-pointer' onClick={handleGoBack} />
                        </span>
                        Payment Method</h2>
                    <div className='mb-4 flex gap-4'>
                        <button
                            onClick={() => setActiveTab(0)}
                            className={`py-2 px-6 text-sm font-semibold rounded-lg  border-2 ${activeTab === 0 ? ' border-greentheame  bg-greentheame text-white' : 'border-greentheame text-greentheame bg-white'}`}
                        >COD
                        </button>
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`py-2 px-6 text-sm font-semibold rounded-lg  border-2 ${activeTab === 1 ? ' border-greentheame  bg-greentheame text-white' : 'border-greentheame text-greentheame bg-white'}`}
                        >Credit Card / Debit Card
                        </button>
                    </div>

                    {activeTab === 0 &&
                        <form >
                            <div className="mb-20">
                                <label for="name" className="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" id="name" name="name" placeholder="Address" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greentheame focus:border-transparent" />
                            </div>
                        </form>
                    }
                    {activeTab === 1 &&
                        <form>
                            <div className="mb-4">
                                <label for="name" className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greentheame focus:border-transparent" />
                            </div>

                            <div className="mb-4">
                                <label for="number" className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input type="number" id="number" name="number" placeholder="1234 5678 9012 0000" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greentheame focus:border-transparent" />
                            </div>
                            <div className="mb-4 flex gap-6">
                                <div>
                                    <label for="Month" className="block text-sm font-medium text-gray-700">Month/Year</label>
                                    <input type="text" id="Month" name="Month" placeholder="Enter Here" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greentheame focus:border-transparent" />
                                </div>
                                <div>
                                    <label for="CVV" className="block text-sm font-medium text-gray-700">CVV</label>
                                    <input type="password" id="CVV" name="CVV" placeholder="***" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-greentheame focus:border-transparent" />
                                </div>
                            </div>
                            <div className='mb-4 flex'>
                                <input type="checkbox" id="save" name="save" placeholder="City" className="p-6 w-6 border" /><label for="save" className="block text-sm font-medium text-gray-700 pl-2">Save for future</label>
                            </div>

                        </form>
                    }
                    <div className='mb-4 absolute bottom-0 w-full'>
                        <Link to="/success" className="w-full block mt-4 py-2  bottom-10 bg-greentheame text-white rounded-md hover:bg-greentheameHover text-center">Next</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
