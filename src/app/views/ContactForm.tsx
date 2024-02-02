import React from 'react'

const ContactForm = ({modalOpen}) => {
  return (
    <div className={`${modalOpen ? "block" : "hidden"}`}>
      <div className="relative z-10">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end sm:items-center justify-center min-h-full text-center sm:p-0 p-2">
                    <div className="max-w-screen-lg bg-white flex flex-col justify-center items-center rounded-lg gap-y-5 p-10">
                         <form action="">
                            <input type="text" placeholder='Fullname' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='subject' />
                            <textarea type="text" name="" id="" cols="30" rows="10"></textarea>
                          </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm