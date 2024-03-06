"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { MotionDiv } from "@/components/motion"

import { MobileMenu } from "./mobile-menu"

export const Navbar = () => {
  const pathname = usePathname()

  const [panels, setPanels] = useState(false)
  const [inverter, setInverter] = useState(false)
  const [packages, setPackages] = useState(false)

  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur-md flex justify-between items-center p-3 z-50">
      <Link href="/">
        <Image src="/logo.png" width={155} height={50} alt="Logo" />
      </Link>
      <nav className="hidden xl:flex items-center gap-x-10">
        <Link
          href="/about"
          className={cn(pathname === "/about" ? "active-link" : "group link")}
        >
          About
        </Link>
        <Link
          href="/panels"
          className={cn(
            pathname === "/panels" ? "active-link" : "link",
            "relative"
          )}
          onMouseEnter={() => setPanels(true)}
          onMouseLeave={() => setPanels(false)}
        >
          Panels
          {panels && (
            <MotionDiv
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-full bg-white rounded-2xl border shadow-xl"
            >
              <div className="flex flex-col px-5 py-3 w-44">
                <Link className="sub-link" href="/panels/q-cells-panels">
                  Q-Cells Panels
                </Link>
                <Link className="sub-link" href="/panels/trina-panels">
                  Trina Panels
                </Link>
                <Link className="sub-link" href="/panels/canadian-solar">
                  Canadian Solar
                </Link>
                <Link className="sub-link" href="/panels/lg-panels">
                  LG Panels
                </Link>
              </div>
            </MotionDiv>
          )}
        </Link>
        <Link
          href="/inverter"
          className={cn(pathname === "/inverter" ? "active-link" : "link")}
          onMouseEnter={() => setInverter(true)}
          onMouseLeave={() => setInverter(false)}
        >
          Inverter
          {inverter && (
            <MotionDiv
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-full bg-white rounded-2xl border shadow-xl"
            >
              <div className="flex flex-col px-5 py-3 w-44">
                <Link className="sub-link" href="/inverter/fronius">
                  Fronius
                </Link>
                <Link className="sub-link" href="/inverter/abb">
                  ABB
                </Link>
                <Link className="sub-link" href="/inverter/sma">
                  SMA
                </Link>
                <Link className="sub-link" href="/inverter/growatt">
                  Growatt
                </Link>
                <Link className="sub-link" href="/inverter/sungrow">
                  Sungrow
                </Link>
              </div>
            </MotionDiv>
          )}
        </Link>
        <Link
          href="/packages"
          className={cn(pathname === "/packages" ? "active-link" : "link")}
          onMouseEnter={() => setPackages(true)}
          onMouseLeave={() => setPackages(false)}
        >
          Packages
          {packages && (
            <MotionDiv
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-full bg-white rounded-2xl border shadow-xl"
            >
              <div className="flex flex-col px-5 py-3 w-44">
                <Link className="sub-link" href="/packages/residential">
                  Residential
                </Link>
                <Link className="sub-link" href="/packages/commercial">
                  Commercial
                </Link>
              </div>
            </MotionDiv>
          )}
        </Link>
        <Link
          href="/gallery"
          className={cn(pathname === "/gallery" ? "active-link" : "link")}
        >
          Gallery
        </Link>
        <Link
          href="/finance-options"
          className={cn(
            pathname === "/finance-options" ? "active-link" : "link"
          )}
        >
          Finance Options
        </Link>
        <Link
          href="/contacts"
          className={cn(pathname === "/contacts" ? "active-link" : "link")}
        >
          Contacts
        </Link>
        <Link
          href="/consumer-guide"
          className={cn(
            pathname === "/consumer-guide" ? "active-link" : "link"
          )}
        >
          Consumer Guide
        </Link>
        <Link
          href="https://wa.me/61430305960"
          target="_blank"
          className="flex uppercase text-sm font-medium text-[#333333] p-3 rounded-md border border-[#15aad3] gap-x-2"
        >
          <Image
            src="/socials/whatsapp.svg"
            width={20}
            height={20}
            alt="Whatsapp"
          />
          Let&apos;s Talk
        </Link>
      </nav>
      <MobileMenu />
    </header>
  )
}
