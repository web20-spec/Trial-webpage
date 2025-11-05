import React from 'react'
import {Button} from '@mui/material'

function Admissions() {
return (
<>
<div className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/08/DJI_0044-copy-scaled-1.webp')] h-[88vh] bg-no-repeat bg-fixed bg-cover bg-black/100 relative">

        <h2 className='text-white text-8xl absolute bottom-1 left-8 font-serif'>Admissions</h2>
</div> 

<div className='flex justify-start gap-24 mt-5 mb-5 p-6'>
        <div className='flex flex-col mt-8'>
                <p className='underline text-xl font-sans font-bold'>Prospectus 2025-2026</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Admission Guide</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Admission test sample</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Scholarships</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Fees</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Hostel & accomodation</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Transport services</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

                <p className='text-xl text-slate-700 mt-7'>Student life</p>
                <div className='w-56 h-1 border-b border-gray-400 rounded-2xl mt-1'></div>

        </div>

        <div className='mt-0'>
                <h2 className='text-5xl font-sans font-semibold'>Prospectus 2025-26</h2>
                <div className='w-42 h-1 border-b-6 border-gray-400 rounded-4xl mt-3 mb-5'></div>

                <Button variant='contained' size='xlarge' sx={{
                        backgroundColor:'rgb(255, 100, 0)',
                        border:'10px',
                        borderRadius:'50px',
                        height:'65px',
                }}>Download Prospectus</Button>

        </div>
</div>
</>
)
}

export default Admissions