import React from 'react'
import Form from './ui/form'
import { Button } from './ui/button'
import Card from './ui/card'

const ReviewSection = () => {
  return (
    <section className='  gradient1 flex justify-between items-center w-full h-[100vh] bg-gray-1' >
      <div className=' ml-[100px] w-[725px] text-white '>
        <h1 className=' mb-[20px] font-3 text-7xl font-extrabold uppercase'>What our <span className='text-white'> guests </span> </h1>
        <h1 className='font-3 text-7xl font-extrabold uppercase '>think about us.</h1>
        <p className="mt-[30px] font-3  tracking-widest font-light mb-10 max-sm:text-sm text-slate-200">
          Guests consistently praise our home stay for its exceptional comfort, stunning panoramic views, and warm hospitality, making it a favorite retreat for nature lovers and adventurers alike.
        </p>
        <Button className='bg-white '>
          <h1 className='text-black font-3 font-extrabold text-lg'>More Reviews</h1>
        </Button>
      </div>
      <div className=' flex  flex-col justify-center items-center h-full w-1/2'>
        <Card className='mb-[40px] ml-[100px]' />
        <Card  className='mb-[40px]' />
        <Card className=' ml-[100px]' /> 
      </div>
    </section>
  )
}

export default ReviewSection