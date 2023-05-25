import { Rating } from './Rating';
import Image from 'next/image'
import React,{useState} from 'react'
import { FaStar, FaStarHalf,FaProjectDiagram } from 'react-icons/fa'
import { HiOutlineStar,HiStar,  } from 'react-icons/Hi'
import currency from './currency';
// import {Currency} from 'react-currency-format'



const Product = ({item:{category, description, id, image, price, rating:{count, rate}, title}}) => {
            const [hasPrime, setHasPrime] = useState(Math.random() < 0.5)
  return (
            <article className="relative flex flex-col m-5 bg-white z-20 p-10">
                        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
                        <Image src={image} height={200} width={200} objectFit="contain" alt='title' className='mx-auto'/>
                        <h4 className="">{title}</h4>
                    <Rating   rate={rate}  />

                    <p className="text-xs my-2 line-clamp-2">{description}</p>
                    <div className="mb-5">
                       <p className="">{currency(price)}</p>
                    </div>
                    {hasPrime && <div className='flex items-center space-x-2 mb-5'>
                        <FaProjectDiagram className='text-2xl'/>
                        <p className="text-xs text-gray-500">FREE NEXT-DAY DELIVERY</p>
                        </div>}
                        <button className="mt-auto button">Add to Cart</button>
            </article>
  )
}

export default Product