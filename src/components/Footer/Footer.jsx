import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-700'>
    <div className='pt-20 flex justify-around'>
        <div className='block'>
        
        <h2 className='text-white text-xl font-sans font-semibold'>Academics</h2>
        <div className='w-13.5 h-1 border-b-4 border-orange-600 rounded-2xl mt-1.5'></div>

        <div className='mt-3'>
        <ul className='text-white flex flex-col justify-between gap-2 cursor-pointer'>
            <li className='hover:text-orange-500 duration-500'>Faculties & departments</li>
            <li className='hover:text-orange-500 duration-500'>Admissions</li>
            <li className='hover:text-orange-500 duration-500'>International Qualifications</li>
            <li className='hover:text-orange-500 duration-500'>Degree Finder</li>
        </ul>
        </div>

        <div className='mt-5'>
            <h2 className='text-white text-xl font-sans font-semibold'>Downloads/Resources</h2>
            <div className='w-24 h-1 border-b-4 border-orange-600 rounded-2xl mt-1.5'></div>

            <div className='mt-3'>
        <ul className='text-white flex flex-col justify-between gap-2 cursor-pointer'>
            <li className='hover:text-orange-500 duration-500'>Prospectus</li>
            <li className='hover:text-orange-500 duration-500'>Student Handbook</li>
            <li className='hover:text-orange-500 duration-500'>Employee Handbook</li>
            <li className='hover:text-orange-500 duration-500'>Academic Calendar</li>
        </ul>
        </div>

        </div>
        </div>

        <div className='block'>
            <h2 className='text-white text-xl font-sans font-semibold'>Research & Innovation</h2>
            <div className='block w-18.5 h-1 border-b-4 border-orange-600 rounded-2xl mt-1.5'></div>

            <div className='mt-3'>
        <ul className='text-white flex flex-col justify-between gap-2 cursor-pointer'>
            <li className='hover:text-orange-500 duration-500'>Research</li>
            <li className='hover:text-orange-500 duration-500'>ORIC</li>
            <li className='hover:text-orange-500 duration-500'>PGSR</li>
            <li className='hover:text-orange-500 duration-500'>Innovation Hub</li>
            <li className='hover:text-orange-500 duration-500'>Research units</li>
            <li className='hover:text-orange-500 duration-500'>Journals</li>
            <li className='hover:text-orange-500 duration-500'>Conferences</li>
            <li className='hover:text-orange-500 duration-500'>Learning Resource Center</li>
        </ul>
        </div>

            </div>


            <div className='block'>
            <h2 className='text-white text-xl font-sans font-semibold'>Services</h2>
            <div className='block w-14 h-1 border-b-4 border-orange-600 rounded-2xl mt-1.5'></div>

            <div className='mt-3'>
        <ul className='text-white flex flex-col justify-between gap-2 cursor-pointer'>
            <li className='hover:text-orange-500 duration-500'>Portals</li>
            <li className='hover:text-orange-500 duration-500'>Campus facilities</li>
            <li className='hover:text-orange-500 duration-500'>Clubs & Societies</li>
            <li className='hover:text-orange-500 duration-500'>Career services</li>
            <li className='hover:text-orange-500 duration-500'>Office of Student Affairs</li>
            <li className='hover:text-orange-500 duration-500'>Alumni</li>
            <li className='hover:text-orange-500 duration-500'>International</li>
            <li className='hover:text-orange-500 duration-500'>Health & Safety</li>
        </ul>
        </div>

            </div>


            <div className='block'>
            <h2 className='text-white text-xl font-sans font-semibold'>About</h2>
            <div className=' w-13 h-1 border-b-4 border-orange-600 rounded-2xl mt-1.5'></div>

            <div className='mt-3'>
        <ul className='text-white flex flex-col justify-between gap-2 cursor-pointer'>
            <li className='hover:text-orange-500 duration-500'>About UOL</li>
            <li className='hover:text-orange-500 duration-500'>Contact us</li>
            <li className='hover:text-orange-500 duration-500'>Campus map</li>
            <li className='hover:text-orange-500 duration-500'>People</li>
            <li className='hover:text-orange-500 duration-500'>FAQs</li>
            <li className='hover:text-orange-500 duration-500'>Offices</li>
            <li className='hover:text-orange-500 duration-500'>Rankings</li>
            <li className='hover:text-orange-500 duration-500'>Community services</li>
            <li className='hover:text-orange-500 duration-500'>Site map</li>
            <li className='hover:text-orange-500 duration-500'>Events</li>
        </ul>
        </div>

            </div>

            
        </div>

    {/* <div className='w-100 h-1 border-b-4 border-white rounded-2xl mt-10 pb-10'></div> */}


        </footer>
        


  )
}

export default Footer