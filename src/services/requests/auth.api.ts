// auth.api.ts (or your appropriate file)
import axios from "axios";
import { LoginType, RegisterType } from "@/types/pages/auth.type";

export const login = async (data: LoginType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
    data
  );
  return response.data;
};
export const register = async (data: RegisterType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,
    data
  );
  console.log(response.data);
  return response.data;
};
