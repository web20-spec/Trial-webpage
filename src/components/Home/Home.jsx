import React from 'react'
import {Checkbox, Button} from '@mui/material'
import EastIcon from '@mui/icons-material/East'
// import {Link} from 'react-router-dom'

function Home() {


return (
<>
<div
    className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/10/Web-Banner-scaled.webp')] h-[88vh] bg-no-repeat bg-fixed bg-cover overflow-x-hidden">
    </div>

<div className='bg-indigo-50 overflow-x-hidden'>
<div className='p-8'>
    <h2 className='text-5xl font-serif'>Degree search</h2>
</div>

<div className='pl-7 flex gap-12'>
    <div className='flex'>
    <Checkbox checked size='xsmall'/>
    <p className='text-2xl'>Undergraduate</p>
    </div>

    <div className='flex'>
    <Checkbox checked size='xsmall'/>
    <p className='text-2xl'> Postgraduate</p>
    </div>

    
    <div className='flex'>
    <Checkbox checked size='xsmall'/>
    <p className='text-2xl'>Professional Education</p>
    </div>
</div>



<div className='flex justify-start gap-5 items-center mt-5 ml-8 pb-10 w-full'>
    <input type="text" placeholder='Search...' className='h-12 w-[80%] border border-gray-400 rounded-3xl p-5' />


<Button variant='outlined' color='default' size='large' sx={{
        borderRadius:"50px",
        height:"48px",
        width:"110px",
        "&:hover": {
            backgroundColor:"rgb(255, 98, 11)",
            color:"white"
        }
    }}>
    Search</Button>
</div>
</div>

<div className='flex'>

    <div className='block'>
<div className='pl-8 pt-30'>
    <h2 className='text-6xl font-serif'>Research</h2>
</div>
<div className='w-34 h-1 border-b-4 border-gray-500 rounded-2xl mt-1.5 ml-8'></div>

<p className='pl-8 text-lg font-serif mt-5 pr-60'>
    The University of Lahore (UOL) drives research excellence across all disciplines, supported by specialised laboratories, extensive libraries, 10+ research units, and 28 discipline specific journals. With collaborative structures, expert research teams, and dynamic platforms, we promote innovation, critical thinking, and ground-breaking discoveries. Our regular international conferences facilitate knowledge exchange while advancing expertise in emerging fields. Research at UOL aims to benefit humanity globally by developing real- world solutions and driving socio economic progress.
</p>

<div className='flex justify-start items-center gap-5'>
<p className='pl-8 text-xl pt-6 font-semibold hover:text-orange-500 duration-500 cursor-pointer'>Discover more</p>

{/* <Button className='' size='xsmall' variant='outlined' sx={{
    color:"rgb(255, 98, 11)",
    backgroundColor:"white",
    border:'1px',
    borderRadius:"70%",
    borderColor:"rgb(255, 98, 11)",
    // fontSize:"1px",
    height:'25px',
    width:"1px"
}}><EastIcon sx={{fontSize:'1rem'}} /></Button> */}

<EastIcon fontSize='medium' sx={{
    color:"rgb(255, 98, 11)",
    marginTop:"4.5%",
    cursor:"pointer",
    transition: "transform 0.22s ease",   
    "&:hover": {
    transform: "translateX(6px)",      
        },
}} />
</div>
</div>

<img className='w-[56%] h-[1%] pt-8 pr-10 pb-6' src="https://uol.edu.pk/wp-content/uploads/2025/08/Research-on-homepage-1-2.webp" alt="image" />

</div>


</>

)
}

export default Home