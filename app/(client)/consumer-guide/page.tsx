import { Metadata } from "next"

import { Banner } from "@/components/banner"

export const metadata: Metadata = {
  title: "Consumer Guide",
}

const ConsumerGuide = () => {
  return (
    <main>
      <Banner
        image="https://api.ozsolarneeds.com.au/uploads/banner/1706691717597-139201900.jpg"
        title="Consumer Guide"
        description="Consumer Guide"
      />
    </main>
  )
}

export default ConsumerGuide
