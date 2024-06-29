"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { addCustomer } from "@/actions/customer"

const formSchema = z.object({
  Name: z.string().min(2, { message: "** Name must be at least 2 characters. **" }),
  Phone: z.string()
    .refine(value => !isNaN(Number(value)) && value.length === 10, {
      message: "** Phone number must be exactly 10 digits **"
    })
    .transform(value => Number(value)),
  Message: z.string().max(200, { message: "** Message cannot be more than 200 words **" }).optional()
})

export function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Message: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await addCustomer(values.Name, values.Phone.toString())

    console.log(response)
  }

  return (
    <Form {...form}>
      <div className="flex text-white text-2xl font-medium self-center mb-2">
        <p>Get a Free Quote</p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Phone No.</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Your Phone no." {...field} />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center">
          <Button type="submit" className="bg-amber-300 text-white text-md mt-1">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
