import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export const Footer = () => {
  const date = new Date()
  return (
    <footer className="bg-[#E0EBF5] px-3 py-5">
      <div className="flex flex-col lg:flex-row lg:my-10">
        <Link href="/" className="object-contain my-5 lg:w-1/6">
          <Image src="/logo.png" width={155} height={50} alt="Logo" />
        </Link>
        <nav className="flex flex-col lg:flex-row w-full justify-between gap-y-5 lg:gap-y-0 lg:gap-x-10 px-5">
          <ul className="w-full flex flex-col space-y-4">
            <h4 className="text-xl font-medium border-b border-[#9ED8EB] py-4">
              Quick Links
            </h4>
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/gallery" className="footer-link">
              Gallery
            </Link>
            <Link href="/finance-options" className="footer-link">
              Finance Options
            </Link>
            <Link href="/contacts" className="footer-link">
              Contacts
            </Link>
            <Link href="/consumer-guide" className="footer-link">
              Consumer Guide
            </Link>
          </ul>
          <ul className="w-full flex flex-col space-y-4">
            <h4 className="text-xl font-medium border-b border-[#9ED8EB] py-4">
              Panels
            </h4>
            <Link className="footer-link" href="/panels/q-cells-panels">
              Q-Cells Panels
            </Link>
            <Link className="footer-link" href="/panels/trina-panels">
              Trina Panels
            </Link>
            <Link className="footer-link" href="/panels/canadian-solar">
              Canadian Solar
            </Link>
            <Link className="footer-link" href="/panels/lg-panels">
              LG Panels
            </Link>
          </ul>
          <ul className="w-full flex flex-col space-y-4">
            <h4 className="text-xl font-medium border-b border-[#9ED8EB] py-4">
              Inverter
            </h4>
            <Link className="footer-link" href="/inverter/fronius">
              Fronius
            </Link>
            <Link className="footer-link" href="/inverter/abb">
              ABB
            </Link>
            <Link className="footer-link" href="/inverter/sma">
              SMA
            </Link>
            <Link className="footer-link" href="/inverter/growatt">
              Growatt
            </Link>
            <Link className="footer-link" href="/inverter/sungrow">
              Sungrow
            </Link>
          </ul>
          <ul className="w-full flex flex-col space-y-4">
            <h4 className="text-xl font-medium border-b border-[#9ED8EB] py-4">
              Packages
            </h4>
            <Link className="footer-link" href="/packages/residential">
              Residential
            </Link>
            <Link className="footer-link" href="/packages/commercial">
              Commercial
            </Link>
          </ul>
          <ul className="w-full flex flex-col space-y-4 mb-5 lg:mb-0">
            <h4 className="text-xl font-medium border-b border-[#9ED8EB] py-4">
              Follow Us
            </h4>
            <div className="flex items-center space-x-4">
              <Link
                className="hover:text-[#739900] transition-colors duration-300 ease-in-out"
                href="https://www.facebook.com/OZSOLARNEEDS/"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                className="hover:text-[#739900] transition-colors duration-300 ease-in-out"
                href="https://www.instagram.com/oz_solar_needs/"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                className="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                href="https://wa.me/61430305960"
                target="_blank"
              >
                <Image
                  src="/socials/whatsapp.svg"
                  width={28}
                  height={28}
                  alt="Whatsapp"
                />
              </Link>
            </div>
          </ul>
        </nav>
      </div>
      <div className="border-t border-[#9ED8EB] flex flex-col sm:flex-row justify-between pt-5 mx-5 font-light">
        <p>© {date.getFullYear().toString()} Oz Solar Needs Pvt Ltd</p>
        <p>
          Website Designed by:{" "}
          <Link
            href="https://www.setblue.com/"
            target="_blank"
            className="font-semibold text-primary hover:text-orange-400 transition-colors duration-300 ease-in-out"
          >
            Setblue
          </Link>
        </p>
      </div>
    </footer>
  )
}
