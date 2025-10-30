import React from 'react'
import {Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {Link} from 'react-router-dom'

function Home() {


return (
<div
    className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/10/Web-Banner-scaled.webp')] h-[88vh] bg-no-repeat bg-fixed bg-cover">

    <div className='flex justify-between'>

        <img className='h-18 pt-3 pl-3 ' src="https://www.accessed.pk/_next/image?url=%2FUniversities%2FUOL.png&w=640&q=75" alt="logo" />

    <nav className='text-white w-[60%] ml-2'>

        <ul className='flex justify-between mt-10 text-lg gap-4 cursor-pointer'>
        <li>Research </li>
        <li>News </li>
        <li>Academics </li>
        <li>International </li>
        <li>Campus Life </li>
        <li>Admissions </li>
        <li>About </li>
        </ul>
        {/* <NavLink >Research</NavLink>
        <NavLink >News</NavLink>
        <NavLink >Academics</NavLink>
        <NavLink >International</NavLink>
        <NavLink >Campus Life</NavLink>
        <NavLink >Admissions</NavLink>
          <NavLink >About</NavLink> */}

    </nav>

<div className="flex justify-between items-center h-27">
<Link to='/Apply'><Button className='rounded-2xl'
variant="contained"
color='error'
>Apply Now</Button>
</Link>

<div className='ml-4 mr-5'>
<SearchIcon fontSize='large' className='text-white cursor-pointer'/>
</div>
</div>


            </div>


    </div>
)
}

export default Home