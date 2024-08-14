import React from 'react'
import AboutCard from './ui/aboutCard'
const AboutSection = () => {
    return (
        <section id='about' className='relative flex items-center justify-center size-full  py-[50px] about-section'>
            <div className='relative font-3 max-lg:px-[40px] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] h-full'>
                <h1 className=' uppercase font-bold text-3xl'>What we offer</h1>
                <div className='flex flex-col gap-[100px] mt-[50px]'>
                    <AboutCard position='left' imageUrl='/images/preview/review2.jpg' />
                    <AboutCard position='right' imageUrl='/images/preview/review1.jpg'  />
                    <AboutCard position='left' imageUrl='/images/preview/review3.jpg' />
                </div>
            </div>
        </section>
    )
}

export default AboutSection