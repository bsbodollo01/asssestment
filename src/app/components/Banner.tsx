import React from 'react'

const Banner = ({globalData}) => {
  return (
    <a className='w-full bg-primary-color flex justify-center' href={globalData.download_app?.img}>
        <img src={globalData.download_app?.link} className='w-auto h-auto' alt="" />
    </a>
  )
}

export default Banner