import React from 'react'
import axios from 'axios'
import Product from './Product';
const ProductFeed = ({products}) => {
            console.log(products);
  return (
    <section className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {
                        products.slice(0,4).map((item) => {
                                   return (
                                    <Product item={item} key={item.id}/>
                                   )
                        })
            }
            <img src="https://links.papareact.com/6ff" alt="Advertisement" className="col-span-full h-[200px] w-full" />

            <div className="md:col-span-2">
            {
                        products.slice(4,5).map((item) => {
                                   return (
                                    <Product item={item} key={item.id}/>
                                   )
                        })
            }
            </div>

            {
                        products.slice(5,products.length).map((item) => {
                                   return (
                                    <Product item={item} key={item.id}/>
                                   )
                        })
            }

    </section>
  )
}

export default ProductFeed
