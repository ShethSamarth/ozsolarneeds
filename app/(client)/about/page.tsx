import { Metadata } from "next"

import { Banner } from "@/components/banner"

export const metadata: Metadata = {
  title: "About",
}

const About = () => {
  return (
    <main>
      <Banner
        image="https://api.ozsolarneeds.com.au/uploads/banner/1706522552195-792009522.jpg"
        title="About"
        description="Oz Solar Needs exist to happily serve our community"
      />
    </main>
  )
}

export default About
