import React from 'react'

const Contactform = () => {
  return (
    <div className="mx-auto w-full max-w-md space-y-6 rounded-lg  bg-[#140c1c] border border-[#8750f7] bg-card p-6 text-white shadow-sm">
        <form className="flex flex-col">
            <div className='mb-6'>
                <label htmlFor="Name"
                className="text-white block mb-2 text-sm font-medium">Name</label>
                <input type="text" name="name" id="name" required
                className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Name"/>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                rows={7}
                name="message"
                id="message"
                className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#8750f7] to-[#e9e6e6] hover:bg-gradient-to-l focus:ring-4 focus:outline-none transition-all duration-300 text-white font-medium py-2.5 px-2 rounded-lg "
            >
              Send Message
            </button>
          </form>
    </div>
  )
}

export default Contactform