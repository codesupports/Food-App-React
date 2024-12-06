import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/productSlice'

const Categoery = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.product.data);

    const [activeLink, setActiveLink] = useState("All");

    const filterCategoery = data.map((item) => {
        return item.category
    })
    const categoeryName = ["All", ...new Set(filterCategoery)]

    const hadleSelect = (val) => {
        setActiveLink(val);
        dispatch(setCategory(val))
    }
    return (
        <div className='py-5'>
            <div className='lg:flex'>
                <p className='text-white font-bold pl-3  drop-shadow-sm pb-1'>Find the best food:</p>
                <ul className='flex flex-wrap lg:gap-4 sm:gap-4 gap-1 pl-3'>
                    {
                        categoeryName.map((categ, index) => {
                            return (
                                <li key={index} >
                                    <a aria-label={categ} tabIndex={1} className={`${activeLink === categ ? "bg-greentheame text-white" : "bg-white"} text-sm  px-3 py-2  cursor-pointer rounded-md hover:bg-greentheame hover:text-white `}
                                        onClick={(e) => hadleSelect(categ)}>
                                        {categ}
                                    </a>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categoery
