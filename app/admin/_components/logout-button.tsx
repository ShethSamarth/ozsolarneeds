"use client"

import { toast } from "sonner"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export const LogoutButton = () => {
  const Logout = () => {
    signOut().then(() => toast.success("Logout completed"))
  }

  return (
    <Button
      onClick={Logout}
      variant="ghost"
      size="lg"
      className="w-full justify-between"
    >
      <LogOut className="size-5 mr-2" /> Sign Out
    </Button>
  )
}
