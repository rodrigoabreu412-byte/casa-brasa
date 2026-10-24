
"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Nosotros", href: "/about" },
  { label: "Ubicación", href: "/location" },
  { label: "Contacto", href: "/contact" },
];

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <main className="min-h-screen bg-[#10100e] text-white">
     
      <section
        id="inicio"
        className="relative flex min-h-[680px] items-center overflow-hidden bg-cover bg-center md:min-h-[760px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12,12,10,0.97) 0%, rgba(12,12,10,0.88) 38%, rgba(12,12,10,0.28) 100%), url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-orange-400 sm:text-sm">
              Sabor · Brasa · Tradición
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Bienvenido a
              <span className="mt-2 block text-orange-500">Casa Brasa</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
              Disfruta de la mejor comida a la brasa, con sabores auténticos,
              ingredientes de calidad y un ambiente único. Aquí la buena comida
              se vive diferente.
            </p>

            <Link
              href="/menu"
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-orange-600 px-7 py-4 font-bold transition hover:bg-orange-500"
            >
              Explora Nuestro Menú
              <span aria-hidden="true">→</span>
            </Link>

            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/50">
              <span className="h-px w-12 bg-orange-500" />
              Hecho al fuego, servido con pasión
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Nuestra cocina
            </p>
            <h2 className="text-3xl font-black sm:text-5xl">
              El sabor habla por sí solo
            </h2>
          </div>

          <Link
            href="/menu"
            className="w-fit border-b border-orange-500 pb-2 text-sm font-semibold transition hover:text-orange-400"
          >
            Ver todos los platos →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Churrasco a la brasa",
              description: "Carne jugosa, marcada al fuego y llena de sabor.",
              image:
                "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85",
            },
            {
              name: "Pollo a la parrilla",
              description: "Dorado por fuera, tierno y sabroso por dentro.",
              image:
                "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
            },
            {
              name: "Hamburguesa de la casa",
              description: "Una combinación generosa para los amantes del sabor.",
              image:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
            },
          ].map((dish) => (
            <Link
              key={dish.name}
              href="/menu"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#191916] transition hover:-translate-y-1 hover:border-orange-500/50"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${dish.image}')` }}
                role="img"
                aria-label={dish.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{dish.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {dish.description}
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-orange-500">
                  Descubrir plato →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#191916]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-24">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Nuestra esencia
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              Más que comida,
              <span className="block text-orange-500">una experiencia.</span>
            </h2>
          </div>
          <div>
            <p className="leading-8 text-white/70">
              En Casa Brasa celebramos el sabor de la cocina a la parrilla.
              Queremos que cada visita sea una oportunidad para compartir,
              disfrutar y crear buenos recuerdos alrededor de la mesa.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-3 font-bold text-orange-500 transition hover:text-orange-400"
            >
              Conoce nuestra historia <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-6 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-[#292017] to-[#171512] p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Te esperamos
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Ven a disfrutar de Casa Brasa
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/65">
              Descubre nuestro menú y encuentra la próxima ocasión para
              compartir una buena comida.
            </p>
          </div>
          <Link
            href="/location"
            className="w-fit shrink-0 rounded-full bg-orange-600 px-7 py-4 font-bold transition hover:bg-orange-500"
          >
            Cómo llegar →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0b0b0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <Link href="/" className="text-lg font-black tracking-[0.15em]">
            CASA <span className="text-orange-500">BRASA</span>
            <p className="mt-2 text-xs font-normal tracking-normal text-white/45">
              Sabor que reúne.
            </p>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-orange-500">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-orange-500">
              Términos
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              Contacto
            </Link>
          </nav>

          <p className="text-xs text-white/40">
            © 2026 Casa Brasa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
