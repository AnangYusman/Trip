import { title } from "@/components/primitives";
import { Button, Card, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";

export default function OpenTripPage() {

  const openTrip = [
    {
      key: '1',
      duration: 'Open Trip 1 Day',
      price: 'IDR 1.450.000/PERSON',
      description: 'visit 5 favorite destination in a day',
      imageUrl: 'kapal-1.png'
    },
    // {
    //   key: '2',
    //   duration: 'Open Trip 2D1N REGULER',
    //   price: 'IDR 2.000.000/PERSON',
    //   description: 'Adventure with new friend',
    //   imageUrl: 'kapal-2.png'
    // },
    // {
    //   key: '3',
    //   duration: 'Open Trip 3D2N REGULER',
    //   price: 'IDR 2.500.000/PERSON',
    //   description: 'Adventure with new travel buddies',
    //   imageUrl: 'kapal-3.png'
    // },
    // {
    //   key: '4',
    //   duration: 'Open Trip 3D2N PREMIUM',
    //   price: 'IDR 3.250.000/PERSON',
    //   description: 'Adventure with premium boat',
    //   imageUrl: 'kapal-4.png'
    // }
  ]

  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Card isFooterBlurred className=" lg:w-full lg:h-[650px]  sm:col-span-7  rounded-none ">
              <CardHeader className="absolute flex flex-col items-center justify-items-center top-1/2 ">
                <p className="text-2xl text-white font-serif uppercase font-bold">Open Trip</p>
                <h4 className="text-white font-medium text-lg text-center w-1/2">Open trip hadir khusus bagi anda solo traveler atau kelompok kecil yang ingin merasakan pengalaman liburan bersama pengunjung lainnya yang belum anda kenal dalama satu kapal yang sama. Keutungan memilih open trip atau sharing trip terletak pada harga yang terjangkau namun dengan fasilitas dan pelayanan terbaik.</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover brightness-90 rounded-none"
                src="kapal1.jpeg"
              />
            </Card>
          </div>
          <Card className="bg-[#040720] dark:bg-white/80 rounded-none py-5">
            <div className="flex flex-col items-start justify-center mt-8 ml-3">
              <p className="text-white text-3xl font-serif dark:text-black text-center  ">OPEN TRIP 1 DAY Labuan Bajo</p>
            </div>
            <div className="flex flex-row items-start justify-between ">
              <div className="w-4/12 gap-2 px-3 pt-3">
                {openTrip?.map((data: any) => (
                  <Card isFooterBlurred className=" h-[350px] col-span-12 sm:col-span-6 lg:col-span-3">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                      <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">{data?.duration}</p>
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
                      <Button className="text-tiny bg-red-700" radius="full" size="sm">
                        Price List
                      </Button>
                      <Button className="text-tiny bg-green-500" radius="full" size="sm">
                        Book Via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <Card className="bg-white w-8/12 mt-3 mr-3 h-[350px]">
                <div className="flex flex-wrap gap-x-5 mt-4">
                  <div className="bg-gray-200 ml-4  px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Meeting Point</p>
                    <p className="text-black text-sm">Labuan Bajo (Pick Up service from Hotel / Airport)</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Musim</p>
                    <p className="text-black text-sm">Maret - Desember</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Aktivitas</p>
                    <p className="text-black text-sm">Berenang dan Snorkeling, Jungle trekking, Melihat Komodo</p>
                  </div>
                  <div className="bg-gray-200 ml-4 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Destinasi</p>
                    <p className="text-black text-sm">5 Destinasi</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Paket Tour</p>
                    <p className="text-black text-sm">Open Trip One Day</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Minimum Peserta</p>
                    <p className="text-black text-sm">10 Orang</p>
                  </div>
                  <div className="bg-gray-200 mx-3 px-2 py-2 rounded-md w-full">
                    <p className="text-black font-semibold">Price Include, Exclude and how to Book</p>
                    <div className=" flex flex-row w-full gap-5">
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Include</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Mineral Water and Soft Drink</p>
                        <p className="text-black text-sm">Fruit/Snack</p>
                        <p className="text-black text-sm">Snorkeling Set</p>
                        <p className="text-black text-sm">1X Lunch (Lunch Box)</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Exclude</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Flight Ticket</p>
                        <p className="text-black text-sm">Travel Insurance</p>
                        <p className="text-black text-sm">Tip For Crew (Optional)</p>
                        <p className="text-black text-sm">Entrance Fee Komodo Park, Government Fee and Snorkeling Fee</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">How to Book and Pay</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Download Price List</p>
                        <p className="text-black text-sm">Contact Us on WhatsApp to book your trip</p>
                        <p className="text-black text-sm">check the availability your schedule first. (Max 24 H)</p>
                        <p className="text-black text-sm">If your schedule is available, we will contact you shortly.</p>
                        <p className="text-black text-sm">We will create an invoice for the reservation process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex flex-col items-end justify-center mt-8 mr-3">
              <p className="text-white text-3xl font-serif dark:text-black text-center  ">OPEN TRIP 2D1N REGULER</p>
            </div>
            <div className="flex flex-row items-start justify-between ml-3 ">
              <Card className="bg-white w-8/12 mt-3 h-[410px]">
                <div className="flex flex-wrap gap-x-5 mt-4">
                  <div className="bg-gray-200 ml-4  px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Meeting Point</p>
                    <p className="text-black text-sm">Labuan Bajo (Pick Up service from Hotel / Airport)</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Musim</p>
                    <p className="text-black text-sm">Maret - September</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Aktivitas</p>
                    <p className="text-black text-sm">Snorkeling, Trekking melewati hutan untuk melihat Komodo,  Melihat atraksi Kalong di Pulau Kalong ketika Sunset.</p>
                  </div>
                  <div className="bg-gray-200 ml-4 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Destinasi</p>
                    <p className="text-black text-sm">6 Destinasi</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Paket Tour</p>
                    <p className="text-black text-sm">Open Trip One Day</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Minimum Peserta</p>
                    <p className="text-black text-sm">10 Orang</p>
                  </div>
                  <div className="bg-gray-200 mx-3 px-2 py-2  rounded-md w-full">
                    <p className="text-black font-semibold">Price Include, Exclude and how to Book</p>
                    <div className=" flex flex-row w-full gap-5">
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Include</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Comfort Cabin (with AC)</p>
                        <p className="text-black text-sm">Makanan Selama trip (Indonesian food)</p>
                        <p className="text-black text-sm">Snorkeling Set</p>
                        <p className="text-black text-sm">Snack, Kopi, Teh dan Air Mineral</p>
                        <p className="text-black text-sm">Dokumentasi</p>
                        <p className="text-black text-sm">Tour Leader dan Guide Lokal</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Exclude</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Flight Ticket</p>
                        <p className="text-black text-sm">Travel Insurance</p>
                        <p className="text-black text-sm">Tip For Crew (Optional)</p>
                        <p className="text-black text-sm">Entrance Fee Komodo Park, Government Fee and Snorkeling Fee</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">How to Book and Pay</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Download Price List</p>
                        <p className="text-black text-sm">Contact Us on WhatsApp to book your trip</p>
                        <p className="text-black text-sm">check the availability your schedule first. (Max 24 H)</p>
                        <p className="text-black text-sm">If your schedule is available, we will contact you shortly.</p>
                        <p className="text-black text-sm">We will create an invoice for the reservation process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="w-4/12 gap-2 px-3 pt-3">
                <Card isFooterBlurred className=" h-[410px] col-span-12 sm:col-span-6 lg:col-span-3">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">Open Trip 2D1N REGULER</p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={'kapal-2.png'}
                  />
                  <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className=" text-lg text-yellow-700 font-bold ">IDR 2.000.000/PERSON</p>
                      <p className="text-black text-tiny">Adventure with new friend</p>
                    </div>
                    <Button className="text-tiny bg-red-700" radius="full" size="sm">
                      Price List
                    </Button>
                    <Button className="text-tiny bg-green-500" radius="full" size="sm">
                      Book Via WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center mt-8 ml-3">
              <p className="text-white text-3xl font-serif dark:text-black text-center  ">OPEN TRIP 3D2N REGULER</p>
            </div>
            <div className="flex flex-row items-start justify-between ">
              <div className="w-4/12 gap-2 px-3 pt-3">

                <Card isFooterBlurred className=" h-[430px] col-span-12 sm:col-span-6 lg:col-span-3">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">Open Trip 3D2N REGULER</p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={'kapal-3.png'}
                  />
                  <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className=" text-lg text-yellow-700 font-bold ">IDR 2.500.000/PERSON</p>
                      <p className="text-black text-tiny">Adventure with new travel buddies</p>
                    </div>
                    <Button className="text-tiny bg-red-700" radius="full" size="sm">
                      Price List
                    </Button>
                    <Button className="text-tiny bg-green-500" radius="full" size="sm">
                      Book Via WhatsApp
                    </Button>
                  </CardFooter>
                </Card>

              </div>
              <Card className="bg-white w-8/12 mt-3 mr-3 h-[430px]">
                <div className="flex flex-wrap gap-x-5 mt-4">
                  <div className="bg-gray-200 ml-4  px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Meeting Point</p>
                    <p className="text-black text-sm">Labuan Bajo (Pick Up service from Hotel / Airport)</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Musim</p>
                    <p className="text-black text-sm">Maret - Desember</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Aktivitas</p>
                    <p className="text-black text-sm">Berenang dan Snorkeling, Jungle trekking, Melihat Komodo, Melihat
                      atraksi Kalong di Pulau Kalong ketika Sunset, Melihat sunsets dari atas
                      kapal.</p>
                  </div>
                  <div className="bg-gray-200 ml-4 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Destinasi</p>
                    <p className="text-black text-sm">9 Destinasi</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Paket Tour</p>
                    <p className="text-black text-sm">Open Trip 3D2N</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Minimum Peserta</p>
                    <p className="text-black text-sm">10 Orang</p>
                  </div>
                  <div className="bg-gray-200 mx-3 px-2 py-2 rounded-md w-full">
                    <p className="text-black font-semibold">Price Include, Exclude and how to Book</p>
                    <div className=" flex flex-row w-full gap-5">
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Include</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Comfort Cabin (with AC)</p>
                        <p className="text-black text-sm">Makanan Selama trip (Indonesian food)</p>
                        <p className="text-black text-sm">Snorkeling Set</p>
                        <p className="text-black text-sm">Snack, Kopi, Teh dan Air Mineral</p>
                        <p className="text-black text-sm">Dokumentasi Foto and Video (DSLR/Mirrorless, Drone, Underwater)</p>
                        <p className="text-black text-sm">Tour Leader dan Guide Lokal</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Exclude</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Flight Ticket</p>
                        <p className="text-black text-sm">Travel Insurance</p>
                        <p className="text-black text-sm">Tip For Crew (Optional)</p>
                        <p className="text-black text-sm">Entrance Fee Komodo Park, Government Fee and Snorkeling Fee</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">How to Book and Pay</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Download Price List</p>
                        <p className="text-black text-sm">Contact Us on WhatsApp to book your trip</p>
                        <p className="text-black text-sm">check the availability your schedule first. (Max 24 H)</p>
                        <p className="text-black text-sm">If your schedule is available, we will contact you shortly.</p>
                        <p className="text-black text-sm">We will create an invoice for the reservation process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex flex-col items-end justify-center mt-8 mr-3">
              <p className="text-white text-3xl font-serif dark:text-black text-center  ">OPEN TRIP 3D2N PREMIUM</p>
            </div>
            <div className="flex flex-row items-start justify-between ml-3 ">
              <Card className="bg-white w-8/12 mt-3 h-[430px]">
                <div className="flex flex-wrap gap-x-5 mt-4">
                  <div className="bg-gray-200 ml-4  px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Meeting Point</p>
                    <p className="text-black text-sm">Labuan Bajo (Pick Up service from Hotel / Airport)</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Musim</p>
                    <p className="text-black text-sm">Maret - Desember</p>
                  </div>
                  <div className="bg-gray-200 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Aktivitas</p>
                    <p className="text-black text-sm">Berenang dan Snorkeling, Jungle trekking, Melihat Komodo, Melihat
                      atraksi Kalong di Pulau Kalong ketika Sunset, Melihat sunsets dari atas
                      kapal.</p>
                  </div>
                  <div className="bg-gray-200 ml-4 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Destinasi</p>
                    <p className="text-black text-sm">9 Destinasi</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Paket Tour</p>
                    <p className="text-black text-sm">Open Trip Labuan Bajo 3D2N Premium</p>
                  </div>
                  <div className="bg-gray-200 my-3 px-2 py-2 rounded-md flex flex-col w-[350px]">
                    <p className="text-black font-semibold">Minimum Peserta</p>
                    <p className="text-black text-sm">10 Orang</p>
                  </div>
                  <div className="bg-gray-200 mx-3 px-2 py-2  rounded-md w-full">
                    <p className="text-black font-semibold">Price Include, Exclude and how to Book</p>
                    <div className=" flex flex-row w-full gap-5">
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Include</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Comfort Cabin (with AC)</p>
                        <p className="text-black text-sm">Makanan Selama trip (Indonesian food)</p>
                        <p className="text-black text-sm">Snorkeling Set</p>
                        <p className="text-black text-sm">Snack, Kopi, Teh dan Air Mineral</p>
                        <p className="text-black text-sm">Dokumentasi Foto and Video (DSLR/Mirrorless, Drone, Underwater)</p>
                        <p className="text-black text-sm">Tour Leader dan Guide Lokal</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">Price Exclude</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Flight Ticket</p>
                        <p className="text-black text-sm">Travel Insurance</p>
                        <p className="text-black text-sm">Tip For Crew (Optional)</p>
                        <p className="text-black text-sm">Entrance Fee Komodo Park, Government Fee and Snorkeling Fee</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold text-sm">How to Book and Pay</p>
                        <Divider className="bg-black" />
                        <p className="text-black text-sm">Download Price List</p>
                        <p className="text-black text-sm">Contact Us on WhatsApp to book your trip</p>
                        <p className="text-black text-sm">check the availability your schedule first. (Max 24 H)</p>
                        <p className="text-black text-sm">If your schedule is available, we will contact you shortly.</p>
                        <p className="text-black text-sm">We will create an invoice for the reservation process.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="w-4/12 gap-2 px-3 pt-3">
                <Card isFooterBlurred className=" h-[430px] col-span-12 sm:col-span-6 lg:col-span-3">
                  <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/80 uppercase font-bold bg-yellow-700 px-1 py-1 rounded-md">Open Trip 3D2N PREMIUM</p>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={'kapal-4.png'}
                  />
                  <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className=" text-lg text-yellow-700 font-bold ">IDR 3.250.000/PERSON</p>
                      <p className="text-black text-tiny">Adventure with new friend</p>
                    </div>
                    <Button className="text-tiny bg-red-700" radius="full" size="sm">
                      Price List
                    </Button>
                    <Button className="text-tiny bg-green-500" radius="full" size="sm">
                      Book Via WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
