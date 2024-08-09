// import { images } from '@/constants'
// import React, { useEffect } from 'react'
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { CustomEase } from 'gsap/CustomEase';

// const View = () => {

//     return (
//         <section className=' w-full h-full bg-blue-1 text-white'>
//             <div className='container border-8 w-[100vw] h-[100vh] relative  overflow-hidden '>
//                 <div className=' border-8 border-green-1 slider relative top-[15vh] size-full overflow-hidden perspective '>
//                     {images.map((image) => (
//                         <div className='border-8 border-red-500 card absolute top-[20%] left-[10%] w-[80%] h-[650px] rounded-[10px] overflow-hidden transform transform-3d '>
//                             <Image
//                                 className='size-full object-cover absolute '
//                                 src={image.imgUrl}
//                                 width={2000}
//                                 height={2000}
//                                 alt='image'
//                             />
//                             <div className=' border-8 w-full copy absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] clip-path' >
//                                 <h1 className='relative text-center text-4xl font-extrabold uppercase'>Representation</h1>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default View
'use client'





import React, { useEffect } from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const ViewSection = () => {

    function splitTextIntoSpans(selector:any) {
        let elements = document.querySelectorAll(selector);
        
        elements.forEach((element) => {
            let text = element.innerText;
            let splitText = text
                .split("")
                .map(function (char:any) {
                    return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
                })
                .join("");
            element.innerHTML = splitText;
        });

        // console.log(elements);
    }

    function initializeCards() {
        let cards = Array.from(document.querySelectorAll(".card"));
        // console.log(cards)
        gsap.to(cards, {
            y: (i) => -10 + 10 * i + '%',
            z: (i) => 10 * i,
            duration: 1,
            ease: "cubic",
            stagger: -0.1,
        });
    }
    let isAnimating = false;
    useEffect(() => {
        CustomEase.create('cubic', '0.83, 0, 0.17, 1');

            splitTextIntoSpans(".copy h1");
            initializeCards();

            gsap.set("h1 span", { y: -200 });
            gsap.set(".slider .card:last-child h1 span", { y: 0 });


    }, []);

    function handleClick () {
        if (isAnimating) return;
        // isAnimating = true;

        let slider = document.querySelector(".slider");
        if(!slider)return
        let cards = Array.from(slider.querySelectorAll(".card"));
        let lastCard = cards.pop();
        if(!lastCard)return
        let nextCard = cards[cards.length - 1];

        gsap.to(lastCard.querySelectorAll("h1 span"), {
            y: 200,
            duration: 0.75,
            ease: 'cubic',
        });

        gsap.to(lastCard, {
            y: '+=150%',
            duration: 0.75,
            ease: 'cubic',
            onComplete: () => {
                slider.prepend(lastCard);
                initializeCards();
                gsap.set(lastCard.querySelectorAll('h1 span'), { y: -200 });
                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            }
        });

        gsap.to(nextCard.querySelectorAll('h1 span'), {
            y: 0,
            duration: 1,
            ease: 'cubic',
            stagger: 0.05,
        });
    }

    return (
        <section className=' relative w-full h-[100vh] bg-blue-1 text-white  '>
            <div className=' container w-[100vw] h-[100vh] relative overflow-hidden z-50 '>
                <div className=' slider relative top-[5vh]  size-full overflow-hidden  perspective'>
                    {images.map((image, index:any) => (
                        <div key={index}  className='card absolute top-[15%] left-[10%] w-[80%] h-[650px] rounded-[10px] overflow-hidden transform transform-3d bg-black'>
                            <Image
                            onClick={handleClick}
                                className='size-full object-cover opacity-[0.8]'
                                src={image.imgUrl}
                                width={1000}
                                height={1000}
                                alt='image'
                            />
                            <div className=' w-full copy absolute top-[40%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] clip-path'>
                                <h1 className='relative text-center text-4xl max-sm:text-xl font-extrabold uppercase'>Representation</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute w-full h-full top-0 lines'></div>
            <div className='absolute w-full h-[50%] top-0 gradient'></div>
        </section>
    );
};

export default ViewSection;
