import { Star } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const Reviews = () => {
  const data = [
    {
      name: "Gary and lorraine reeves",
      address: "Brisky Bay Qld, Australia",
      review:
        "Thank you for the installation of our solar system. I was impressed by the quality of the equipment and workmanship as I'm always cautious about who work on my roof. once again thank you",
      rating: 5,
    },
    {
      name: "Barbara Rogers",
      address: "Forest Lake Qld, Australia",
      review:
        "Hi Jimmy, Hope you don't mind, but I just had to let you know how happy I am with the Solar experience. I got my first power bill 3 days ago and AGL owe me $ 156.51.",
      rating: 5,
    },
    {
      name: "Robyn Grills",
      address: "Winfield 4670, Australia",
      review:
        "I would like to express how from the consultation at the beginning of our Solar experience through to the installation of our panels and inverter, it has been very easy. We are very happy and would recommend Oz Solar to anyone considering installing solar in our area.",
      rating: 5,
    },
    {
      name: "Ken and Dionesia Goebel",
      address: "Laidley Heights",
      review:
        "We, the Hooper Taxation Services Pty Ltd, (Ken and Dionesia Goebel) would like to thank you “Oz Solar Needs” for your unbelievable, professional, honest, friendly and reliable service.",
      rating: 5,
    },
    {
      name: "Gary and lorraine reeves",
      address: "Brisky Bay Qld, Australia",
      review:
        "Thank you for the installation of our solar system. I was impressed by the quality of the equipment and workmanship as I'm always cautious about who work on my roof. once again thank you",
      rating: 5,
    },
    {
      name: "Barbara Rogers",
      address: "Forest Lake Qld, Australia",
      review:
        "Hi Jimmy, Hope you don't mind, but I just had to let you know how happy I am with the Solar experience. I got my first power bill 3 days ago and AGL owe me $ 156.51.",
      rating: 5,
    },
  ]
  return (
    <section className="max-w-7xl mx-5 md:mx-10 2xl:mx-auto py-10">
      <h1 className="text-4xl">Customer&apos;s Review</h1>
      <p className="font-light pt-2">What they say about us</p>

      <Carousel opts={{ align: "start" }} className="mt-20 mb-10 mx-10 2xl:mx-0">
        <CarouselContent>
          {data.map((item, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <div className="flex">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#F7931E]" fill="#F7931E" />
                      ))}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-light">{item.review}</CardContent>
                <CardFooter className="font-semibold">
                  {item.name} | {item.address}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
