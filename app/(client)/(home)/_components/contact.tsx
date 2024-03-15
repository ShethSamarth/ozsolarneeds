import Image from "next/image"

import { InquiryForm } from "../../_components/inquiry-form"

export const Contact = () => {
  return (
    <section className="grid grid-cols-3 md:grid-cols-5">
      <div className="hidden md:flex col-span-2">
        <Image
          className="object-cover"
          src="/images/contact-us.jpg"
          width={1000}
          height={2000}
          alt="Contact US"
        />
      </div>
      <div className="col-span-3 mx-14 my-10 xl:my-auto">
        <div className="flex flex-col gap-y-3 py-7">
          <h4 className="font-medium">We&apos;re Just a Click Away</h4>
          <h2 className="text-4xl font-medium">Let&apos;s Talk</h2>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}
