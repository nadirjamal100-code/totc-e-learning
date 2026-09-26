import Image from "next/image";
import { authCommon } from "@/data/auth";

export default function AuthPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="auth-photo">
      <Image src={src} alt={alt} fill priority sizes="(max-width: 899px) 100vw, 51vw" className="auth-photo__image" />
      <div className="auth-photo__scrim" aria-hidden="true" />
      <div className="auth-photo__text">
        <h2 className="auth-photo__title">{authCommon.photoTitle}</h2>
        <p className="auth-photo__subtitle">{authCommon.photoText}</p>
      </div>
    </div>
  );
}
