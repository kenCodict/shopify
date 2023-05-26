import Image from 'next/image'
import React from 'react'
import {FaSearch, FaBars, FaShoppingCart} from 'react-icons/fa'
import { useSession, signIn, signOut } from "next-auth/react"
const Header = () => {
  return (
    <header className=''>
            {/* Top Header */}
            <div className="flex items-center bg-shopify_blue p-1 py-2 flex-grow gap-4">
                        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                                    {/* Logo */}
                        <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        alt={`Shopify Logo Image`}
                        className="cursor-pointer"
                        />
                        </div>
                        {/* Search Box */}
                        <div className="bg-yellow-400 hover:bg-yellow-700 hidden sm:flex items-center rounded-md duration-500 flex-grow cursor-pointer whitespace-nowrap">
                                    <input type="search" name="search" id="search" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md  focus:outline-none px-4'/>
                                    <FaSearch className='text-4xl p-1'/>
                        </div>
                        {/* Right */}
                        <div className="text-white flex items-center text-xs space-x-6 mr-6" onClick={() => signIn()}>
                                    <div className="link">
                                                <p className="">Hello KenCodict</p>
                                                <p className="link-p2">Account & List</p>

                                    </div>
                                    <div className="link">
                                                <p className="">Returns</p>
                                                <p className="link-p2">& orders</p>
                                    </div>
                                    <div className="link relative flex items-center">
                                      <span className="absolute top-0 -right-2 rounded-full bg-orange-400 h-4 w-4 font-extrabold flex items-center text-md justify-center md:right-10">0</span>
                                                <FaShoppingCart className='text-4xl'/>
                                                <p className="link-p2 hidden md:inline mt-2">Basket</p>
                                    </div>
                        </div>
            </div>


            {/* Bottom Header */}
            <div className="flex items-center bg-shopify_blue-light text-white text-sm space-x-3 p-2 pl-6">
              <p className="link flex items-center"><FaBars className='text-2xl mr-1 inline-block'/> All</p>
              <p className="link">Prime Video</p>
              <p className="link">Shopify Business</p>
              <p className="link">Todays Deals</p>
              <p className="link hidden lg:inline-flex">Electronics</p>
              <p className="link hidden lg:inline-flex">Food & Grocery</p>
              <p className="link hidden lg:inline-flex">Prime</p>
              <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
              <p className="link hidden lg:inline-flex">Health and Personal Care</p>
            </div>
    </header>
  )
}

export default Header