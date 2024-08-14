'use client'
import React, { useState } from 'react';
import { Button } from './button';
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast"

const Form = () => {
    const { toast } = useToast()
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        if (firstName === '' || lastName === '' || email === '' || message === '') {
            toast({
                title: "Fill Details Properly",
                variant: "destructive"
            })
            return;
        }
        e.preventDefault();
        setLoading(true);

        const serviceId = 'service_2xfovto';
        const templateId = 'template_zi8774a';
        const publicId = 'I4Aqmfw59JoqGl9GA';

        const templateParams = {
            from_name: firstName + ' ' + lastName,
            from_email: email,
            to_name: 'Dunagiri HomeStay',
            message: message
        }
        toast({
            title: "SENDING EMAIL...",
        })

        // EmailJS send email function
        emailjs.send(serviceId, templateId, templateParams, publicId)
            .then((response) => {
                setFirstName('');
                setLastName('');
                setMessage('');
                setEmail('');
                toast({
                    title: "EMAIL SENT...",
                })
                setLoading(false);
            })
            .catch((err) => {
                toast({
                    title: "Error Sending Email...",
                    variant: "destructive"
                })
                setLoading(false);
            });
    };
    return (
        <div className='contactForm absolute py-[70px] px-[50px]
        pl-[250px]  ml-[150px] h-full bg-white w-custom'>
            <h1 className='font-3 text-4xl font-bold'> Send a message</h1>
            <form className=' font-3 border-black mt-[30px] relative flex justify-between flex-wrap h-full ' >
                <div className='inputBox relative mb-[40px]  w50 w-[47%]  max-sm:w-[100%]'>
                    <input
                        className='w-full text-2xl  border-b-[1px]  outline-none py-[5px]'
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <span className='labels font-3 '>First Name</span>
                </div>

                <div className='inputBox relative w50  mb-[40px]  max-sm:w-[100%]'>
                    <input
                        className='w-full outline-none text-2xl py-[5px]  border-b-[1px] text-slate-700'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <span className=' labels font-3'>Last Name:</span>
                </div>
                <div className='inputBox w100  mb-[40px]   w-[100%]'>
                    <input
                        className='w-full outline-none text-2xl py-[5px]  border-b-[1px] '
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span className=' labels font-3'>Email:</span>
                </div>
                <div className='w-full  mb-[40px]'>

                    <textarea
                        className=' py-[5px] max-sm:h-[120px] h-[180px] text-2xl outline-none  border-b-2  w-full resize-none'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <span className='labels'>Message:</span>
                </div>
                <Button onClick={handleSubmit} className='mt-50px bg-black text-white font-3 text-xl px-10' > send</Button>
            </form>
        </div>
    )
}

export default Form;