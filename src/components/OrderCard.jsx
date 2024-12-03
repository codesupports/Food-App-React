import React, { useEffect, useState } from 'react'
import deleteIcon from '../../public/delete.svg'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../features/productSlice'

const OrderCard = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.product.addCart);
    const [actualData, setActualData] = useState(data);
    const [countMap, setCountMap] = useState({});
    const [recipeCount, setRecipeCount] = useState(0);


    const uniqueObject = () => {
        const ft = data.filter((item, index) => {
            return index == data.findIndex((x) => {
                return item.id === x.id
            })
        })
        setActualData(ft)
    }

    useEffect(() => {
        uniqueObject()
    }, [data])

    useEffect(() => {
        var count = {}
        const countObject = () => {
            data.forEach((item) => {
                count[item.id] = (count[item.id] || 0) + 1
            }, {})
            setCountMap(count);
        }
        countObject()
    }, [data])

    const productQuantity = (id) => { // get quantity of product
        return countMap[id] ?? 'Key does not exist in the second object.';
    };

    console.log('recipeCount', countMap)

    const addToCartFunction = (id) => {
        dispatch(addToCart(id))
    }
    const removeFromCartFunction = (id, index) => {
        // dispatch(removeCart({ id, index }))
        // countMap[id] = (countMap[id] || 0) - 1
    }

    // console.log('recipeCount', countMap)
    return (
        <>
            {
                actualData?.map((item, index) => {
                    return (
                        <div key={index} className="mb-4  p-2 rounded bg-gray-50 shadow-md">
                            <div className='flex'>
                                <div className='w-10 mr-2 flex items-center' >
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='w-full'>
                                    <div className='text-sm flex justify-between'>
                                        <span className='text-xs'>{item.name}</span>
                                        <span className='text-black cursor-pointer'><img src={deleteIcon} className='w-4' alt='delete' /> </span>
                                    </div>
                                    <div className='text-sm flex justify-between pt-1'>
                                        <span className='text-greentheame font-semibold'>${item.price * productQuantity(item.id)}</span>
                                        <div className='flex justify-center items-center'>
                                            <div className='border w-5 px-1 text-sm rounded-sm border-gray-400 text-greentheame cursor-pointer  hover:bg-greentheame hover:text-white' onClick={() => addToCartFunction(item.id)}>+</div>
                                            <div className='px-3'>{productQuantity(item.id)}</div>
                                            <div className='border w-5 px-1 text-sm text-center  rounded-sm border-gray-400 text-greentheame cursor-pointer  hover:bg-greentheame hover:text-white' onClick={() => removeFromCartFunction(item.id, index)}>-</div>
                                        </div>
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

export default OrderCard
