import Image from "next/image"
import { ChevronsDown } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { InquiryForm } from "../../_components/inquiry-form"

export const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute h-full w-full lg:w-[45vw] flex flex-col justify-center space-y-8 p-8">
        <h1 className="text-3xl md:text-6xl text-white font-medium uppercase text-center lg:text-left">
          Solar Power Power That Shines
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white font-light text-center lg:text-left">
          Our solar modules help accelerate the clean energytransition, making the world healthier
          and more sustainable
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="orange-button">Book your free consultaion</button>
          </DialogTrigger>
          <DialogContent className="w-[80vw]">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium">Inquiry</DialogTitle>
            </DialogHeader>
            <hr />
            <InquiryForm />
          </DialogContent>
        </Dialog>
      </div>
      <ChevronsDown className="absolute left-1/2 bottom-5 -translate-x-1/2 text-white size-7" />
      <Image
        className="h-[calc(100vh-15vh)] w-full object-cover"
        src="https://api.ozsolarneeds.com.au/uploads/banner/1706510128242-225597084.jpg"
        width={2000}
        height={1500}
        alt=""
      />
    </section>
  )
}
