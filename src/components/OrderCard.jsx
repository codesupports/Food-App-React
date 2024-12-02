import React from 'react'
import deleteIcon from '../../public/delete.svg'
function OrderCard() {
    return (
        <div className="mb-4  p-2 rounded bg-gray-50 shadow-md">
            <div className='flex'>
                <div className='w-10 mr-2' >
                    <img src="https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png" alt="" />
                </div>
                <div className='w-full'>
                    <div className='text-sm flex justify-between'>
                        <span className='text-xs'>Product Name</span>
                        <span className='text-black cursor-pointer'><img src={deleteIcon} className='w-4' alt='delete' /> </span>
                    </div>
                    <div className='text-sm flex justify-between pt-1'>
                        <span className='text-greentheame font-semibold'>$120</span>
                        <div className='flex justify-center items-center'>
                            <div className='border w-5 px-1 text-sm rounded-sm border-gray-400 text-greentheame cursor-pointer  hover:bg-greentheame hover:text-white'>+</div>
                            <div className='px-3'>2</div>
                            <div className='border w-5 px-1 text-sm text-center  rounded-sm border-gray-400 text-greentheame cursor-pointer  hover:bg-greentheame hover:text-white'>-</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
