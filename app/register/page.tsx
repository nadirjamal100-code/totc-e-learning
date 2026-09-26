import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import { registerPage } from "@/data/auth";

export const metadata: Metadata = {
  title: "Register | TOTC",
  description: "Create a TOTC account to start learning.",
};

export default function RegisterPage() {
  return (
    <AuthForm
      mode="register"
      photo={registerPage.photo}
      alt={registerPage.alt}
      fields={registerPage.fields}
      submit={registerPage.submit}
    />
  );
}
