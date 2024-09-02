import React from 'react'
import hrms_1 from './assets/Images/hrms1.png'
import hrms_2 from './assets/Images/hrms2.jpg'
import hrms_3 from './assets/Images/hrms3.png'
import hrms_4 from './assets/Images/hrms4.png'
import hrms_5 from './assets/Images/hrms5.png'
import hrms_6 from './assets/Images/hrms6.png'
import hrms_7 from './assets/Images/hrms7.png'
import hrms_8 from './assets/Images/hrms8.png'
import hrms_9 from './assets/Images/hrms9.png'
import hrms_10 from './assets/Images/hrms10.png'


const WhatCanDo = () => {
    return (
        <>
            <div className=' px-24 pt-10'>
                <center>
                    <p className='text-2xl font-semibold'>What <span className=' bg-[#BAC8D6] rounded-md px-2 text-[#004999] font-bold'>HRMS</span> Can Do For You!!</p>
                    <p className=' text-lg my-2'>One Platform Multiple Functionalities</p>
                    <div className=' h-2 bg-[#004999] rounded-md w-1/4'></div>
                </center>
                <div className='mt-10 mx-16'>
                    <div className=' w-full flex'>
                        <div className='w-1/2'>
                            <img className=' h-56' alt='hrms' src={hrms_1} />
                        </div>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>1. <span className='ms-5'>Attendance Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Terminates manual entry, which eases out time tracking of entrance and provides valuable workforce insights.
                            </p>
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>2. <span className='ms-5'>Payroll Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Automates calculations regarding payrolls which enhances accuracy and gives HR a scope of strategic functioning.</p>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <img className=' h-56' alt='hrms' src={hrms_2} />
                        </div>
                    </div>

                    <div className=' w-full flex'>
                        <div className='w-1/2'>
                            <img className=' h-56' alt='hrms' src={hrms_3} />
                        </div>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>3. <span className='ms-5'>Performance Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Assists in setting clear objectives to gain important feedback and empowers the workforce with an effective performance evaluation mechanism.</p>
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>4. <span className='ms-5'>Project Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>A centralized platform that assigns projects , tasks, follows up on the progress to encourage collaborations, and checks accountability.</p>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <img className=' h-56' alt='hrms' src={hrms_4} />
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2'>
                            <img className=' h-56' alt='hrms' src={hrms_5} />
                        </div>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>5. <span className='ms-5'>Dashboard Analytics:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Make data-driven decisions with real-time insights about essential human capital metrics and thrive the workforce.</p>
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>6. <span className='ms-5'>Reports Formation:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Customized reports generation at your fingertips in minimum time. Also, provide important data for strategic assignments.</p>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <img className=' h-56' alt='hrms' src={hrms_6} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#E33C5C] rounded-t-3xl py-10'>
                <div className='px-24 mx-16 text-white'>
                    <div className=' w-full flex'>
                        <div className='w-1/2'>
                            <img className=' h-56' alt='hrms' src={hrms_10} />
                        </div>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>7. <span className='ms-5'>Leave Tracking:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Streamline the process of leave requests and approvals to get rid of unnecessary management burdens.</p>
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>8. <span className='ms-5'>Documents Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Seamless organization of employees’ important documents with easy accessibility features for desired stakeholders.</p>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <img className=' h-56' alt='hrms' src={hrms_9} />
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2'>
                            <img className=' h-56' alt='hrms' src={hrms_8} />
                        </div>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>9. <span className='ms-5'>Role-Based Access:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Regulation of user access with customized permission features to restrict the breaching of any sensitive information.</p>
                        </div>
                    </div>
                    <div className=' w-full flex'>
                        <div className='w-1/2 mt-5'>
                            <p className=' text-2xl font-semibold'>10. <span className='ms-5'>Holiday and Birthday Management:</span></p>
                            <p className='w-3/4 ms-10 text-lg'>Automates tracking of important dates like birthdays and holidays to maintain a cheerful work environment.</p>
                        </div>
                        <div className='w-1/2 flex justify-end'>
                            <img className=' h-56' alt='hrms' src={hrms_7} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatCanDo
