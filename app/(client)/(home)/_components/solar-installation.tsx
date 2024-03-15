import Image from "next/image"

export const SolarInstallation = () => {
  const data = [
    {
      logo: "/images/installation-icon01.svg",
      desc: "Call us on 1300 058 561 to arrange a site inspection or email us on sales@ozsolarneeds.com.au",
    },
    {
      logo: "/images/installation-icon02.svg",
      desc: "We will design the solar system to suit your needs and discuss the different packages option based on your electricity usage.",
    },
    {
      logo: "/images/installation-icon03.svg",
      desc: "We will organize a free site inspection for the correct designing of your solar system.",
    },
    {
      logo: "/images/installation-icon04.svg",
      desc: "Once you select the system package which suits your requirements, we will submit your application to the electricity distributor.",
    },
    {
      logo: "/images/installation-icon05.svg",
      desc: "After your application has been approved by the distributor we will contact you to organize the date and time of installation.",
    },
    {
      logo: "/images/installation-icon06.svg",
      desc: "The final stage would involve the replacement of the utility meter, which is normally organized by the customer.",
    },
  ]

  return (
    <section className="bg-[url(/images/bg-solar-Installation.jpg)] bg-cover py-14">
      <div className="flex flex-col items-center gap-y-3 text-white">
        <h6 className="text-lg font-medium">Easy process for</h6>
        <h1 className="text-4xl font-medium">Solar Installation</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-10 xl:mx-auto py-14">
        {data.map((item, i) => (
          <div key={i} className="bg-black/15 flex items-center rounded-xl px-5 py-5">
            <div className="bg-orange size-14 aspect-square rounded-full flex justify-center mr-3">
              <Image src={item.logo} width={30} height={30} alt="Icon" />
            </div>
            <p className="text-sm text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
