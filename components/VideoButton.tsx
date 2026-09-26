"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const VIDEO_ID = "YwJf2oD_RZA";

interface VideoButtonProps {
  children: ReactNode;
  className: string;
  label: string;
}

export default function VideoButton({ children, className, label }: VideoButtonProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={triggerRef} type="button" className={className} aria-label={label} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open ? (
        <div className="video-modal" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <section className="video-modal__dialog" role="dialog" aria-modal="true" aria-label={label}>
            <button ref={closeRef} type="button" className="video-modal__close" aria-label="Close video" onClick={() => setOpen(false)}>×</button>
            <div className="video-modal__frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Introduction to online learning"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
