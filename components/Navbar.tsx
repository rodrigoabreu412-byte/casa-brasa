"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/about" },
  { label: "Ubicación", href: "/location" },
  { label: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[9999] w-full border-b border-white/10 bg-[#10100e] text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          onClick={() => setMenuAbierto(false)}
          className="flex items-center gap-2"
        >
          <span className="text-4xl text-orange-500">♨</span>
          <span className="text-xl font-black tracking-[0.12em] sm:text-2xl">
            CASA <span className="text-orange-500">BRASA</span>
          </span>
        </Link>

        {/* Menú de Escritorio */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const activo = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  activo
                    ? "font-bold text-orange-500"
                    : "text-white/80 hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ¡AQUÍ ESTÁ EL BOTÓN DE LAS 3 RAYITAS YA MODIFICADO! */}
        <button
          type="button"
          onClick={() => {
            alert("¡El botón sí funciona!");
            setMenuAbierto(!menuAbierto);
          }}
          className="relative z-[999999] pointer-events-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-3xl text-orange-500 md:hidden"
        >
          {menuAbierto ? "×" : "☰"}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {menuAbierto && (
        <div className="absolute left-0 top-20 w-full border-b border-white/10 bg-[#10100e] md:hidden flex flex-col shadow-2xl">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 py-2">
            {navigation.map((item) => {
              const activo = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuAbierto(false)}
                  className={`block w-full border-b border-white/10 py-4 text-base transition-colors last:border-b-0 ${
                    activo
                      ? "font-bold text-orange-500"
                      : "text-white/80 hover:text-orange-500"
                  }`}
                >
                  {item.label}
                  {activo && (
                    <span className="float-right text-orange-500">●</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}