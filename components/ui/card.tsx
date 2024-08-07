import { Star } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'
import { cn } from "@/lib/utils"
import localFont from 'next/font/local'

const gambetta = localFont({ src: '/fonts/Gambetta-Regular.woff' })

const Gambetta = gambetta({
    variable: '--font-gambetta',
  })


interface Props {
    className?: string; // Optional className prop
  }

const Card:FC<Props> = ({className , ...props}) => {
    return (
        <div className={cn(`rounded-sm border p-[20px] h-[250px] w-[500px] text-black bg-white overflow-hidden shadow1 ${gambetta.className} `,className)}>
            <div className='  w-full items-center flex justify-between '>

                <div className='flex items-center w-[50px] h-[50px]  rounded-[100%] overflow-hidden'>

                    <Image
                        className=' size-full object-cover '
                        src='/images/mountain3.jpg'
                        width={200}
                        height={200}
                        alt='image'
                    />
                </div>
                <h1 className=' -ml-9 w-[200px]'> Name</h1>
                <div>

                    <div className='flex'>

                        <Star className=' size-5 border-none fill-golden-1 ' color='#ffcf40' width={10} height={10} />
                        <Star className=' size-5 border-none fill-golden-1 ' color='#ffcf40' width={10} height={10} />
                        <Star className=' size-5 border-none fill-golden-1 ' color='#ffcf40' width={10} height={10} />
                        <Star className=' size-5 border-none fill-golden-1 ' color='#ffcf40' width={10} height={10} />
                        <Star className=' size-5 border-none fill-golden-1 ' color='#ffcf40' width={10} height={10} />

                    </div>
                    <p> 20 days ago</p>
                </div>
            </div>
            <div className=' mt-[20px] w-full h-[100px] overflow-hidden'>

                <p className=' text-wrap truncate '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet turpis lacinia, laoreet ligula eu, laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec pulvinar sem. Vivamus ac ullamcorper magna, quis tempor elit.
                </p>
            </div>

        </div>
    )
}

export default Card