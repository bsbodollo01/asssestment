import React from 'react'

const Banner = ({globalData}) => {
  return (
    <a className='w-full bg-primary-color flex justify-center' href={globalData ? globalData.download_app : ""}>
        <img src={globalData ? globalData.download_app : ""} className='w-auto h-auto' alt="" />
    </a>
  )
}

export default Banner