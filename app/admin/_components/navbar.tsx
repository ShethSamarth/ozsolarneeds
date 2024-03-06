import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getAuthSession } from "@/lib/auth"

import { LogoutButton } from "./logout-button"

export const Navbar = async () => {
  const user = await getAuthSession()

  const username = user?.user?.email?.split("@")[0]

  return (
    <header className="flex justify-between md:justify-end items-center px-5 py-3 shadow-md">
      <Menu className="size-7 md:hidden" />
      <Popover>
        <PopoverTrigger className="flex items-center space-x-2">
          <Image
            src="/favicon.png"
            width={50}
            height={50}
            alt="Oz Solar Needs"
          />
          <p>{username}</p>
          <ChevronDown className="size-5" />
        </PopoverTrigger>
        <PopoverContent className="w-fit p-0">
          <LogoutButton />
        </PopoverContent>
      </Popover>
    </header>
  )
}
