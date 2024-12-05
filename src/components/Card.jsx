import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/productSlice'

const Card = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.product.data);
    const searchData = useSelector((state) => state.product.searchData);

    const selectCategoery = useSelector((state) => state.product.selectedCategory);

    const [mainData, setMainData] = useState(searchData);

    const hadleSelect = (e) => {
        const filteredData = searchData.filter((item) => {
            return item.category == selectCategoery
        })
        if (selectCategoery === "All") {
            setMainData(searchData)
        } else {
            setMainData(filteredData)

        }
    }
    const addToCartFunction = (id) => {
        dispatch(addToCart(id))
    }
    useEffect(() => {
        // setMainData(data)
        hadleSelect()
    }, [searchData, selectCategoery])

    return (
        <>
            {
                mainData.map((item) => {
                    return (
                        <div key={item.id} className="w-full xl:w-1/5 lg:w-1/4 md:w-1/4 sm:w-1/3 px-2 mb-3">
                            <div className=" bg-white rounded-lg shadow-xl overflow-hidden m3-6">
                                <div className='p-3'>
                                    <img src={item.img} alt="Product Image" className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out m-auto" />
                                </div>
                                <div className="p-4">
                                    <div className='flex justify-between'>
                                        <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-sm font-semibold text-greentheame ">₹{item.price}</p>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-sm ">{item.desc.slice(0, 50)}...</p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <p className="text-sm"> <span className='text-green-700 text-lg'>&#9733;</span> {item.rating}</p>
                                        <button className="text-sm bg-greentheame text-white px-3 py-1 rounded-md hover:bg-greentheameHover transition" onClick={() => addToCartFunction(item.id)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;
