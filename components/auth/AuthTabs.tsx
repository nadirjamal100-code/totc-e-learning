import Link from "next/link";
import { authCommon } from "@/data/auth";

export default function AuthTabs({ active }: { active: "login" | "register" }) {
  return (
    <div className="auth-tabs">
      <Link
        href="/login"
        className={`auth-tabs__tab${active === "login" ? " auth-tabs__tab--active" : ""}`}
      >
        {authCommon.tabs.login}
      </Link>
      <Link
        href="/register"
        className={`auth-tabs__tab${active === "register" ? " auth-tabs__tab--active" : ""}`}
      >
        {authCommon.tabs.register}
      </Link>
    </div>
  );
}
