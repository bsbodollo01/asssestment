import React from 'react'

const Footer = ({komisiData}) => {
  console.log(komisiData);
  return (
    <div className='w-full h-10 bg-[#003C82] flex place-items-center'>
        <ul className='w-[80vw] flex gap-x-24 justify-start mx-auto place-items-center'>
            <li className='bg-[#Faa41F] text-[#001E5A] text-base font-semibold py-1 px-4 rounded-sm'>OLE777 Official</li>
        </ul>
    </div>  )
}

export default Footer