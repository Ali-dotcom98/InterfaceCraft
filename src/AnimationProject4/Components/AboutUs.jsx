
import bg2 from "../assets/bg-2.svg"
import male from "../assets/traveller-male.png"
import ship from "../assets/cruiseship.png"
import Build from "../assets/hotel.png"
import bg1 from "../assets/bg-1.svg"
import {OdoMeterContent ,whyChooseUs} from "../data"
import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import {useTheme} from "../ContextApi/ThemeContext"

console.log(OdoMeterContent);

const AboutUs = () => {
    const {theme , ToggleTheme} = useTheme()
    const [X, setX] = useState(0);
const [X1, setX1] = useState(0);
const [X2, setX2] = useState(0);
const [X3, setX3] = useState(0);

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setX(OdoMeterContent[0].count);
        setX1(OdoMeterContent[1].count);
        setX2(OdoMeterContent[2].count);
        setX3(OdoMeterContent[3].count);
    }, 2000);

    return () => {
        clearTimeout(timeoutId);
    };
}, []); 

    
    return (
    <>
    <section id="about" className={`h-fit px-16 py-24  font-poppins ${theme==="dark"?"bg-dark-bg-overlay  text-white ": "text-black bg-zinc-200"}`}>
        <div className='grid grid-cols-2 gap-5 w-full h-full'>
            <div className='relative col-span-1 h-full'>
                <div className='w-full absolute z-0 inset-0 '>
                    <img src={bg2} className='w-full scale-75 -translate-y-16' alt="" />
                </div>
                <div className='h-full w-full relative z-20 grid grid-cols-2 text-white'>
                    <div className='col-span-1  h-full'>
                            <img src={male} className='scale-75 -translate-y-7' alt="" />
                    </div>
                    <div className='col-span-1   h-fit'>
                        <img src={Build}alt="" className='' />
                        <img src={ship}alt="" className='-translate-y-5 ' />
                    </div>
                </div>
            </div>
            <div className='relative col-span-1  '>
                <div className="space-y-3 relative z-10">
                    <h1 className='text-xl text-primary-pr font-medium'>About Us</h1>
                    <p className='text-xl font-medium capitalize'>Who we Are </p>
                    <p>At Travins, we believe travel is more than just going places - it's about creating memories that last a lifetime. Our mission is to make travel planning simple, affordable, and accessible for everyone. From flights to accommodations and everything in between, we're here to help you every step of the way.</p>
                    <div className='relative  grid grid-cols-2 gap-5 pt-10 px-10'>
                        {
                            OdoMeterContent.map((data ,index)=>(
                                <div className={`flex flex-col items-center justify-center ${theme==='dark'?"bg-dark-bg-secondary":"bg-light-bg-secondary"} py-4 rounded-xl`}>
                                    <h1 className='text-primary-pr'>{data.icon}</h1>
                                    <p className='text-3xl py-1 flex flex-row gap-2'>
                                    
                                    <Odometer value={ index===1 ?X : index===2 ? X1 : index===3 ? X2 :X3}  format="d" className="odometer" />
                                    <span>{data.sign}</span>
                                
                                    </p>
                                    <p>{data.label}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="absolute z-0 inset-0 opacity-15 scale-75 translate-x-32 translate-y-32">
                        <img src={bg1} alt="" />
                </div>
            </div>

        </div>
    </section>
    <section className={`${theme==="dark"?"bg-black text-white ": "text-black bg-light-bg-primary"}`}>
        <div className="flex flex-row px-10 py-16">
            {
                whyChooseUs.map((data)=>(
                    <div className="flex flex-col items-start gap-3 px-4">
                        <div className=" text-3xl"><data.icon/></div>
                        <div>
                            <h1 className="font-medium">{data.title}</h1>
                            <p className="text-text-muted">{data.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default AboutUs