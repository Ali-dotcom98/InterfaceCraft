import React from 'react'
import {services} from "../data"
import {useTheme} from "../ContextApi/ThemeContext"

const Services = () => {
    const {theme , ToggleTheme} = useTheme()
  return (
    

    <>
        <section id='services' className={`bg-dark-bg-secondary font-poppins ${theme==="dark"?"bg-dark-bg-secondary text-white ": "text-black bg-light-bg-primary"}`}>
            <div className='flex flex-row gap-5 px-10 py-10'>
                {
                    services.map((data)=>(
                        <div className='flex flex-col gap-2 p-4' >
                            <h1 className='text-primary-pr text-3xl'>{<data.icon/>}</h1>
                            <h1 className='text-lg font-medium'>{data.title}</h1>
                            <p>{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Services