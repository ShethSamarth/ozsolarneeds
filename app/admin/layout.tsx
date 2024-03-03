import { redirect } from "next/navigation"

import { getAuthSession } from "@/lib/auth"

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getAuthSession()

  if (!user) redirect("/login")

  return <>{children}</>
}

export default AdminLayout
