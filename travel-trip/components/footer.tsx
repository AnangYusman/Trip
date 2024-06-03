"use client"
import { Image } from '@nextui-org/react'
import React from 'react'
import { MailIcon, MapsIcon, PhoneIcon } from './icons'

const Footer = () => {

    return (
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col ml-5'>
                <p className='dark:text-white text-black text-base font-serif font-bold'>ABOUT US</p>
                <div className='flex flex-row items-center'>
                    <Image
                        width={80}
                        alt="ThumbnailImg"
                        src="/bajocrew.png"
                    />
                    <p className='dark:text-black text-white ml-3 w-[300px] text-justify font-serif'>Our team has over 9 years of experience and part of IndonesiaJuara Trip—winners of the 2023 Travelers' Choice Award on TripAdvisor</p>
                </div>
                <p className='dark:text-white text-black  text-base font-serif mt-3 font-bold '>OFFICIAL ADDRESS</p>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <MapsIcon />
                    </div>
                    <p className='dark:text-black text-white  w-[350px] text-justify ml-3 font-serif'>Jl. Gabriel Gampur - Labuan Bajo, Flores - NTT</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <PhoneIcon />
                    </div>
                    <p className='dark:text-black text-white  w-[300px] text-justify ml-3 font-serif'>Contact Us : 081236798078</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <MailIcon />
                    </div>
                    <p className='dark:text-black text-white  w-[300px] text-justify ml-3 font-serif'>Email : admin@bajocrewtour.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
