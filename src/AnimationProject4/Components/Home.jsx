import React, { useRef } from 'react'
import air from "../assets/airplane.png"
import bg2 from "../assets/bg-2.svg"
import beach from "../assets/beach.png"
import City from "../assets/citycafe.png"
import {partners} from "../data"
import female from "../assets/traveller.png"
import { useGSAP } from '@gsap/react'
import gsap from"gsap"
import Slider from 'react-slick'
import {useTheme} from "../ContextApi/ThemeContext"
import world from "../assets/world.svg"

const Home = () => {
    const {theme , ToggleTheme} = useTheme()

   const box = useRef(null)

   useGSAP(() => {
    gsap.to(box.current, {
        y: -25,        
        duration: 1.5,  
        repeat: -1,     
        yoyo: true,     
        ease: "power1.inOut", 
    });
}, []);

  const setting ={
    dots: false,
    infinite: true,
    swipeToSlide: true,
    speed:2000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,  
    swipe: true, 
    arrows:false,    
    pauseOnHover: true,
  }
 

  return (
    <>
      <section id='home' className={`relative h-fit font-poppins  pt-6 px-10 ${theme==="dark"?"bg-black text-white ": "text-black bg-white"}`}>
        <div className='relative z-20 grid grid-cols-2 h-full'>
          <div className='col-span-1 space-y-5  py-10'>
            <h1 className='font-zentry text-5xl font-bold'>Explore the World , Your  way with <span className='text-primary-pr'>Travins</span></h1>
            <p className='text-text-muted font-medium'>Book your next adventure with ease. Affordable, relible , and unforgettable, travel experience await.</p>
            <div ref={box} >
              <img src={air} alt="" />
            </div>
          </div>
          
          <div className='relative col-span-1 h-full'>
              <div className='w-full absolute z-0 inset-0  '>
                  <img src={bg2} className='w-full scale-75 -translate-y-16 rotate-12 -translate-x-5' alt="" />
              </div>
              <div className='h-full w-full relative z-20 grid grid-cols-2'>
            
                  <div className='col-span-1 flex flex-col items-center  h-full '> 
                    <div className=' flex gap-2 items-end'>
                    <h1 className='text-4xl'>4.5</h1>
                    <div className='flex flex-col'>
                      <div className='flex scale-75 -translate-x-4'>
                      <svg className='text-[#FFFF00]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                      <svg className='text-[#FFFF00]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                      <svg className='text-[#ffff00]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                      <svg className='text-[#ffff00]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                      <svg className='text-[#ffff00]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF00" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>

                    </div>
                    <div className='text-text-muted'>
                      1210 Reviews
                    </div>
                  </div>
                    </div>
                    <img src={beach} className='scale-75  -translate-y-7 rounded-3xl' alt="" />
                  </div>



                  <div className='col-span-1   h-fit '>
                      <div className='px-10 pb-10 rounded-3xl'>
                      <img src={City}alt="" className='rounded-3xl' /> 
                      </div>
                      <div className='p-10 -translate-y-16'>
                        <img src={female}alt="" className='-translate-y-2 ' />
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <div className='relative z-20 -translate-y-24 '>
        <Slider {...setting}>
          {partners.map((data, index) => (
            <div key={index} className="flex flex-row items-center justify-center">
              <div className="flex items-center justify-center">
                <img 
                  src={data.image} 
                  alt="" 
                  className="h-8 object-contain filter grayscale"
                />
                
              </div>
            </div>
          ))}
        </Slider>

        </div>
        <div className='absolute z-0 inset-0 -translate-y-16'>
          <img src={world} alt="" />
        </div>
       
      </section>
    </>
  )
}

export default Home