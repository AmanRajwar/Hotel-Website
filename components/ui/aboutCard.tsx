import Image from 'next/image'
import React from 'react'
import { Star } from 'lucide-react'
import { Button } from './button'

interface Props {
    position?: string;
    imageUrl?: string; // Optional className prop
}

const AboutCard = ({ position,imageUrl }: Props) => {
    return (
        <div className=' relative flex h-[400px] '>
            <Image
                className={`w-[400px] h-[400px] object-cover right-0 ${position == 'right' ? 'absolute right-0' : ''} `}
                src='/images/mountain1.jpg'
                width={500}
                height={500}
                alt='image'
            />


            <div className={`  mt-[80px] flex flex-col ${position == 'right' ? 'absolute right-0 mr-[100px]' : ' ml-[100px]'}  `}>
                <div className=' flex flex-col '>

                    <h1 className=' text-3xl font-3 font-bold'> Aman Rajwar</h1>
                    <div className='flex gap-1'>
                        <Star className=' size-5 fill-black ' color='#fff' width={10} height={10} />
                        <Star className=' size-5 fill-black ' color='#fff' width={10} height={10} />
                        <Star className=' size-5 fill-black ' color='#fff' width={10} height={10} />
                        <Star className=' size-5 fill-black ' color='#fff' width={10} height={10} />
                        <Star className=' size-5 fill-black ' color='#fff' width={10} height={10} />
                    </div>
                </div>
                <div className={` mt-[20px]  overflow-hidden ${position=='right' ? 'w-[60%]' : '' } `}>
                    <p className='text-slate-600 text-wrap truncate '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet turpis lacinia, laoreet ligula eu, laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec pulvinar sem. Vivamus ac ullamcorper magna, quis tempor elit.
                    </p>
                    <Button className=' rounded-full px-6 py-5 mt-8 bg-white shadow-2xl  border border-black '>
                        <h1 className='text-black font-3 font-extrabold text-lg'>Add Review</h1>
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default AboutCard