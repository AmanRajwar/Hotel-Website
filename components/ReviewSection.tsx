import React from 'react'
import Form from './ui/form'
import { Button } from './ui/button'
import Card from './ui/card'

const ReviewSection = () => {
  return (
    <section className=' gradient1 flex max-xl:flex-col gap-[30px] justify-between items-center  w-full h-[100vh] bg-gray-1 overflow-hidden xl:items-center xl:flex px-[40px]' >
      <div className='   max-xl:mt-[100px] lg:ml-[50px] 2xl:ml-[100px] max-sm:w-[380px] sm:w-[490px]  md:w-[610px] 2xl:w-[725px] text-white  shadow2 mt-[50px] overflow-hidden'>
        <h1 className=' mb-[20px] max-sm:text-4xl max-sm:mb-[5px] sm:text-5xl md:text-6xl  font-3 lg:text-5xl 2xl:text-7xl  font-extrabold uppercase'>What our guests </h1>
        <h1 className='font-3  lg:text-5xl 2xl:text-7xl max-sm:text-4xl sm:text-5xl md:text-6xl text-7xl font-extrabold uppercase '>think about us.</h1>
        <p className="mt-[30px] max-sm:mt-[15px] max-sm:mb-5  font-3  tracking-widest font-light mb-10 max-sm:text-sm  text-slate-100  ">
          Guests consistently praise our home stay for its exceptional comfort, stunning panoramic views, and warm hospitality, making it a favorite retreat for nature lovers and adventurers alike.
        </p>
        <Button className='bg-white shadow-2xl max-sm:ml-[30%] '>
          <h1 className='text-black font-3 font-extrabold text-lg'>More Reviews</h1>
        </Button>

      </div>
      <div className='  max-xl:mb-[80px] xl:mr-[50px]  2xl:mr-[100px] flex gap-4 xl:gap-10 xl:flex-col justify-center items-center xl:items-end h-[42%] xl:h-full p-[20px] max-xl:w-full overflow-hidden'>
        <Card className='flex-none' />
        <Card className='2xl:mr-[100px] xl:mr-[50px] flex-none active ' />
        <Card className='flex-none' />
      </div>
    </section>
  )
}

export default ReviewSection