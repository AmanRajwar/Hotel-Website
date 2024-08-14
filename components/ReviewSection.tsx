'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button'
import Card from './ui/card'

const ReviewSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const currentIndex = useRef(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const scrollItems = () => {
      if (scrollContainer) {
        currentIndex.current = (currentIndex.current + 1) % items.length;
        setIndex(currentIndex.current)
        const child = scrollContainer.children[currentIndex.current] as HTMLDivElement;
        const scrollOffset = child.offsetWidth / 2;
        let offset: any;
        if (child.offsetWidth == 500) {
          offset = child.offsetLeft - 250;
        } else {
          offset = child.offsetLeft - 30;
        }
        scrollContainer.scrollTo({
          left: offset,
          behavior: 'smooth'
        });
      }
    };

    const intervalId = setInterval(scrollItems, 5000); // Scroll every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [items.length]);
  return (
    <section id='reviews' className='   relative w-full h-[110vh] gradient1 flex max-xl:flex-col gap-[30px] justify-between items-center overflow-hidden xl:items-center xl:flex ' >
      <div className='  w-full h-full absolute top-0 left-0'></div>
      <div className='max-xl:flex xl:ml-[50px] flex-col  items-center  z-50 max-sm:mt-[50px]  max-xl:mt-[100px]  2xl:ml-[100px] max-sm:w-[380px] sm:w-[590px]  md:w-[635px] xl:w-[635px] 2xl:w-[735px] text-white  shadow2 mt-[50px] overflow-hidden px-2'>
        <h1 className=' mb-[20px] max-sm:text-4xl max-sm:mb-[5px] sm:text-5xl md:text-6xl  font-3 lg:text-5xl xl:text-6xl 2xl:text-7xl  font-extrabold uppercase '>What our guests </h1>

        <h1 className='font-3 xl:text-6xl lg:text-5xl 2xl:text-7xl max-sm:text-4xl sm:text-5xl  md:text-6xl text-7xl font-extrabold uppercase '>think about us.</h1>

        <p className="mt-[30px] max-sm:mt-[15px] max-sm:mb-5  font-3  tracking-widest font-light mb-10 max-sm:text-sm  text-slate-100  ">
          Guests consistently praise our home stay for its exceptional comfort, stunning panoramic views, and warm hospitality, making it a favorite retreat for nature lovers and adventurers alike.
        </p>
        <div className='flex justify-around'>

          <Button className='bg-white shadow-2xl  '>
            <h1 className='text-black font-3 font-extrabold text-lg'>More Reviews</h1>
          </Button>
          <Button className=' ml-9 bg-white shadow-2xl '>
            <h1 className='text-black font-3 font-extrabold text-lg'>Add Review</h1>
          </Button>
        </div>

      </div>
      <div ref={scrollContainerRef} className='  overflow-auto w-[40%] max-sm:w-full max-sm:mb-[40px] max-xl:mb-[80px] xl:mr-[50px]  2xl:mr-[100px] flex gap-8 xl:gap-10 xl:flex-col xl:justify-center items-center xl:items-end h-[42%] xl:h-full px-[20px] max-xl:w-[94%] z-0  '>
        <Card className={`max-xl:ml-[20px] flex-shrink-0 transition-transform duration-1000 ease-in-out ${index == 0 ? 'active-card' : ''}`} />
        <Card className={` 2xl:mr-[100px] xl:mr-[50px] flex-shrink-0 transition transform duration-1000 ease-in-out   ${index == 1 ? 'active-card' : ''} `} />
        <Card className={` max-xl:mr-[20px] flex-shrink-0 transition-transform duration-1000  ease-in-out ${index == 2 ? 'active-card' : ' '}`} />
      </div>
    </section>
  )
}

export default ReviewSection