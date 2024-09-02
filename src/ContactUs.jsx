import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const validationSchema = Yup.object({
    name: Yup.string().required('Service Name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    message: Yup.string().required('Message is required'),
});
const handleSubmit = (values) => {
    console.log(values)
}

const ContactUs = () => {
    return (
        <>
            <div className='h-full bg-gray-200'>
                <div className=' min-h-2/5 bg-gradient-to-r from-purple-500 to-pink-500' id='contact-us'>
                    <p className=' text-4xl md:text-5xl text-white text-center py-16'>Contact us</p>
                </div>
                <div className='block md:flex p-5' >
                    <div className='p-5 sm:p-5 w-full md:w-3/5'>
                        <p className='text-4xl md:text-5xl font-semibold text-pink-600 font-serif'>Feel free to Contact us.</p>
                        <p className=' text-3xl md:text-4xl font-semibold mt-5 font-sans'>Our Experts are always Ready to Help you.</p>
                    </div>
                    <div className='w-full md:w-2/3 md:ms-20 px-10 lg:px-24 border-2 py-10 bg-gray-600 rounded-3xl'>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                message: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ setFieldValue, values }) => (
                                <Form>
                                    <div className=''>
                                        <div className=" mb-3">
                                            <div className=' mb-1'>
                                                <label className='text-md text-white font-semibold ms-3'>
                                                    Name:<sup className='text-red-600'>*</sup>
                                                </label>
                                            </div>
                                            <div className=''>
                                                <Field className='outline-none rounded-lg py-1 ps-1 w-full' name="name" type='text' min='0' />
                                                <ErrorMessage name="name" component="div" className="text-red-600 text-xs" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className='mb-1'>
                                                <label className='text-md text-white font-semibold ms-3'>
                                                    Email:<sup className='text-red-600'>*</sup>
                                                </label>
                                            </div>
                                            <div className=''>
                                                <Field className='outline-none rounded-lg py-1 ps-1 w-full' name="email" type='text' min='0' />
                                                <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
                                            </div>
                                        </div>
                                        <div className=" mb-3">
                                            <div className='mb-1'>
                                                <label className='text-md text-white font-semibold ms-3'>
                                                    Phone:<sup className='text-red-600'>*</sup>
                                                </label>
                                            </div>
                                            <div className=''>
                                                <Field className=' outline-none rounded-lg py-1 ps-1 w-full' name="phone" type='text' min='0' />
                                                <ErrorMessage name="phone" component="div" className="text-red-600 text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" w-full mb-2 md:mb-5">
                                        <div className='mb-1'>
                                            <label className='text-md text-white font-semibold ms-3'>
                                                Message:<sup className='text-red-600'>*</sup>
                                            </label>
                                        </div>
                                        <div className=''>
                                            <Field className=' outline-none h-24 rounded-lg py-1 ps-3 w-full' name="message" type='text' as='textarea' min='0' placeholder='Submit Your Query' />
                                            <ErrorMessage name="message" component="div" className="text-red-600 text-xs" />
                                        </div>
                                    </div>
                                    <center>
                                        <button type='submit' className='register_ca_profile my-3 border-2 bg-white border-[#E33C5C] hover:bg-[#E33C5C] shadow-black shadow-md hover:text-white  text-[#E33C5C] text-xl py-2 px-10 rounded-2xl mb-5 font-semibold'>
                                            Submit
                                        </button>
                                    </center>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ContactUs
