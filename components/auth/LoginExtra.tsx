import { loginPage } from "@/data/auth";

export default function LoginExtra() {
  return (
    <div className="auth-form__row">
      <label className="auth-checkbox">
        <input type="checkbox" name="remember" />
        <span className="auth-checkbox__box" aria-hidden="true" />
        {loginPage.rememberMe}
      </label>
      <a className="auth-form__forgot" href="#">
        {loginPage.forgotPassword}
      </a>
    </div>
  );
}
