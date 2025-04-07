import React from 'react'
import {testimonials} from "../data"
import Slider from "react-slick";
import {useTheme} from "../ContextApi/ThemeContext"
const Testimonials = () => {
    const {theme , ToggleTheme} = useTheme()

    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        centerMode: true,
        swipeToSlide: true,
        centerPadding: "15%",
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        draggable: true,  
        swipe: true, 
          
      };
  return (
    <>
        <section id='testimonials' className={`h-fit space-y-5 py-10 ${theme==="dark"?"bg-black text-white ": "text-black bg-light-bg-primary"}`}>
            <div className='flex flex-col items-center justify-center gap-1 '>
                <h1 className='text-2xl font-bold'>What Our</h1>
                <h2 className='text-3xl font-bold text-primary-pr'>Customer Say</h2>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div className='w-full'>
                    <Slider className='test' {...settings}>
                    {
                        testimonials.map((data, index) => (
                            <div key={index} className="px-3">
                                <div className={`testimonial-slide  px-10 py-8 rounded-lg shadow-lg space-y-3 ${theme==="dark"?"bg-black text-white ": "text-black bg-white"}`}>
                                    <div className='flex flex-row gap-2'>
                                        <div className='size-16'><img src={data.profile} className='rounded-full' alt="" /></div>
                                        <div>
                                            <h3 className="font-bold">{data.name}</h3>
                                            <h4 className='text-text-muted'>{data.position} <span className='text-primary-pr font-medium'>{data.company}</span> </h4>
                                        </div>
                                        
                                    </div>
                                    <p className='line-clamp-2'>
                                        {data.content}
                                    </p>

                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials