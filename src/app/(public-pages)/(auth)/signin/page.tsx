"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LiaArrowRightSolid } from "react-icons/lia";
import AuthenticationPage from "../auth-page";
export default function SignInPage() {
  const router = useRouter();

  return <AuthenticationPage mode="signin" />;
}
