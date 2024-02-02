import React from 'react'
import LandingPage from '@/app/views/LandingPage'
import NavBar from '@/app/components/NavigationBar'
import Header from '@/app/views/Header';

const common_problems = () => {
  return (
    <main className="w-full flex flex-col items-center justify-between font-sans leading-relaxed">
       <NavBar />
        <Header />
        <LandingPage/>
    </main>
  )
}

export default common_problems