import Image from "next/image"

interface BannerProps {
  image: string
  title: string
  description: string
}

export const Banner = ({ image, title, description }: BannerProps) => {
  return (
    <div className="relative h-56 md:h-64 lg:h-72">
      <Image
        className="absolute top-0 bottom-0 size-full object-cover"
        src={image}
        width={2000}
        height={1000}
        alt={title}
      />
      <div className="absolute size-full flex flex-col justify-center items-center gap-y-5 text-white">
        <h1 className="text-3xl md:text-6xl font-bold capitalize">{title}</h1>
        <p className="text-sm md:text-base font-medium">{description}</p>
      </div>
    </div>
  )
}
