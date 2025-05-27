import React from 'react';
import {DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form";
import {z, ZodType} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{success: boolean, error?: string}>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
   type,
   schema,
   defaultValues,
   onSubmit
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })

  const handleSubmit: SubmitHandler<T> = async (data)=> {};

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? "Welcome back to BookStore" : "Create your account"}
      </h1>
      <p className="text-light-100">
        {isSignIn ? "Access to the full library of books" : "Please complete all fields to get access to your account"}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? "New to BookStore?" : "Already have an account?"}

        <Link href={isSignIn ? "/sign-up" : "/sign-in"} class>
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  )
};

export default AuthForm;