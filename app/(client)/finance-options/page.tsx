import { Metadata } from "next"

import { Banner } from "@/components/banner"

export const metadata: Metadata = {
  title: "Finance Options",
}

const FinanceOptions = () => {
  return (
    <main>
      <Banner
        image="https://api.ozsolarneeds.com.au/uploads/banner/1706526770289-434524415.jpg"
        title="Finance Options"
        description="Live interest free forever."
      />
    </main>
  )
}

export default FinanceOptions
