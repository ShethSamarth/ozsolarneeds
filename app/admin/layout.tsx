import { redirect } from "next/navigation"

import { getAuthSession } from "@/lib/auth"

import { Navbar } from "./_components/navbar"

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getAuthSession()

  if (!user) redirect("/login")

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AdminLayout
