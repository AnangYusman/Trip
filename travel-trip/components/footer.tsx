"use client"
import { Divider, Image } from '@nextui-org/react'
import React from 'react'
import { BoatIcon, DisclaimerIcon, MailIcon, MapsIcon, OpenShipIcon, PackagesIcon, PhoneIcon, PrivateShipIcon, ProvisionIcon } from './icons'

const Footer = () => {

    return (
        <div className='flex lg:flex-row flex-col justify-between items-center gap-3 mx-5'>
            <div className='flex flex-col  mt-5'>
                <div className='flex flex-col justify-start'>
                    <Image
                        width={80}
                        alt="ThumbnailImg"
                        src="/bajocrew.png"
                    />
                    <p className=' text-white ml-3 w-[300px] text-justify font-serif '>Our team has over 9 years of experience and part of IndonesiaJuara Trip—winners of the 2023 Travelers' Choice Award on TripAdvisor</p>
                    <Divider className='bg-white' />
                    <p className='text-white font-serif text-base mt-5 text-center '>Our Partners:</p>
                    <div className='flex flex-row items-center gap-2'>
                        <Image
                            width={100}
                            alt="ThumbnailImg"
                            src="/labuanproduction.png"
                            className='bg-white'

                        />
                        <Image
                            height={40}
                            alt="ThumbnailImg"
                            src="/indonesiajuara.png"
                            className='bg-white'
                        />

                        <Image
                            width={100}
                            alt="ThumbnailImg"
                            src="/logo.png"
                            className='bg-white'

                        />
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-3 '>
                <p className=' text-white text-base font-serif mt-3 font-bold '>OFFICIAL ADDRESS</p>
                <Divider className='bg-white' />
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <MapsIcon />
                    </div>
                    <p className=' text-white  w-[350px] text-justify ml-3 font-serif'>Jl. Gabriel Gampur - Labuan Bajo, Flores - NTT</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <PhoneIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Contact Us : 081236798078</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <MailIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Email : admin@bajocrewtour.com</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-white   text-base font-serif mt-3 font-bold '>SERVICES</p>
                <Divider className='bg-white' />
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <OpenShipIcon />
                    </div>
                    <p className=' text-white  w-[350px] text-justify ml-3 font-serif'>Open Trip</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <PrivateShipIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Private Charter</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <BoatIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Boat Charter</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-white  text-base font-serif mt-3 font-bold '>INFORMATION</p>
                <Divider className='bg-white' />
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <PackagesIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Tour Packages</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <DisclaimerIcon />
                    </div>
                    <p className=' text-white  w-[300px] text-justify ml-3 font-serif'>Disclaimer</p>
                </div>
                <div className='flex flex-row '>
                    <div className='pt-1 '>
                        <ProvisionIcon />
                    </div>
                    <p className=' text-white  w-[350px] text-justify ml-3 font-serif'>Syarat & Ketentuan</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
