import type { ReactNode } from "react";
import type { AuthField as AuthFieldData } from "@/data/auth";
import { authCommon } from "@/data/auth";
import Button from "../Button";
import AuthField from "./AuthField";
import AuthPhoto from "./AuthPhoto";
import AuthTabs from "./AuthTabs";

interface AuthFormProps {
  mode: "login" | "register";
  photo: string;
  alt: string;
  fields: AuthFieldData[];
  submit: string;
  /** extra row rendered between the fields and the submit button (Login only) */
  extra?: ReactNode;
}

export default function AuthForm({ mode, photo, alt, fields, submit, extra }: AuthFormProps) {
  return (
    <div className="auth">
      <AuthPhoto src={photo} alt={alt} />
      <div className="auth-panel">
        <AuthTabs active={mode} />
        <p className="auth-panel__welcome">{authCommon.welcome}</p>
        <p className="auth-panel__text">{authCommon.text}</p>
        <form className="auth-form" action="#">
          {fields.map((field) => (
            <AuthField key={field.id} field={field} />
          ))}
          {extra}
          <Button variant="teal" type="submit" className="auth-form__submit">
            {submit}
          </Button>
        </form>
      </div>
    </div>
  );
}
