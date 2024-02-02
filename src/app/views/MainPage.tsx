'use client';
import React from 'react'
import Button from '../components/Button'
import Banner from '../components/Banner'
import Footer from '../views/Footer'
import Slideshow from '../components/Slideshow';

const MainPage = ({homepageData, globalData, komisiData}) => {
  return (
    <div className='w-full h-[300px] bg-blue-600'>
        <div className='w-[80vw] h-full flex gap-x-24 mx-auto justify-between'>
            <div className='space-y-2 pt-10'>
                <h1 className='uppercase text-4xl tracking-wider font-medium'>50% Instant Komisi Afiliasi</h1>
                <h2 className='uppercase text-3xl tracking-wider font-medium'>Tambah Pengasilan Anda,<br /> Passive Income Menggiurkan!</h2>
                <Button text="Daftar Sekarang" addedClass='bg-secondary-color py-2 px-3' textClass='text-sm font-semibold'></Button>
            </div>
        </div>
        <div className='w-[80vw] grid grid-cols-3 gap-x-5 mx-auto bg-white py-14'>
            {homepageData.offers ? (
                homepageData.offers.map((item) => (
                    <div className='w-full h-full'>
                        <img src={item.img} className='rounded-md' alt="" />
                    </div>
                ))
            ) : "" }

        </div>
        <div className='w-[80vw] h-auto mx-auto'>
            <div dangerouslySetInnerHTML={{ __html: homepageData.content }} className='text-gray-text-color' />
        </div>
        <div className='w-[80vw] mx-auto grid grid-cols-4 justify-center place-items-center pt-10'>
            {homepageData.services ? (
                homepageData.services.map((item) => (
                    <div className="w-full flex flex-col justify-center text-center place-items-center gap-y-5 p-10">
                        <img src={item.img} alt="" />
                        <h1 className='text-[#00276C] text-2xl font-semibold'>{item.title}</h1>
                        <p className='text-black'>{item.description}</p>
                    </div>
                ))
            ): ""}
        </div>
        <div className='w-[80vw] mx-auto'>
            <Banner globalData={globalData}/>
        </div>
        <div className='w-[80vw] mx-auto'>
            <Slideshow homepageData={homepageData} />
        </div>
        <div className='w-[80vw] mx-auto'>
            <Footer komisiData={komisiData} />
        </div>
    </div>
  )
}

export default MainPage