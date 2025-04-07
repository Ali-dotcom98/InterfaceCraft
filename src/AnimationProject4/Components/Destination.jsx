import React from 'react'
import {popularDestinations} from "../data"
import Slider from 'react-slick';
const Destination = () => {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        centerMode: true,
        swipeToSlide: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        draggable: true,  
        swipe: true, 
          
      };

  return (
    <>
        <section id='destination' className='h-fit bg-black text-white font-poppins py-20 space-y-6'>
            <div className='flex flex-col items-center justify-center gap-3 '>
                <h1 className='text-2xl font-bold'>Where Will</h1>
                <h2 className='text-3xl font-medium text-primary-pr'>You GO Next</h2>
                <p className='font-medium text-text-muted'>Discover Some of the most sought-after destination around the world.</p>
            </div>
            <div className='px-10'>
                <div className=' overflow-x-hidden'>
                    <Slider {...settings}>
                        {
                            popularDestinations.map((data)=>(
                            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden group ">
                                <img src={data.image} className="w-full h-full object-cover rounded-2xl" alt="" />
                                <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div> {/* Dark overlay */}
                                <div className='opacity-100 group-hover:opacity-0 absolute top-4 right-0 py-1 rounded-3xl px-4 mx-3 bg-black'> {data.rating}</div>
                                <div className='opacity-0 transition-all ease-in duration-200  group-hover:opacity-100 absolute top-10 w-full px-3'> 
                                    <div className='relative z-20 text-sm flex flex-col gap-3'>
                                        <div className=' rounded-3xl  relative text-white border'>
                                            <div className='relative z-20 flex flex-row gap-2 px-5 py-2  items-center'>
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='text-primary-pr' width="24" height="24" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h1>{data.hotels_number}</h1>
                                                    <p>Hotels</p>
                                                </div>
                                            </div>
                                            <div className='absolute bg-black opacity-45 inset-0 rounded-3xl'>

                                            </div>
                                        </div>
                                        <div className=' rounded-3xl  relative text-white border'>
                                            <div className='relative z-20 flex flex-row gap-2 px-5 py-2  items-center'>
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='text-primary-pr' width="24" height="24" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h1>{data.flights_number}</h1>
                                                    <p>Flight</p>
                                                </div>
                                            </div>
                                            <div className='absolute bg-black opacity-45 inset-0 rounded-3xl'>

                                            </div>
                                        </div>
                                        <div className=' rounded-3xl  relative text-white border'>
                                            <div className='relative z-20 flex flex-row gap-2 px-5 py-2  items-center'>
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='text-primary-pr' width="24" height="24" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h1>{data.price}</h1>
                                                    <p>Premimum Service</p>
                                                </div>
                                            </div>
                                            <div className='absolute bg-black opacity-45 inset-0 rounded-3xl'>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="absolute bottom-0 z-10 h-[30%] bg-black bg-opacity-85   w-full">
                                    <div className='relative flex flex-col   w-full items-center justify-center pt-3'>
                                        <h1 className="text-white text-2xl font-bold">{data.country}</h1>
                                        <p className='text-center'>{data.title}</p>
                                    </div>
                                </div>
                            </div>
                            

                            ))
                        }

                    </Slider>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <button className='bg-primary-pr py-2 px-3 rounded-3xl'> All Destination</button>

            </div>
        </section>
    </>
  )
}

export default Destination