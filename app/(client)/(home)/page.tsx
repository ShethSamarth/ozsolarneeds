import { Metadata } from "next"

import { Hero } from "./_components/hero"
import { Info } from "./_components/info"
import { About } from "./_components/about"
import { Solar } from "./_components/solar"
import { Contact } from "./_components/contact"
import { Powered } from "./_components/powered"
import { Reviews } from "./_components/reviews"
import { SolarInstallation } from "./_components/solar-installation"

export const metadata: Metadata = {
  title: "Home",
}

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Solar />
      <SolarInstallation />
      <Reviews />
      <Powered />
      <Contact />
      <Info />
    </main>
  )
}

export default Home
