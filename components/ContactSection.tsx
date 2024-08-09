import { Map } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import Form from './ui/form';

const ContactSection = () => {

  return (
    <section className=' relative flex justify-center  items-center bg-black w-full  min-h-[90vh]  contact-section overflow-hidden'>


      <div className=' contactContainer relative min-w-[auto] w-[90%] min-h-[750px] flex z-50  '>

        <div className=' contactInfo z-10 absolute top-[40px] w-[350px] bg-black h-custom flex flex-col p-[40px] justify-around overflow-hidden'>
          <h1 className='text-white mb-[25px] font-3 font-extrabold text-2xl'>Contact Info</h1>

          <div className='mb-[20px] flex items-center'>
            <Image
              className=''
              src='/icons/location.svg'
              width={70}
              height={70}
              alt='image'
            />
            <p className='text-slate-200 font-3'>house- 53 , street- 5, govindpuram, Ghaziabad</p>
          </div>

          <div className='mb-[20px] flex items-center'>
            <Image
              className=''
              src='/icons/email.svg'
              width={70}
              height={70}
              alt='image'
            />
            <p className='text-slate-200 font-3 '>amanrajwar79@gmail.com</p>
          </div>

          <div className='mb-[20px] flex items-center'>
            <Image
              className=''
              src='/icons/phone.svg'
              width={70}
              height={70}
              alt='image'
            />
            <p className='text-slate-200 font-3'>+91 8287830432</p>
          </div>

        </div>
        <Form />
      </div>

    </section>
  )
}

export default ContactSection;





// <div className='flex  z-50 text-center items-center justify-center flex-col  '>

// <h1 className=" text-white  text-nowrap font-3 font-bold  text-2xl  max-sm:text-xl mb-5">
//   Where the Hills Feel Like Home!
// </h1>

// <p className="  text-center font-3  tracking-widest font-normal text-slate-300 mb-10 max-sm:text-sm w-[30%] border-b pb-6">
//   Experience the perfect blend of comfort and nature at our hillside homestay, where each stay offers serene tranquility, breathtaking views, and a warm, welcoming atmosphere that feels like a home away from home.
// </p>

// <div className='flex font-3 gap-[40px] text-slate-300'>
//   <p> +91 8287830432  </p>


//   <p>
//     amanrajwar79@gmail.com
//   </p>
// </div>
// </div>
// <div className='  ' >
// <h1 className=' font-3  '>
//   Send us mail
// </h1>
// </div>