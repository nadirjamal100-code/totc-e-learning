import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import LoginExtra from "@/components/auth/LoginExtra";
import { loginPage } from "@/data/auth";

export const metadata: Metadata = {
  title: "Log in | TOTC",
  description: "Log in to your TOTC account to continue learning.",
};

export default function LoginPage() {
  return (
    <AuthForm
      mode="login"
      photo={loginPage.photo}
      alt={loginPage.alt}
      fields={loginPage.fields}
      submit={loginPage.submit}
      extra={<LoginExtra />}
    />
  );
}
