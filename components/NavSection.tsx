'use client'
import Link from 'next/link';
import MobileNav from './MobileNav';

const NavSection = () => {
 

    return (
        <section className={` glassmorphism z-[9999] border-b-[1px] border-newWhite-1 fixed top-0 h-[60px] text-white   items-center text-xl font-3 font-extrabold w-full flex mix-blend-difference px-[80px]  max-md:px-[20px] tracking-wider`}>
            <h1 className=''>Dunagiri Home Stay</h1>
            <div className='hidden  max-sm:gap-5 text-lg gap-10 ml-auto  md:flex'>
                <Link href='#contact'>
                    <h1 className='uppercase '>Contact Us</h1>
                </Link>
                <Link href='#reviews'>
                    <h1 className='uppercase '>Reviews</h1>
                </Link>
                <Link href='#about'>
                    <h1 className='uppercase '>About Us</h1>
                </Link>
            </div>
            <MobileNav/>
        </section>
    );
};

export default NavSection;
