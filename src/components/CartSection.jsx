import React, { useState } from 'react'
import OrderCard from './OrderCard'
import cartIcon from '../../public/cart.svg'

import { useDispatch, useSelector } from 'react-redux';

const CartSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const data = useSelector((state) => state.product.addCart);

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    const getPriceArr = data.map((x) => {
        return (x.price)
    })
    const totalAmount = getPriceArr.reduce((a, c) => {
        return a + c
    }, 0)
    return (
        <>
            <div onClick={toggleNav} className={`fixed bg-white bottom-2 right-2 p-4 rounded-full shadow-lg  cursor-pointer ${data.length > 0 ? "animate-bounce" : ""} `}>
                <img src={cartIcon} className='w-5' alt='addtocart' />
            </div>
            <div className={`flex h-screen fixed top-0 right-0 shadow-xl transition duration-700 ease-in-out ${isOpen ? "" : "translate-x-96"}`}>
                <div className="w-64 bg-white p-4 md:block hidden">
                    <div className='flex justify-between'>
                        <h2 className="text-2xl font-bold mb-6">My Order</h2>
                        <span className=' cursor-pointer' onClick={toggleNav}>&#x2715;</span>
                    </div>

                    <OrderCard />

                    <div className='absolute bottom-4 left-2 right-2'>
                        <p className='text-sm pb-2'><span>Items: </span><span className='font-semibold text-greentheame'>{data ? data.length : 0}</span></p>
                        <p className='text-sm'><span>Total Amount: </span><span className='font-semibold text-greentheame'>₹{totalAmount ? totalAmount : 0}/-</span></p>

                        <div className='border-t pt-2 mt-2'>
                            <button className="text-sm w-full bg-greentheame text-white px-3 py-1 rounded-md hover:bg-green-800 transition">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CartSection
