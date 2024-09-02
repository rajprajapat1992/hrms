import React from 'react'
import Header from './Header'
import Content from './Content'
import WhatCanDo from './WhatCanDo'
import ContactUs from './ContactUs'
import Footer from './Footer'
import ContactForm from './ContactForm'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContact = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContactFormOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
      <Content />
      <WhatCanDo />
      <ContactUs />
      <Footer />
      <div className=' fixed right-10 bottom-10'>
        {!isContactFormOpen && (
          <button className=' text-base font-semibold border-2 border-rose-300 shadow-black shadow-inner py-2 px-5 rounded-2xl bg-[#E33C5C] hover:bg-white hover:text-[#E33C5C] text-white active:scale-90 transition-all' onClick={handleContact}>Contact us</button>
        )}
        <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
      </div>
    </>
  )
}

export default Home
