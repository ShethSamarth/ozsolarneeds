"use client"

import { z } from "zod"
import Image from "next/image"
import { toast } from "sonner"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Please enter your username" }),
  password: z.string().min(1, { message: "Please enter your password" }),
})

const AdminLogin = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const { isLoading, isSubmitting } = form.formState

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    await signIn("credentials", { ...values, redirect: false })
      .then((callback) => {
        if (callback?.ok) {
          toast.success("Login successful")
          router.refresh()
          router.push("/admin")
        }
        if (callback?.error) {
          toast.error(callback.error)
          form.reset()
        }
      })
      .catch(() => {
        toast.error("Invalid credentials")
        form.reset()
      })
  }

  return (
    <main className="flex flex-col h-screen justify-center items-center bg-slate-200">
      <Card className="w-80 md:w-96">
        <Image
          className="mx-auto pt-4"
          src="/admin-logo.png"
          width={120}
          height={50}
          alt="Oz Solar Needs"
        />
        <CardHeader className="items-center">
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Enter your credentials below</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Username"
                        disabled={isLoading || isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        disabled={isLoading || isSubmitting}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading || isSubmitting}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}

export default AdminLogin
