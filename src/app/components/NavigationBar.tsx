'use client';
import React from 'react'
import Button from './Button'

const NavigationBar = ({globalData}) => {
  return (
    <div className='w-full h-20 bg-primary-color flex justify-center'>
        <div className='w-[80vw] flex place-items-center justify-between'>
            <img src={globalData ? globalData.logo : ""} alt=""/>
            <div className='space-x-2 lg:block hidden'>
                <Button text='Login' addedClass='bg-gray-background-color p-2' textClass='text-md'/>
                <Button text='Daftar sekarang' addedClass='bg-secondary-color p-2' textClass='text-md' />
            </div>
            <div className='lg:hidden block'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
              </div>
        </div>
    </div>
  )
}

export default NavigationBar