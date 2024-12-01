import React from 'react'

const Card = () => {
    return (
        <>
            <div className="w-full xl:w-1/5 lg:w-1/4 md:w-1/4 sm:w-1/3 mx-auto px-2 mb-3">
                <div className=" bg-white rounded-lg shadow-xl overflow-hidden m3-6">
                    <div className='p-3'>
                        <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5" alt="Product Image" className="w-3/4 m-auto" />
                    </div>
                    <div className="p-4">
                        <div className='flex justify-between'>
                            <h3 className="text-sm font-semibold text-gray-800">Product Name</h3>
                            <p className="text-sm font-semibold text-greentheame ">$19.99</p>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget libero quis est aliquam ullamcorper.</p>

                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm"> <span className='text-yellow-400 text-lg'>&#9733;</span> 4.5</p>
                            <button className="text-sm bg-greentheame text-white px-3 py-1 rounded-md hover:bg-green-800 transition">Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
