import React from 'react'
import EastIcon from '@mui/icons-material/East'

function Academics() {
  return (
    <>
    <div className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/10/acdemics-banner.webp')] h-[88vh] bg-no-repeat bg-fixed bg-cover bg-bottom bg-black/100 relative">

    <h2 className='text-white text-8xl absolute bottom-1 left-8 font-serif animate-slide-up'>Academics</h2>
    </div>

    <div className='pl-10 py-20 flex'>

      <div className='flex flex-col pt-6'>
      <h2 className='text-5xl font-serif pr-50'>Undergraduate Programmes</h2>

    <div className='w-34 h-1 border-b-4 border-gray-500 rounded-2xl mt-1.5 ml-8'></div>

    <p className='text-xl font-serif mt-5 pr-20'>Over diverse undergraduate programmes, industry-relevant curriculum, and continually trained faculty will encourage you to expand the limits of what you believe to be possible.
</p>

<div className='flex justify-start items-center gap-5'>
<p className='text-xl pt-6 font-semibold cursor-pointer'>Explore programmes</p>

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

<img className='w-[95%] h-[90%] px-10 ' src="https://uol.edu.pk/wp-content/uploads/2025/08/undergrad-1-1-1.webp" alt="image" />

    </div>


    </>
  )
}

export default Academics