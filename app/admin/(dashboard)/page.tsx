"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

const Dashboard = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}

export default Dashboard
