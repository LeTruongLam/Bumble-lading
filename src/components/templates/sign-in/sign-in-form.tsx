"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginType } from "@/types/pages/auth.type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/requests/auth.api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthInfo, setUserInfo } from "@/store/auth.slice";
import { IAuthState } from "@/types/store/auth.store.type";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" })
    .max(100, { message: "Mật khẩu tối đa 100 ký tự" }),
});

export default function SignInForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (data: LoginType) => {
      const result = await login(data);
      await fetch("api/auth", {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      return result.data;
    },
    onSuccess: (data: IAuthState) => {
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: data.token, expiresAt: data.expiresAt })
      );

      dispatch(setAuthInfo({ token: data.token, expiresAt: data.expiresAt }));
      dispatch(setUserInfo({ account: data.account }));
      toast("Đăng nhập thành công", { type: "success" });
      router.push("/dashboard");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.response?.data?.message) {
        toast(error.response.data.message, { type: "error" });
      } else {
        toast("Đăng nhập thất bại. Vui lòng thử lại!", { type: "error" });
      }
    },
  });

  const form = useForm<LoginType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (value: LoginType) => {
    mutate(value);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4 py-4 min-w-[400px] mx-auto"
    >
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
      <Button type="submit">Sign In</Button>
    </form>
  );
}
