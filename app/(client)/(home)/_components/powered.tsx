import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Powered = () => {
  const data = [
    {
      name: "LG",
      logo: "/images/brand-01.jpg",
    },
    {
      name: "ABB",
      logo: "/images/brand-02.jpg",
    },
    {
      name: "Jinko",
      logo: "/images/brand-03.jpg",
    },
    {
      name: "QCells",
      logo: "/images/brand-04.jpg",
    },
    {
      name: "Canadian",
      logo: "/images/brand-05.jpg",
    },
  ]
  return (
    <section className="bg-[url(/images/bg-powered.jpg)]">
      <div className="max-w-7xl mx-5 md:mx-10 2xl:mx-auto py-10">
        <h1 className="text-4xl text-white">We are powered by</h1>
        <p className="font-light pt-2 text-white">
          We source together the most advanced technology and products from leading brands
        </p>

        <Carousel opts={{ align: "start" }} className="mt-20 mb-10 mx-10 2xl:mx-0">
          <CarouselContent>
            {data.map((item, i) => (
              <CarouselItem key={i} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <Image
                  className="mx-auto"
                  src={item.logo}
                  width={200}
                  height={200}
                  alt={item.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="xl:hidden" />
          <CarouselNext className="xl:hidden" />
        </Carousel>
      </div>
    </section>
  )
}
