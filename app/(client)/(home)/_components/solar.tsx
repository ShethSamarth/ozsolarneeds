import Image from "next/image"

export const Solar = () => {
  return (
    <div className="bg-[url(/images/bg-solar.jpg)] bg-cover grid grid-cols-1 md:grid-cols-2 text-white">
      <div className="bg-black/50 flex flex-col justify-center items-center py-10">
        <h2 className="text-4xl text-center">How Solar Panel Works ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20 mx-20 mt-20">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <Image src="/images/solar-icon01.svg" width={50} height={50} alt="Icon" />
            <h4 className="text-lg font-medium">Solar panels</h4>
            <p className="text-center font-thin opacity-80">
              Photovoltaic cells convert sunlight into DC electricity
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3">
            <Image src="/images/solar-icon02.svg" width={50} height={50} alt="Icon" />
            <h4 className="text-lg font-medium">Inverter</h4>
            <p className="text-center font-thin opacity-80">
              DC cuurent flows into the inverter which convert DC power to AC power...
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3">
            <Image src="/images/solar-icon03.svg" width={50} height={50} alt="Icon" />
            <h4 className="text-lg font-medium">Electric Meter</h4>
            <p className="text-center font-thin opacity-80">
              AC Power flows from the inverter into the breaker box, which directs the current to
              any ap...
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-3">
            <Image src="/images/solar-icon04.svg" width={50} height={50} alt="Icon" />
            <h4 className="text-lg font-medium">Performance Monitoring</h4>
            <p className="text-center font-thin opacity-80">
              View energy production and usage online.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
