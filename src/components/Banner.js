import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function Banner() {
  return (
<section className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
            >
                        <div className="relative">
                                    <img src="https://links.papareact.com/gi1" alt="any" className="" loading='lazy'  />
                        </div>
                        <div className="relative">
                        <img src="https://links.papareact.com/6ff" alt="any" className="" loading='lazy' />
                        </div>
                        <div className="relative">
                        <img src="https://links.papareact.com/7ma" alt="any" className="" loading='lazy'  />
                        </div>
            </Carousel>
</section>
  )
}

export default Banner