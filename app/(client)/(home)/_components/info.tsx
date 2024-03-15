import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export const Info = () => {
  return (
    <section className="bg-[url(/images/world-map.jpg)] bg-cover flex justify-center items-center py-20">
      <div className="relative bg-white/60 shadow-lg rounded-lg px-5 md:px-12 py-14 w-[calc(100vw-100px)] sm:w-[(100vw-300px)] md:w-[60vw] max-w-[40rem]">
        <Image
          className="absolute right-5 sm:right-10 size-14 sm:size-auto"
          src="/images/flag.png"
          height={100}
          width={100}
          alt=""
        />
        <div className="flex flex-col">
          <h4 className="text-3xl font-medium">Contact Us</h4>
          <p className="font-medium">For any queries</p>
        </div>

        <h3 className="text-lg font-medium py-3">Oz Solar Needs Pty Ltd</h3>

        <div className="flex flex-col gap-y-5">
          <div className="flex">
            <MapPin className="size-8 text-white -ml-2 mr-3" fill="#f7931e" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm font-light">
                Unit 14/96 Gardens Dr, Willawong
                <br />
                QLD 4110, Australia
              </p>
            </div>
          </div>
          <div className="flex">
            <Phone className="size-8 text-white -ml-2 mr-3" fill="#f7931e" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm font-light">1300-058-561</p>
            </div>
          </div>
          <div className="flex">
            <Mail className="size-8 text-white -ml-2 mr-3" fill="#f7931e" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm font-light">sales@ozsolarneeds.com.au</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
