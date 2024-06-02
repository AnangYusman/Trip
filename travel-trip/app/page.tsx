"use client"

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { useState } from "react";

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const shipData = [
    {
      key: "1",
      imageUrl: "kapal1.jpeg",

    },
    {
      key: "2",
      imageUrl: "kapal2.jpeg",

    },
    {
      key: "3",
      imageUrl: "banner.jpeg",

    },
    {
      key: "4",
      imageUrl: "kapal1.jpeg",

    },
    {
      key: "5",
      imageUrl: "kapal2.jpeg",

    },
    {
      key: "6",
      imageUrl: "banner.jpeg",

    },
  ];

  const destination = [
    {
      key: "1",
      title: "Destination",
      name: "Padar Island",
      imageUrl: "padarisland.jpg",
    },
    {
      key: "2",
      title: "Destination",
      name: "Pink Beach",
      imageUrl: "pinkbeach.jpg",
    },
    {
      key: "3",
      title: "Destination",
      name: "Komodo Island",
      imageUrl: "komodo.jpg",
    },
    {
      key: "4",
      title: "Destination",
      name: "Manta Point",
      imageUrl: "mantapoint.jpg",
    },
    {
      key: "5",
      title: "Destination",
      name: "Kelor Island",
      imageUrl: "kelor.jpg",
    },
    {
      key: "6",
      title: "Destination",
      name: "Rangko cave",
      imageUrl: "rangko.jpg",
    }
  ]

  const packageTrip = [
    {
      key: '1',
      duration: 'Open Trip 1 Day',
      price: 'IDR 1.450.000/PERSON',
      description: 'visit 6 favorite destination in a day',
      imageUrl: 'kapal-1.png'
    },
    {
      key: '2',
      duration: 'Open Trip 2D1N REGULER',
      price: 'IDR 1.450.000/PERSON',
      description: 'Adventure with new friend',
      imageUrl: 'kapal-2.png'
    },
    {
      key: '3',
      duration: 'Open Trip 3D2N REGULER',
      price: 'IDR 1.450.000/PERSON',
      description: 'Adventure with new travel buddies',
      imageUrl: 'kapal-3.png'
    },
    {
      key: '4',
      duration: 'Open Trip 3D2N PREMIUM',
      price: 'IDR 1.450.000/PERSON',
      description: 'Adventure with premium boat',
      imageUrl: 'kapal-4.png'
    }
  ]
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Card isFooterBlurred className=" lg:w-full lg:h-[650px]  sm:col-span-7 mt-1 mx-3 ">
            <CardHeader className="absolute flex flex-col items-center justify-items-center top-1/2 ">
              <p className="text-2xl text-white font-serif uppercase font-bold">Sail Explore Dance</p>
              <h4 className="text-white/70 font-medium text-lg">With Raja Bintang Trip, you're settled. Never worry about a thing.</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover brightness-75"
              src="padar.jpg"
            />
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <p className="text-black text-xl lg:text-3xl font-serif  ">Trip with Raja Bintang Travel</p>
          <p className="text-tiny text-center">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
        </div>
        <div className="flex flex-col mt-3  justify-center items-center " >
          <div className='lg:w-[500px] w-[300px] h-auto '>
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={false}
              className="w-full">
              {shipData?.map((data: any) => (
                <SwiperSlide key={data.key}>
                  <Image className='relative object-cover' width={500} height={500} src={data.imageUrl} alt={` ${data.key}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-3 h-20 ">
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Thumbs]}
                className=""
              >
                {shipData?.map((data: any) => (
                  <SwiperSlide key={data.id}>
                    <Image className='relative object-cover ' height={100} width={100} src={data.imageUrl} alt={`Article ${data.key}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full px-3 mt-3">
            <p className="text-lg text-justify"><span className="font-bold text-yellow-700">Paket Trip Labuan Bajo 2024</span> adalah pilihan berwisata di daerah Indonesia Timur. Labuan Bajo sendiri adalah salah satu kota kecil di Provinsi Nusa Tenggara Timur yang letaknya berada di ujung paling barat pulau Flores. Labuan Bajo mulai banyak dikenal setelah pagelaran Sailing Komodo beberapa tahun lalu.</p>
            <p className="text-lg text-justify">Menjalani aktivitas sehari-hari bisa membuat anda butuh waktu untuk refreshing dengan melakukan perjalanan wisata. Dan untuk saat ini, Labuan Bajo adalah salah satu destinasi terbaik untuk perjalanan wisata anda, mengingat Labuan Bajo adalah satu dari beberapa destinasi wisata premium yang ditetapkan pemerintah. Untuk itu, berikut beberapa Destinasi terbaik Labuan Bajo yang bisa anda Nikmati selama trip :</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-black text-3xl font-serif  ">Popular Destination</p>
          <p className="text-tiny text-center mx-3">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 pt-3">
            {destination?.map((data: any) => (
              <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">{data?.title}</p>
                  <h4 className="text-white font-medium text-large">{data?.name}</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={data?.imageUrl}
                />
              </Card>
            ))}

          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-black text-3xl font-serif  ">Open Trip Package</p>
          <p className="text-tiny text-center mx-3">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-full gap-2 grid grid-cols-12 px-8 pt-3">
            {packageTrip?.map((data: any) => (
              <Card isFooterBlurred className="w-full h-[300px] col-span-4 sm:col-span-3">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">{data?.duration}</p>
                  {/* <h4 className="text-black font-medium text-2xl">{data?.Package}</h4> */}
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={data?.imageUrl}
                />
                <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className=" text-lg text-yellow-700 font-bold ">{data?.price}</p>
                    <p className="text-black text-tiny">{data?.description}</p>
                  </div>
                  <Button className="text-tiny bg-yellow-700" radius="full" size="sm">
                    Notify Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
}
