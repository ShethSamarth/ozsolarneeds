"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  mobile_no: z.coerce
    .number({ invalid_type_error: "Mobile no is required" })
    .min(1, { message: "Mobile no is required" }),
  postalCode: z.coerce
    .number({ invalid_type_error: "Postal code is required" })
    .min(1, { message: "Postal code is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export const InquiryForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile_no: undefined,
      postalCode: undefined,
      address: "",
      message: "",
    },
  })

  const { isLoading, isSubmitting, isValid } = form.formState

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    disabled={isLoading || isSubmitting}
                    className="form-input"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    disabled={isLoading || isSubmitting}
                    className="form-input"
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="mobile_no"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    disabled={isLoading || isSubmitting}
                    className="form-input"
                    placeholder="Mobile No."
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    disabled={isLoading || isSubmitting}
                    className="form-input"
                    placeholder="Postal Code"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  disabled={isLoading || isSubmitting}
                  className="form-input"
                  placeholder="Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  disabled={isLoading || isSubmitting}
                  className="form-input"
                  placeholder="Message"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            disabled={isLoading || isSubmitting || !isValid}
            type="submit"
            size="lg"
            className="bg-orange hover:bg-orange/70 rounded-none"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
