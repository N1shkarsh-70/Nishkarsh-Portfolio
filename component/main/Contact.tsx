import React from 'react'
import ContactForm from '../sub/Contactform'
import ContactText from '../sub/ContactText'


const Contact = () => {
  return (
    <div>
      <ContactText/>
      <div className="container flex items-center justify-center max-w-4xl  md:py-16 lg:py-16 m-auto ">
        <div className="grid gap-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold font-large tracking-tighter text-transparent my-[10px] bg-clip-text text-center bg-gradient-to-r from-[#8750f7] to-[#dddddd] cursor-pointer sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
        <ContactForm/>  
        </div>
      </div>
    </div>
  )
}

export default Contact