"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** ms de retraso — usar 40–80ms entre hermanos para el stagger */
  delay?: number;
  /** "reveal" = fade + translate · "img" = wipe vertical · "line" = trazo horizontal */
  variant?: "reveal" | "img" | "line";
  as?: ElementType;
  className?: string;
};

/**
 * Revelado al hacer scroll. La animación es CSS pura (corre fuera del hilo
 * principal) y el observer solo escribe un atributo en el DOM: no hay estado
 * de React ni re-render. Se dispara una sola vez por elemento.
 */
export default function Reveal({
  children,
  delay = 0,
  variant = "reveal",
  as: Tag = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mostrar = () => el.setAttribute("data-visible", "true");

    // Sin IntersectionObserver mostramos el contenido sin animar.
    if (typeof IntersectionObserver === "undefined") {
      mostrar();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mostrar();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // El tipo de ref depende del tag elegido en tiempo de ejecución.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={`${
        variant === "img" ? "reveal-img" : variant === "line" ? "reveal-line" : "reveal"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
