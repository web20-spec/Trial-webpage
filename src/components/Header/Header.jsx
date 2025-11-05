import React from 'react'
import {Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState, useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
    const isScrolled = window.scrollY > 200;
    setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
    <div className={`flex gap-x-24 text-center fixed overflow-x-hidden z-20 duration-700 w-full ${
        scrolled ? "bg-black/85 shadow-lg  " : "bg-transparent"}`}>

        <NavLink to='/' className='flex-shrink-0'>
        <img className='h-[72px] w-auto pl-3 pt-3 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/en/thumb/2/20/University_of_Lahore_%28logo%29.png/250px-University_of_Lahore_%28logo%29.png" alt="logo" />
        </NavLink>

    <nav className='text-white ml-2'>

        <ul className='flex justify-evenly gap-12 my-8 text-lg cursor-pointer text-center w-full'>

        <NavLink to='/research'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        >
            <li className='hover:text-orange-500 duration-500'>Research </li>
        </NavLink>


        <NavLink to='/news'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        >
            <li className='hover:text-orange-500 duration-500'>News </li>
        </NavLink>


        <NavLink to='/academics'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        ><li className='hover:text-orange-500 duration-500'>Academics </li></NavLink>


        <NavLink to='/international'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        >
            <li className='hover:text-orange-500 duration-500'>International </li>
        </NavLink>

        <NavLink to='/campus'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        >
            <li className='hover:text-orange-500 duration-500'>Campus </li>
            </NavLink>

        
        <NavLink to='/admissions'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        ><li className='hover:text-orange-500 duration-500'>Admissions</li></NavLink>


        <NavLink to='/about'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 decoration-2 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        ><li>About </li>
        </NavLink>

        </ul>
    

    </nav>

<div className="flex justify-end my-5 w-full items-center">
<Link to='/apply' target='_blank'><Button className='rounded-2xl text-center'
variant="contained"
color='error'
>Apply Now</Button>
</Link>

<div className='ml-4'>
<SearchIcon fontSize='large' className='text-white cursor-pointer'/>
</div>
</div>

</div>

)
}

export default Header