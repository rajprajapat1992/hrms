import React from 'react'
import hrms_image from './assets/Images/hrms_image.png'

const Content = () => {
    return (
        <>
            <div className='bg-[#FFFBF2] px-24 pt-28'>
                <div className='px-24'>
                    <p className=' text-center text-5xl font-semibold bg-gradient-to-r from-[#E33C5C] to-[#004999] bg-clip-text text-transparent '>A Masterpiece For Industrial Excellence</p>
                    <div className='px-24'>
                        <p className='text-center text-xl mx-20 my-5'>Experience Our best-in-class software solution designed and developed to simplify and centralize the HR process in your organization.</p>
                        <div className='flex justify-center'>
                        <button className='bg-[#004999] text-white font-semibold rounded-3xl px-16 py-2 shadow-md shadow-slate-900 border-[#004999] border-2 hover:bg-white hover:text-[#004999]'>Get Started</button>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='mt-5'>
                        <img className='h-96 w-3/5' alt='hrms' src={hrms_image} />
                    </div>
                </center>
            </div>
            <div className='bg-[#E33C5C] px-24 py-10'>
                <p className='text-center text-3xl text-white'>Unleash The Symphony of Work Management</p>
                <p className='text-center text-lg text-white'>Management of human resources is a fundamental requirement for enhancing employees’ productivity, managing hiring, and optimizing operations. HRMS is the solution for all of these requirements. 
                </p>
            </div>
        </>
    )
}

export default Content
