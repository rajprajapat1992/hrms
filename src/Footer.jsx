import React from 'react'
import prilient from './assets/Images/Frame 1000007036.svg'

const Footer = () => {
    return (
        <>
            <div className='h-1/2 bg-black py-10 px-20'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="flex flex-shrink-0">
                        <img
                            alt="Your Company"
                            src={prilient}
                            className="h-10 w-auto"
                        />
                    </div>
                    <div className=' mb-10 lg:mb-0'>
                        <p className='text-xl text-white'>Our Services:</p>
                        <ul className='text-white text-base'>
                            <li>Attendace Management</li>
                            <li>Payroll Management</li>
                            <li>Performance Management</li>
                            <li>Project Management</li>
                            <li>Reports Formation</li>
                        </ul>
                    </div>
                    <div className=' mb-10 lg:mb-0'>
                        <p className='text-xl text-white'>Address:</p>
                        <ul className='text-white'>
                            <li>F-16, 1st Floor, Gautam Marg, Vaishali Nagar, Jaipur(Rajasthan) 302021</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center align-middle my-auto bg-gray-900'>
                <p className='text-white my-5 text-base'>Designed & Developed By <a href='https://prilient.com/' target='blank' className=' font-bold'>Prilient Technologies Pvt. Ltd.</a></p>
            </div>

        </>
    )
}

export default Footer