"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterType } from "@/types/pages/auth.type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { register } from "@/services/requests/auth.api";
const formSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Tên không được để trống" })
      .min(2, { message: "Tên phải ít nhất 2 ký tự" })
      .max(30, { message: "Tên tối đa 30 ký tự" }),
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z
      .string()
      .min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" })
      .max(100, { message: "Mật khẩu tối đa 100 ký tự" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" })
      .max(100, { message: "Mật khẩu tối đa 100 ký tự" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

export default function SignUpForm() {
  const { mutate } = useMutation({
    mutationFn: async (data: RegisterType) => {
      return register(data);
    },
    onSuccess: () => {
      toast("Đăng ký thành công", { type: "success" });
      reset();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast(error.response.data.message, { type: "error" });
      } else {
        toast("Đăng ký thất bại. Vui lòng thử lại!", { type: "error" });
      }
    },
  });

  const form = useForm<RegisterType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });
  const { reset } = form;
  const onSubmit = async (value: RegisterType) => {
    mutate(value);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4 py-4 min-w-[400px] mx-auto"
    >
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-left">
          Họ và tên
        </Label>
        <Input
          id="name"
          placeholder="Họ và tên"
          {...form.register("name")}
          className="col-span-3"
        />
        {form.formState.errors.name && (
          <p className="col-span-3 col-start-2 text-red-500 text-sm">
            {form.formState.errors.name.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-left">
          Email
        </Label>
        <Input
          id="email"
          placeholder="Email"
          {...form.register("email")}
          className="col-span-3"
        />
        {form.formState.errors.email && (
          <p className="col-span-3 col-start-2 text-red-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="password" className="text-left">
          Password
        </Label>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          {...form.register("password")}
          className="col-span-3"
        />
        {form.formState.errors.password && (
          <p className="col-span-3 col-start-2 text-red-500 text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="confirmPassword" className="text-left">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          {...form.register("confirmPassword")}
          className="col-span-3"
        />
        {form.formState.errors.confirmPassword && (
          <p className="col-span-3 col-start-2 text-red-500 text-sm">
            {form.formState.errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button type="submit">Sign Up</Button>
    </form>
  );
}
