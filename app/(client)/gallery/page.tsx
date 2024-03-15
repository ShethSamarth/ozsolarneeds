import { Metadata } from "next"

import { Banner } from "@/components/banner"

export const metadata: Metadata = {
  title: "Gallery",
}

const Gallery = () => {
  return (
    <main>
      <Banner
        image="https://api.ozsolarneeds.com.au/uploads/banner/1706526623614-471347614.jpg"
        title="Gallery"
        description="Our incredible project showcase"
      />
    </main>
  )
}

export default Gallery
