import React from 'react'
import { Link } from 'react-router-dom'
import success from '../../public/payment-success.gif'


const Success = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-3">
                <div className="text-center mb-6">
                    
                    <img src={success} className='w-1/2 m-auto' alt='' />
                    <h1 className="text-3xl font-bold text-green-500">Order Successful</h1>
                    <p className="text-lg text-gray-500 mt-2">Your order has been placed successfully. You will receive a confirmation email shortly.</p>
                </div>
                <div className="flex justify-center mt-4">
                    <Link to="/" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success
