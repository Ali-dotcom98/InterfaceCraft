import React, { useEffect, useRef, useState } from 'react'
import {navigations} from "../../data"
import { Link } from 'react-scroll'
import pic from "../../assets/logo.svg"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import {useTheme}from "../../ContextApi/ThemeContext"
import {Sun, Moon} from "lucide-react"
const NavBar = () => {
    const [first, setfirst] = useState(false)
    const target = useRef(null);

    const {theme , ToggleTheme} = useTheme()
    console.log(theme);
    
    useEffect(() => {
        if (first) {
            gsap.fromTo(
                target.current,
                { y: -150, },
                { y: 0, top:0}
            );
        }
    }, [first]);

    

   

    const Scrollhandle=()=>{
        const postion = window.scrollY
        if(postion>60)
        {
            setfirst(true)
        }
        else if(postion<60)
        {
            setfirst(false)
        }
        
    }

    useEffect(()=>{

        window.addEventListener("scroll" , Scrollhandle)
        return ()=> window.removeEventListener('scroll', Scrollhandle)

    },[])


    return (
    <>
        <nav ref={target} className={`${first === true ? "fixed z-50 top-0 left-0 w-full border-b border-primary-pr":"relative z-50"} font-poppins px-2 py-2 ${theme==="dark"?"bg-black text-white opacity-100 ": "text-black bg-white  bg-opacity-90"} `}>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex items-end'>
                    <img className='size-8' src={pic} alt="" />
                    <h1 className='text-2xl'>Travins</h1>
                    
                </div>
                <div className='flex items-center gap-5'>
                    {
                        navigations.map((data)=>(
                            <Link to={data.to}
                            offset={data.offset}
                            smooth={true}
                            duration={500}
                            hashSpy={true}  
                            isDynamic={true} 
                            spy={true}
                            activeClass="border-b-2 border-primary-pr !text-primary-pr"
                            className='font-medium'

                            >
                            {
                                data.label
                            }
                            
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-row items-center gap-4 px-5'>
                    <div onClick={ToggleTheme} className='w-fit p-1 cursor-pointer rounded-full'>{theme==="light"?<Moon />:<Sun />}</div>
                    <button className='bg-primary-pr py-2 px-3 rounded-3xl text-white'> <Link to='contact' offset={30} smooth={true}>Get Started</Link></button>
                    <Link to='contact' offset={50} smooth={true}>Sign up</Link>
                    
                </div>
            </div>

        </nav>
    </>
  )
}

export default NavBar