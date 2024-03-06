import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="flex xl:hidden justify-center items-center"
        >
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0">
        <SheetHeader className="bg-[#ecf9ff]">
          <SheetClose asChild>
            <Link href="/" className="w-fit">
              <Image
                className="p-5"
                src="/logo.png"
                width={180}
                height={50}
                alt="Oz Solar Needs"
              />
            </Link>
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col divide-y">
          <SheetClose asChild>
            <Link href="/about" className="font-medium uppercase p-4">
              About
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/panels" className="font-medium uppercase p-4">
              Panels
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/inverter" className="font-medium uppercase p-4">
              Inverter
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/packages" className="font-medium uppercase p-4">
              Packages
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/gallery" className="font-medium uppercase p-4">
              Gallery
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/finance-options" className="font-medium uppercase p-4">
              Finance Options
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contacts" className="font-medium uppercase p-4">
              Contacts
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/consumer-guide" className="font-medium uppercase p-4">
              Consumer Guide
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
