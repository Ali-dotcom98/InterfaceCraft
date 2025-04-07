import React from 'react'
import bg11 from "../assets/bg-4.svg"
import {useTheme} from "../ContextApi/ThemeContext"
const Aboutus1 = () => {
    const {theme , ToggleTheme} = useTheme()
  return (
    <>
        <section className={`h-[50vh] py-10  relative ${theme==="dark"?"bg-dark-bg-overlay text-white ": "text-black bg-white"} px-10`}>
            <div className='relative h-full py-10'>
                <div className='overflow-hidden absolute rounded-2xl  inset-0 '>
                <img src={bg11} className='object-cover rounded-2xl'   alt="" />
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-2xl font-medium'>Stay in the loop</h1>
                    <p className='font-medium'>Get the latest travel deals, tips and updates straight to your inbox</p>
                    <div className='relative z-20  w-[60%] flex flex-row gap-4'>
                        <div className='bg-white w-[80%] rounded-2xl'>
                            <input className=' w-full border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-pr rounded-2xl p-2' type="text" name="" id="" placeholder='Enter you email address' />
                        </div>
                        <button className='relative z-10  px-3 py-2 bg-primary-pr text-white rounded-2xl'>
                              Send Now
                        </button>
                    </div>
                </div>
            </div>
           
        </section>
    </>
  )
}

export default Aboutus1