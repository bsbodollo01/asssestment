import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'

const Header = () => {
  let modal = false
  const handlePopup = () => {
    modal = true
  }

  <ContactForm modalOpen={modal} />
  return (
    <div className='w-full h-10 bg-[#003C82] place-items-center lg:block hidden'>
        <ul className='w-[80vw] flex gap-x-14 xl:gap-x-24 justify-start mx-auto place-items-center'>
            <li className='font-semibold text-[#FAA41D]'><Link href="/landing_page">Tentang OLE777</Link></li>
            <li className='hover:text-[#Faa41F]'><Link href="">Komisi</Link></li>
            <li className='hover:text-[#Faa41F]'><Link href="">Peraturan</Link></li>
            <li className='hover:text-[#Faa41F]'><Link href="">Pertanyaan & Jawaban</Link></li>
            <li className='bg-[#Faa41F] text-[#001E5A] text-base font-semibold my-1 py-1 px-4 rounded-sm'> <button onClick={handlePopup}>OLE777 Official</button></li>
        </ul>
    </div>
  )
}

export default Header