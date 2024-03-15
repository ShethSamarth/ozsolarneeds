import Link from "next/link"

export const About = () => {
  return (
    <section className="max-w-7xl mx-5 md:mx-10 xl:mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center pt-5 gap-x-5">
          <h2 className="text-3xl md:text-4xl font-medium">Oz Solar Needs</h2>
          <span className="hidden sm:block h-10 border-r border-orange" />
          <h4 className="text-lg font-extralight">Powering your business</h4>
        </div>
        <h6 className="text-lg font-medium">
          Oz solar needs exist to happily serve our community with the incredible experience of
          benefiting from the power of the sun at their homes or businesses. Since our business is
          built on happy customers who are eager to refer their friends and family, it&apos;s in our
          best interest to provide outstanding customer satisfaction and service in every aspect of
          installation.
        </h6>
        <p className="text-sm font-light">
          Our team is dedicated to making sure that quality is built into everything we do and that
          our customers always receive the best products and services, keeping them informed every
          step of the way. All of our installers have undergone rigorous training through the clean
          energy council.
        </p>
        <Link href="/about">
          <button className="bg-orange text-white tracking-tighter mt-8 px-7 py-3 rounded-sm">
            About Us
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
        <div className="bg-[url(/images/about01.jpg)] rounded-md flex flex-col justify-center gap-y-3 px-5 py-14">
          <h4 className="text-xl font-medium">Powerful Strategy</h4>
          <p className="font-light">Facilities meet high security requirements and are certified</p>
        </div>
        <div className="bg-orange rounded-md flex flex-col justify-center items-center gap-y-3 px-5 py-10">
          <div className="flex gap-x-3">
            <h1 className="text-8xl text-[#20ADD3]">12</h1>
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold">More Than</p>
              <p className="text-4xl font-medium">Years</p>
              <p className="font-semibold text-center">of experience</p>
            </div>
          </div>
          <p className="font-semibold">4000+ System Installed</p>
        </div>
        <div className="bg-[url(/images/about03.jpg)] rounded-md flex flex-col justify-center gap-y-3 px-5 py-14">
          <h4 className="text-xl font-medium">Award Winning</h4>
          <p className="font-light">
            International supply chains involves of unknown risks and Challenges.
          </p>
        </div>
        <div className="bg-[url(/images/about04.jpg)] rounded-md flex flex-col justify-center gap-y-3 px-5 py-14">
          <h4 className="text-xl font-medium">Accurate Testing</h4>
          <p className="font-light">
            Utilising latest processing solutions, and decades of work experience.
          </p>
        </div>
      </div>
    </section>
  )
}
