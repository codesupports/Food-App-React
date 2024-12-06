import React, { useState, useEffect } from 'react'
import hamburgerIcon from '../../public/hamburger.svg'
import { useSelector, useDispatch } from 'react-redux';
import { searhData } from '../features/productSlice'
import { Link } from 'react-router-dom';

const Header = () => {
    const data = useSelector((state) => state.product.data);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [mainData, setMainData] = useState(data);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handelSearch = (elem) => { // search data by serach input
        const filteredData = data.filter((item) => {
            return item.name.toLowerCase().includes(elem.toLowerCase())
        })
        setMainData(filteredData)

    }

    useEffect(() => {
        // setMainData(data)
        dispatch(searhData(mainData))
    }, [mainData, data])

    return (
        <>
            <header className='bg-white p-5 shadow-md  top-0 w-full fixed z-10'>
                <div className='flex justify-between container m-auto'>
                    <div className='text-greentheame text-2xl font-bold flex items-center'>
                        <Link to="/">TastyFood</Link>
                    </div>
                    <div className='items-center hidden sm:block pt-2'>
                        <nav>
                            <ul className="flex space-x-8">
                                <li><Link to="/" className="text-gray-950 hover:text-greentheame">Home</Link></li>
                                <li><a href="#" className="text-gray-950 hover:text-greentheame">Receipe</a></li>
                                <li><a href="#" className="text-gray-950 hover:text-greentheame">About</a></li>
                                <li><a href="#" className="text-gray-950 hover:text-greentheame">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <button className='block lg:hidden sm:hidden' onClick={toggleMenu}><img src={hamburgerIcon} className='w-7' alt='' /></button>
                    {/* mobile Navigation */}
                    <nav className={`w-full block lg:hidden sm:hidden bg-white h-screen fixed top-0 right-0 transition duration-700 ease-in-out px-3 py-5 z-10 ${isOpen ? "translate-x-0" : "translate-x-full"} `}>
                        <span className='cursor-pointer absolute right-5 text-lg font-bold' onClick={toggleMenu}>&#x2715;</span>
                        <ul className="mt-5">
                            <li><a href="#" className="text-gray-950 hover:text-greentheame py-2 pl-3 block border-b">Home</a></li>
                            <li><a href="#about" className="text-gray-950 hover:text-greentheame  py-2 pl-3  block border-b">Receipe</a></li>
                            <li><a href="#services" className="text-gray-950 hover:text-greentheame  py-2 pl-3  block border-b">About</a></li>
                            <li><a href="#contact" className="text-gray-950 hover:text-greentheame  py-2 pl-3  block border-b">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="relative hidden sm:block">
                        <input onChange={(e) => handelSearch(e.target.value)} type="text" placeholder="Search..." className="px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 w-48 md:w-64" />

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
