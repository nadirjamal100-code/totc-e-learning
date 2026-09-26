import type { AuthField as AuthFieldData } from "@/data/auth";

export default function AuthField({ field }: { field: AuthFieldData }) {
  return (
    <div className="auth-field">
      <label className="auth-field__label" htmlFor={field.id}>
        {field.label}
      </label>
      <input
        id={field.id}
        name={field.id}
        type={field.type}
        placeholder={field.placeholder}
        autoComplete={field.type === "password" ? "current-password" : field.id}
        required
        className="auth-field__input"
      />
    </div>
  );
}
