import React from 'react'

function About() {
return (
    
    <>
    <div className="bg-[url('https://uol.edu.pk/wp-content/uploads/2025/08/2U7A5019-scaled-1.webp')] h-[88vh] bg-no-repeat bg-fixed bg-cover bg-black/100 relative">

        <h2 className='text-white text-8xl absolute bottom-1 left-8 font-serif'>About</h2>
</div>

<div className='px-10 py-12'>
    <p className='text-xl font-serif'>The University of Lahore is among the leading private-sector universities in Pakistan, offering world-class education across diverse faculties and departments. Recognised by the HEC with its highest “W4” category, its purpose-built campuses house state-of-the-art facilities, producing skilled graduates since 1999. With a student body of over 30,000 and an alumni network exceeding 84,000, UOL has a strong presence in academia and industry. Its vibrant campus brings together students from diverse national and international backgrounds, creating a rich multicultural learning environment.</p>
</div>

<div className='bg-gray-300 mx-10 flex mb-10'>

    <div className='flex flex-col px-10 py-10'>
    <h2 className='text-4xl font-serif'>Founder’s philosophy</h2>
    <div className='w-38 h-1 border-b-4 border-gray-500 rounded-2xl mt-1.5'></div>

    <p className='text-lg font-serif mt-4'>“As we shape the future, we aim to provide our students with the tools to excel and make a meaningful impact. At The University of Lahore, education is the foundation for sustainable development, and it is our mission to equip every student with the knowledge and skills to lead with integrity and innovation.”
    </p>

    <p className='mt-6 text-2xl font-serif'>M.A. Raoof (Late)</p>
    <p className='mt-1 text-lg font-serif'>Patron-in-Chief</p>

    </div>

    <img className='h-[55vh]' src="https://uol.edu.pk/wp-content/uploads/2025/08/file-3.webp" alt="picture" />

</div>


</>
)
}

export default About