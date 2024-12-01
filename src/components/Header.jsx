import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-white p-5 shadow-md sticky'>
                <div className='flex justify-between container m-auto'>
                    <div className='text-greentheame text-2xl font-bold flex items-center'><a href="/">TastyFood</a></div>
                    <div className='flex items-center'>
                        <nav>
                            <ul class="flex space-x-8">
                                <li><a href="#" class="text-gray-950 hover:text-greentheame">Home</a></li>
                                <li><a href="#about" class="text-gray-950 hover:text-greentheame">Receipe</a></li>
                                <li><a href="#services" class="text-gray-950 hover:text-greentheame">About</a></li>
                                <li><a href="#contact" class="text-gray-950 hover:text-greentheame">Contact</a></li>
                            </ul>
                        </nav>

                    </div>
                    <div className="relative hidden sm:block">
                        <input type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 w-48 md:w-64" />
                        <button className="absolute top-0 right-0 mt-2 mr-3 text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm6 6a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm0 0l6 6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <section role="banner" className=' bg-black bg-opacity-10 m-auto py-4 lg:py-10'>
                <h1 className="text-center leading-normal text-white text-2xl sm:text-4xl lg:text-6xl from-600 pt-3 lg:pt-10 pb-5 rounded-lg drop-shadow-lg">Healthy Cooking Receipes and the right Nutrition.</h1>
                <p className='text-center text-xl font-bold'>Browse Through Over 65,000 Tasty Food</p>
            </section>
        </>
    )
}

export default Header
