import Image from "next/image";

export type AvatarSize = 44 | 63 | 71 | 77;

/** Round profile picture. The name is always rendered next to it, so it is decorative. */
export default function Avatar({ size, className = "" }: { size: AvatarSize; className?: string }) {
  return (
    <span className={`avatar avatar--${size} ${className}`.trim()}>
      <Image src={`/images/avatar-${size}.webp`} alt="" fill sizes={`${size}px`} />
    </span>
  );
}
