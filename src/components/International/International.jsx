import React from 'react'
import { Checkbox, Button } from '@mui/material'

function International() {
return (
<>


    <div className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/08/international-hero-img-scaled.webp')] h-[70vh] w-auto bg-no-repeat bg-fixed bg-cover bg-center relative">

    <h2 className='text-white text-8xl absolute bottom-1 left-8 font-serif animate-slide-up'>International Students</h2>
</div> 

<div className='bg-indigo-50 overflow-x-hidden'>
<div className='p-8'>
    <h2 className='text-5xl font-serif text-slate-800'>Degree search</h2>
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

<p className='text-2xl font-serif px-8 py-12'>The University of Lahore warmly welcomes students from around the globe, offering world-class education, exceptional campus life, and extensive support to ensure a fulfilling academic journey.</p>

</> 

)
}

export default International