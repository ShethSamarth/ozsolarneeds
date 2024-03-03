import { redirect } from "next/navigation"

import { getAuthSession } from "@/lib/auth"

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getAuthSession()

  if (user) redirect("/admin")

  return <>{children}</>
}

export default LoginLayout
