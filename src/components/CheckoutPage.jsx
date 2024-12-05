import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">

            <div className="bg-white p-8 rounded-lg shadow-lg w-full lg:w-[600px] md:w-[600px] sm:w-full mx-5">
                <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
                <form action="#" method="POST">

                    <div className="mb-4">
                        <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="mb-4">
                        <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="you@example.com" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>

                    <div className="mb-4">
                        <label for="Phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="text" id="Phone" name="Phone" placeholder="+91 9999999999" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="mb-4 flex gap-6">
                        <div>
                            <label for="Phone" className="block text-sm font-medium text-gray-700">Zip Code</label>
                            <input type="text" id="Phone" name="Phone" placeholder="110011" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label for="Phone" className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" id="Phone" name="Phone" placeholder="City" className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                    </div>
                    <div className='mb-4 flex'>
                        <input type="checkbox" id="save" name="save" placeholder="City" className="p-6 w-6 border" /><label for="save" className="block text-sm font-medium text-gray-700 pl-2">Save shipping address</label>
                    </div>
                    <Link to="/payment" className="w-full block mt-4 py-2 px-4 bg-greentheame text-white rounded-md hover:bg-greentheameHover text-center">
                        Next
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default CheckoutPage
