'use client';
import React from 'react'
import Button from './Button'

const NavigationBar = ({globalData}) => {
  return (
    <div className='w-full h-20 bg-primary-color flex justify-center'>
        <div className='w-[80vw] flex place-items-center justify-between'>
            <img src={globalData ? globalData.logo : ""} alt=""/>
            <div className='space-x-2'>
                <Button text='Login' addedClass='bg-gray-background-color p-2' textClass='text-md'/>
                <Button text='Daftar sekarang' addedClass='bg-secondary-color p-2' textClass='text-md' />
            </div>
        </div>
    </div>
  )
}

export default NavigationBar