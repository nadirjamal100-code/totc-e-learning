export interface AuthField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "password";
}

export const authCommon = {
  welcome: "Welcome to lorem..!",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  photoTitle: "Lorem Ipsum is simply",
  photoText: "Lorem Ipsum is simply",
  tabs: { login: "Login", register: "Register" },
};

export const loginPage = {
  photo: "/images/auth-login.webp",
  alt: "A schoolgirl raising her hand in class while classmates work at their desks",
  fields: [
    { id: "username", label: "User name", placeholder: "Enter your User name", type: "text" },
    { id: "password", label: "Password", placeholder: "Enter your Password", type: "password" },
  ] satisfies AuthField[],
  rememberMe: "Rememebr me",
  forgotPassword: "Forgot Password ?",
  submit: "Log in",
};

export const registerPage = {
  photo: "/images/auth-register.webp",
  alt: "Two schoolgirls raising their hands at their desks in a classroom with a bookshelf",
  fields: [
    { id: "email", label: "Email Address", placeholder: "Enter your Email Address", type: "email" },
    { id: "username", label: "User name", placeholder: "Enter your User name", type: "text" },
    { id: "password", label: "Password", placeholder: "Enter your Password", type: "password" },
  ] satisfies AuthField[],
  submit: "Register",
};
