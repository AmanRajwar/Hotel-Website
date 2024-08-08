import React from 'react'
import AboutCard from './ui/aboutCard'
const AboutSection = () => {
    return (
        <section className='flex items-center justify-center size-full  py-[50px]'>
            <div className='relative font-3 max-lg:px-[40px] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] h-full'>
                <h1 className=' uppercase font-bold text-3xl'>What we offer</h1>
                <div className='flex flex-col gap-[100px] mt-[50px]'>
                    <AboutCard position='left' />
                    <AboutCard position='right' />
                    <AboutCard position='left' />
                </div>
            </div>
        </section>
    )
}

export default AboutSection