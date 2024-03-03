import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

import db from "@/lib/db"

export async function POST(request: Request) {
  const body = await request.json()
  const { email, username, password } = body

  const existingEmail = await db.admin.findUnique({
    where: { email },
  })

  if (existingEmail) {
    return new NextResponse("Email already in use.", { status: 401 })
  }

  const existingUsername = await db.admin.findUnique({
    where: { username },
  })

  if (existingUsername) {
    return new NextResponse("Username already in use.", { status: 401 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await db.admin.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  })

  return NextResponse.json(user)
}
