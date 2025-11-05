import React from 'react'

function Research() {
return (

    <>
<div className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/10/research-banner.webp')] h-[80vh] w-auto bg-no-repeat bg-fixed bg-cover bg-bottom bg-black/100 relative">

    <h2 className='text-white text-8xl absolute bottom-1 left-8 font-serif animate-slide-up'>Research</h2>
</div> 

<div className='flex justify-around items-center py-10 px-10 bg-indigo-50'>
    <p className='text-2xl font-sans'>Research Profiles</p>
    <div className='w-1 h-5 border-r-2 border-gray-500'></div>

    <p className='text-2xl font-sans'>Research Output</p>
    <div className='w-1 h-5 border-r-2 border-gray-500'></div>

    <p className='text-2xl font-sans'>Research Units</p>
    <div className='w-1 h-5 border-r-2 border-gray-500'></div>

    <p className='text-2xl font-sans'>Journals</p>
    <div className='w-1 h-5 border-r-2 border-gray-500'></div>

    <p className='text-2xl font-sans'>Awards</p>
</div>

<div className='flex justify-between'>
    <div className='flex flex-col px-6'>
    <h2 className='text-5xl font-serif mt-30'>Research at UOL</h2>
    <div className='w-55 h-1 border-b-4 border-gray-500 rounded-2xl mt-1.5'></div>

    <p className='text-xl font-sans mt-6 pr-50'>At The University of Lahore, research lies at the heart of our academic excellence, empowering students and faculty to push boundaries, explore innovative ideas, and make contributions to the global knowledge landscape. Our undergraduate and graduate research initiatives inspire curiosity, creativity, and exploration, providing the foundation for scientific breakthroughs.</p>

    </div>

    <img className='w-[40vw] h-[70vh]' src="https://uol.edu.pk/wp-content/uploads/2025/10/Linking-fintech-and-gender-equality.webp" alt="pic" />
</div>

</>
)
}

export default Research