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
import ReactPlayer from "react-player";

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
    },
    {
      key: "7",
      title: "Destination",
      name: "Kalong Island",
      imageUrl: "kalong.jpg",
    },
    {
      key: "8",
      title: "Destination",
      name: "Siaba Island",
      imageUrl: "siaba.jpg",
    },
    {
      key: "9",
      title: "Destination",
      name: "Kanawa Island",
      imageUrl: "kanawa.jpg",
    }


  ]

  const openTrip = [
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
      price: 'IDR 2.000.000/PERSON',
      description: 'Adventure with new friend',
      imageUrl: 'kapal-2.png'
    },
    {
      key: '3',
      duration: 'Open Trip 3D2N REGULER',
      price: 'IDR 2.500.000/PERSON',
      description: 'Adventure with new travel buddies',
      imageUrl: 'kapal-3.png'
    },
    {
      key: '4',
      duration: 'Open Trip 3D2N PREMIUM',
      price: 'IDR 3.250.000/PERSON',
      description: 'Adventure with premium boat',
      imageUrl: 'kapal-4.png'
    }
  ]

  const privateTrip = [
    {
      key: '1',
      type: 'Reguler Boat',
      name: 'SENTRAL',
      description: 'CAPACITY 12 PERSON',
      include: '5 Cabin | 3 Bathroom',
      imageUrl: 'kapal-1.png'
    },
    {
      key: '2',
      type: 'Semi Phinisi',
      name: 'ARIMBI',
      description: 'CAPACITY 10 PERSON',
      include: '4 Cabin | 4 Bathroom',
      imageUrl: 'kapal-2.png'
    },
    {
      key: '3',
      type: 'Phinisi Boat',
      name: 'LV I',
      description: 'CAPACITY 14 PERSON',
      include: '6 Cabin | 6 Bathroom',
      imageUrl: 'kapal-3.png'
    },
    {
      key: '4',
      type: 'Luxury Phinisi',
      name: 'NEPTUNE',
      description: 'CAPACITY 20 PERSON',
      include: '8 Cabin | 8 Bathroom',
      imageUrl: 'kapal-4.png'
    }
  ]
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Card isFooterBlurred className=" lg:w-full lg:h-[650px]  sm:col-span-7  rounded-none ">
            <CardHeader className="absolute flex flex-col items-center justify-items-center top-1/2 ">
              <p className="text-2xl text-white font-serif uppercase font-bold">Sail Explore Dance</p>
              <h4 className="text-white/70 font-medium text-lg">With Bajo Crew Tour, you're settled. Never worry about a thing.</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover brightness-75 rounded-none"
              src="padar.jpg"
            />
          </Card>
        </div>
        <Card className="bg-[#040720] dark:bg-white/80 rounded-none  py-5">
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="text-white dark:text-black text-xl lg:text-3xl font-serif  ">Trip with Bajo Crew Tour</p>
            <p className="text-sm text-center dark:text-black text-white">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="flex lg:flex-row flex-col mt-3  justify-center lg:items-start items-center mx-3" >
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
                  // pagination={{
                  //   clickable: true,
                  // }}
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
            <div className="w-full mx-5 mt-16">
              <p className="text-lg text-justify dark:text-black text-white"><span className="font-bold text-yellow-700">Paket Trip Labuan Bajo 2024</span> adalah pilihan berwisata di daerah Indonesia Timur. Labuan Bajo sendiri adalah salah satu kota kecil di Provinsi Nusa Tenggara Timur yang letaknya berada di ujung paling barat pulau Flores. Labuan Bajo mulai banyak dikenal setelah pagelaran Sailing Komodo beberapa tahun lalu.</p>
              <p className="text-lg text-justify mt-3 dark:text-black text-white">Menjalani aktivitas sehari-hari bisa membuat anda butuh waktu untuk refreshing dengan melakukan perjalanan wisata. Dan untuk saat ini, <span className="font-bold text-yellow-700">Labuan Bajo</span> adalah salah satu destinasi terbaik untuk perjalanan wisata anda, mengingat Labuan Bajo adalah satu dari beberapa destinasi wisata premium yang ditetapkan pemerintah. Untuk itu, berikut beberapa Destinasi terbaik Labuan Bajo yang bisa anda Nikmati selama trip :</p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-black text-3xl font-serif dark:text-white   ">Popular Destination</p>
          <p className="text-center mx-3 text-sm">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
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
        <Card className="bg-[#040720] dark:bg-white/80 rounded-none mt-20 py-5">
          <div className="flex flex-col items-center justify-center mt-8">
            <p className="text-white text-3xl font-serif dark:text-black text-center  ">Open Trip Package</p>
            <p className="text-white text-center mx-3 dark:text-black text-xs lg:text-sm">Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-full gap-2 grid grid-cols-12 px-8 pt-3">
              {openTrip?.map((data: any) => (
                <Card isFooterBlurred className=" h-[300px] col-span-12 sm:col-span-6 lg:col-span-3">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">{data?.duration}</p>
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
          <div className="flex flex-col items-center justify-center ">
            <p className="text-white text-3xl font-serif  mt-14 dark:text-black text-center">Exclusive Bajo Crew Tour with Private boat</p>
            <p className="text-white text-center lg:text-sm text-xs mx-5 dark:text-black">Experience luxury and privacy with our exclusive Bajo Crew tour package. With a private yacht, your trip becomes more intimate as the entire yacht is exclusively yours and your group’s. We handle everything from transportation to curating activities and accommodations, tailoring every detail to meet your specific preferences and needs. Elevate your adventure with Bajo Crew. Book now for an exclusive, luxurious, and private Komodo island tour experience.</p>
          </div>
          <div className="flex flex-row items-center">
            <div className="w-full gap-2 grid grid-cols-12 px-8 pt-3">
              {privateTrip?.map((data: any) => (
                <Card isFooterBlurred className="h-[300px] col-span-12 sm:col-span-6 lg:col-span-3">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">{data?.type}</p>
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
                      <p className=" text-lg text-yellow-700 font-bold ">{data?.name}</p>
                      <p className="text-black text-tiny">{data?.description}</p>
                      <p className="text-black text-xs">{data?.include}</p>
                    </div>
                    <Button className="text-tiny bg-yellow-700" radius="full" size="sm">
                      Notify Me
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </Card>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-black dark:text-white text-3xl font-serif  mt-14">Documentation</p>
          <p className="text-gray-800 dark:text-white text-center text-sm mx-5">Capture your holiday moments with an experienced photographer and get satisfying results while on holiday in Labuan Bajo.</p>
        </div>
        <div className="w-full">
          <div className="my-7 mx-3  flex flex-col lg:flex-row items-center ">
            <div className="w-full lg:w-5/12">
              <ReactPlayer controls={true} light={true} url="https://www.youtube.com/watch?v=wxcQ2Rq7YXo" width="100%" height='300px' />
            </div>
            <div className="w-full lg:w-7/12">
              <p className="ml-5 font-serif text-lg  text-justify mt-3">KAMI MELAYANI JASA PAKET TRIP LABUAN BAJO DAN KOMODO. BEBERAPA PAKET YANG KAMI SEDIAKAN ANTARA LAIN PAKET OPEN TRIP LABUAN BAJO, PAKET PRIVATE TRIP LABUAN BAJO, SEWA KAPAL LABUAN BAJO,  PAKET FOTOGRAFER DAN VIDEOGRAFER.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
