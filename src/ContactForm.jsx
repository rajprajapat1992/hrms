import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Service Name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().required('Phone Number is required'),
    message: Yup.string().required('Message is required'),
});
const handleSubmit = (values) => {
    console.log(values)
}

const ContactUs = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className=' w-full sm:w-96' >
                <button
                    type="button"
                    className="absolute top-2 right-2 text-white hover:text-gray-900"
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='w-full px-5 border-2 pt-5 bg-gray-600 rounded-xl'>
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
                                    <div className=" mb-1">
                                        <div className='mb-1'>
                                            <label className='text-xs text-white ms-3'>
                                                Name : <sup className='text-red-600'>*</sup>
                                            </label>
                                        </div>
                                        <div className=''>
                                            <Field className='outline-none rounded-lg py-1 ps-1 w-full' name="name" type='text' min='0' />
                                            <ErrorMessage name="name" component="div" className="text-red-600 text-xs" />
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <div className='mb-1'>
                                            <label className='text-xs text-white ms-3'>
                                                Email : <sup className='text-red-600'>*</sup>
                                            </label>
                                        </div>
                                        <div className=''>
                                            <Field className='outline-none rounded-lg py-1 ps-1 w-full' name="email" type='text' min='0' />
                                            <ErrorMessage name="email" component="div" className="text-red-600 text-xs" />
                                        </div>
                                    </div>
                                    <div className=" mb-1">
                                        <div className='mb-1'>
                                            <label className='text-xs text-white ms-3'>
                                                Phone : <sup className='text-red-600'>*</sup>
                                            </label>
                                        </div>
                                        <div className=''>
                                            <Field className=' outline-none rounded-lg py-1 ps-1 w-full' name="phone" type='text' min='0' />
                                            <ErrorMessage name="phone" component="div" className="text-red-600 text-xs" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full mb-2">
                                    <div className='ms-1'>
                                        <label className='text-xs text-white ms-3'>
                                            Message : <sup className='text-red-600'>*</sup>
                                        </label>
                                    </div>
                                    <div className=''>
                                        <Field className=' outline-none h-24 rounded-lg py-1 ps-3 w-full' name="message" type='text' as='textarea' min='0' placeholder='Submit Your Query' />
                                        <ErrorMessage name="message" component="div" className="text-red-600 text-xs" />
                                    </div>
                                </div>
                                <center>
                                    <button type='submit' className='register_ca_profile my-1 border-2 border-[#E33C5C] text-white shadow-black shadow-md shadow-inner hover:bg-[#E33C5C] hover:text-white text-sm font-semibold py-2 px-8 rounded-2xl mb-5'>
                                        Submit
                                    </button>
                                </center>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default ContactUs
