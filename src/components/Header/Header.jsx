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
    <div className={`flex gap-x-24 text-center fixed z-20 duration-700 ${
        scrolled ? "bg-blue-950 shadow-lg" : "bg-transparent"}`}>

        <img className='h-18 pt-3 pl-3 ' src="https://www.accessed.pk/_next/image?url=%2FUniversities%2FUOL.png&w=640&q=75" alt="logo" />

    <nav className='text-white ml-2'>

        <ul className='flex justify-evenly gap-12 mt-10 text-lg cursor-pointer text-center w-full'>
        <li className='hover:text-orange-500 duration-500'>Research </li>
        <li className='hover:text-orange-500 duration-500'>News </li>
        <NavLink to='/academics'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        ><li className='hover:text-orange-500 duration-500'>Academics </li></NavLink>
        <li className='hover:text-orange-500 duration-500'>International </li>
        <li className='hover:text-orange-500 duration-500'>Campus Life </li>
        <li className='hover:text-orange-500 duration-500'>Admissions </li>
        <NavLink to='/about'
        className={({isActive}) => `${isActive ? "text-orange-500 underline decoration-orange-500 underline-offset-6 font-semibold" : "text-white"} hover:text-orange-500 duration-500 hover:underline hover:decoration-orange-500 hover:underline-offset-6`}
        ><li>About </li></NavLink>
        </ul>
    

    </nav>

<div className="flex justify-end mt-5 w-full items-center">
<Link to='/Apply'><Button className='rounded-2xl text-center'
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