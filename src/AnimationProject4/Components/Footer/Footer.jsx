import React from 'react'
import watermark from '../../assets/bg-3.svg'
import {footer} from "../../data"
import {useTheme}from "../../ContextApi/ThemeContext"
const Footer = () => {
    const {theme , ToggleTheme} = useTheme()
  return (
    <>
        <div className={`relative h-[80vh] overflow-hidden font-poppins ${theme==="dark"?"bg-black text-white ": "text-black bg-white"}`}>
            <div className='absolute w-full  opacity-15'>
                <img src={watermark} className='w-full ' alt="" />
            </div>
           <div className=' flex flex-row items-center gap-10 translate-x-36 translate-y-10 py-20 '>
                <div className='w-[20%]  space-y-4'> 
                    <div className='text-3xl'>
                        <h1>Contact Us</h1>
                    </div>
                    <div>
                        <h1>Email</h1>
                        <p>alishah123458.as@gmail.com</p>
                    </div>
                    <div>
                        <h1>Phone</h1>
                        <p>+1234567890</p>
                    </div>
                    <div>
                        <h1>Address</h1>
                        <p>Xyz</p>
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            footer.map((data)=>(
                                <div className='flex flex-col gap-4'>
                                    <h1 className='text-xl font-medium'> {data.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            data.links.map((data)=>(
                                                <div className=''>
                                                    {
                                                        <div className='flex flex-row gap-4 items-center'>
                                                            <h1><data.icon/></h1>
                                                            <p>{data.label}</p>
                                                        </div>


                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
            <div className='w-full  py-3 absolute bottom-0 z-30'>
                <div className='text-sm flex flex-row items-center justify-center'>
                    Copyright Confix - All right reserved 
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer