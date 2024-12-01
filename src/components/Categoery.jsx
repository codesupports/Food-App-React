import React from 'react'

const Categoery = () => {
    return (

        <div className='py-5'>
            <div className='flex'>
                <p className='text-white font-bold pl-3  drop-shadow-sm'>Find the best food:</p>
                <ul className='flex gap-4 pl-3'>
                    <li><a href="#" className='bg-white px-3 py-1 rounded-lg hover:bg-greentheame hover:text-white'>All</a></li>
                    <li><a href="#" className='bg-white px-3 py-1 rounded-lg hover:bg-greentheame hover:text-white'>Lunch</a></li>
                    <li><a href="#" className='bg-white px-3 py-1 rounded-lg hover:bg-greentheame hover:text-white'>Breakfat</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Categoery
