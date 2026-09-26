interface IconProps {
  className?: string;
}

/** Small inline icons (the Figma file uses the Font Awesome 5 font for these). */
export function ChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 5.5 8 10.5 13 5.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M10.5 3 5.5 8 10.5 13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M5.5 3 10.5 8 5.5 13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Eye({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4.5C6.6 4.5 2.4 8.2 1 12c1.4 3.8 5.6 7.5 11 7.5s9.6-3.7 11-7.5c-1.4-3.8-5.6-7.5-11-7.5Z" fill="currentColor" />
      <circle cx="12" cy="12" r="4.6" fill="#fff" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Clock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6.5V12.4l3.8 2.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Palette({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.5c-4.7 0-8.5 3.6-8.5 8 0 3 2.1 4.9 4.5 4.9.9 0 1.4-.5 1.4-1.2 0-.6-.4-1-.4-1.7 0-.7.6-1.3 1.4-1.3h1.7c2.9 0 5.4-2.1 5.4-5.2 0-3.1-2.7-3.5-5.5-3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="8.3" cy="10.3" r="1.1" fill="currentColor" />
      <circle cx="8.3" cy="14.2" r="1.1" fill="currentColor" />
      <circle cx="12.2" cy="8.3" r="1.1" fill="currentColor" />
      <circle cx="15.7" cy="10.3" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Monitor({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="4.5" width="18" height="12" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20h6M12 16.5V20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Code({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8.5 8 4 12l4.5 4M15.5 8l4.5 4-4.5 4M13.5 6.5l-3 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Briefcase({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="8" width="17" height="11" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 8V6.3c0-.7.6-1.3 1.3-1.3h4.4c.7 0 1.3.6 1.3 1.3V8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Megaphone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H7l1 4.5h2l-1-4.5h1l8 3.5V7l-8 3.5H5.5A1.5 1.5 0 0 0 4 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19.5 10v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Camera({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 6.5 9.2 4.5h5.6L16 6.5h2.5A1.5 1.5 0 0 1 20 8v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17V8a1.5 1.5 0 0 1 1.5-1.5H8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12.2" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Masks({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 6c2 1.5 2 9 0 12 3 0 6-1.8 6-6S7 6 4 6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 6c-2 1.5-2 9 0 12-3 0-6-1.8-6-6s3-6 6-6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="7.3" cy="10.3" r=".9" fill="currentColor" />
      <circle cx="16.7" cy="10.3" r=".9" fill="currentColor" />
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 20V10M10 20V6M16 20v-7M20 4l-6 7-3-3-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9Z" fill="currentColor" />
    </svg>
  );
}

export function Play({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 6.5v11l9-5.5-9-5.5Z" fill="currentColor" />
    </svg>
  );
}

export function Shield({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.5 19 6v5.5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Devices({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="13" height="9.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 17.5h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="16.5" y="9" width="5" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Certificate({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m9.5 13.5-1.5 6 4-2 4 2-1.5-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9.7 9 1.5 1.5 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Layers({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4 3.5 8.5 12 13l8.5-4.5L12 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Twitter({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21 5.9c-.7.3-1.4.6-2.2.7.8-.5 1.4-1.2 1.6-2.1-.7.4-1.6.8-2.4.9a3.7 3.7 0 0 0-6.4 3.4A10.6 10.6 0 0 1 4 4.9a3.8 3.8 0 0 0 1.2 5 3.7 3.7 0 0 1-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.5.2-1.1.2-1.6.1a3.7 3.7 0 0 0 3.5 2.6A7.5 7.5 0 0 1 3 17.2a10.6 10.6 0 0 0 5.7 1.7c6.9 0 10.6-5.8 10.6-10.7v-.5c.7-.5 1.3-1.2 1.8-1.9Z" fill="currentColor" />
    </svg>
  );
}

export function Facebook({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14 21v-7.5h2.5l.4-3H14V8.4c0-.9.2-1.5 1.5-1.5H17V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8.3v3H11V21h3Z" fill="currentColor" />
    </svg>
  );
}

export function Youtube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.3v5.4l5-2.7-5-2.7Z" fill="currentColor" />
    </svg>
  );
}

export function Instagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Telegram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m4 12.2 15.5-6.7-2.6 14.3-5-3.7-2.4 2.3-.4-3.6L4 12.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9.5 14.8 8-6.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Whatsapp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L4 20.5l4.5-.8A8.4 8.4 0 1 0 12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.9 8.3c.2-.4.5-.4.7-.4h.5c.2 0 .4 0 .6.4l.6 1.4c.1.2 0 .4-.1.6l-.5.5c-.1.2-.1.3 0 .5.4.7 1.3 1.6 2 2 .2.1.3.1.5 0l.5-.5c.2-.1.4-.2.6-.1l1.4.6c.3.1.4.3.4.6v.5c0 .2 0 .5-.4.7-.6.4-1.4.5-2.1.3-1.5-.4-3.2-1.8-4.2-2.8s-2.4-2.7-2.8-4.2c-.2-.7-.1-1.5.3-2.1Z" fill="currentColor" />
    </svg>
  );
}
