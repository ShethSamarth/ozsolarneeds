import { Metadata } from "next"

import { Hero } from "./_components/hero"

export const metadata: Metadata = {
  title: "Home",
}

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home
