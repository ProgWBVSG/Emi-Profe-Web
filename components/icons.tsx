type P = { className?: string };

/** Marca: cuadrado con tres barras ascendentes = progresión de carga. */
export const Logo = ({ className = "h-9 w-9" }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect width="40" height="40" rx="11" fill="currentColor" />
    <rect x="9" y="23" width="5" height="8" rx="2.5" fill="var(--color-lime)" />
    <rect x="17.5" y="17" width="5" height="14" rx="2.5" fill="var(--color-lime)" />
    <rect x="26" y="9" width="5" height="22" rx="2.5" fill="var(--color-lime)" />
  </svg>
);

export const Play = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" />
  </svg>
);

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="m4.5 12.5 5 5 10-11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Whatsapp = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84A9.78 9.78 0 0 0 12.04 2Zm0 17.94h-.01a8.17 8.17 0 0 1-4.15-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.35c0-4.5 3.68-8.17 8.2-8.17a8.14 8.14 0 0 1 8.16 8.18c0 4.5-3.67 8.25-8.12 8.25Zm4.48-6.1c-.24-.13-1.45-.72-1.67-.8-.23-.08-.39-.12-.55.12s-.63.8-.78.96c-.14.17-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.01-.38.11-.5.11-.11.24-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.85.84-.85 2.04s.87 2.37.99 2.53c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.45-.6 1.65-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.46-.29Z" />
  </svg>
);

export const Mail = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m4 7.5 8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const Instagram = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

export const Plus = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ---- Iconos del método ---- */

export const Chat = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M20 11.5c0 3.9-3.6 7-8 7-1 0-2-.16-2.9-.45L4 20l1.2-3.5A6.6 6.6 0 0 1 4 11.5c0-3.9 3.6-7 8-7s8 3.1 8 7Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

export const Medir = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 19V9m5 10V5m5 14v-7m5 7V8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
  </svg>
);

export const Plan = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 3.5h8.5L19 8v12.5H6V3.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="M14 3.5V8h4.5M9 12.5h6M9 16h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const Entrenar = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6.5 9v6M4 10v4m16-4v4m-2.5-5v6M9 12h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Ajuste = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Logo de Google simplificado a 2 colores, para el botón de reseñas. */
export const GoogleG = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M21.6 12.23c0-.7-.06-1.38-.18-2.03H12v3.84h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.24c1.9-1.75 2.96-4.33 2.96-7.34Z"
      opacity=".55"
    />
    <path
      fill="currentColor"
      d="M12 22c2.7 0 4.96-.9 6.64-2.43l-3.24-2.5c-.9.6-2.05.96-3.4.96-2.6 0-4.8-1.76-5.6-4.12H3.06v2.58A10 10 0 0 0 12 22Z"
    />
    <path
      fill="currentColor"
      d="M6.4 13.91a5.98 5.98 0 0 1 0-3.82V7.51H3.06a10 10 0 0 0 0 8.98l3.34-2.58Z"
      opacity=".7"
    />
    <path
      fill="currentColor"
      d="M12 6.06c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.94 5.51l3.34 2.58c.8-2.36 3-4.03 5.6-4.03Z"
      opacity=".85"
    />
  </svg>
);
