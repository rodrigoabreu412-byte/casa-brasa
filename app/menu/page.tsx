
"use client";

import Link from "next/link";
import { useState } from "react";

const categorias = [
  {
    id: "carnes",
    nombre: "Carnes a la brasa",
    platos: [
      {
        nombre: "Churrasco Casa Brasa",
        descripcion: "Corte de res a la parrilla con chimichurri y guarnición.",
        precio: "RD$ 850",
        imagen:
          "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85",
        etiqueta: "Favorito",
      },
      {
        nombre: "Costillas BBQ",
        descripcion: "Costillas tiernas bañadas en salsa barbacoa de la casa.",
        precio: "RD$ 750",
        imagen:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
        etiqueta: "",
      },
      {
        nombre: "Parrillada Mixta",
        descripcion: "Una combinación de carnes para compartir y disfrutar.",
        precio: "RD$ 1,250",
        imagen:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85",
        etiqueta: "Para compartir",
      },
    ],
  },
  {
    id: "pollo",
    nombre: "Pollo a la parrilla",
    platos: [
      {
        nombre: "Pollo a la Brasa",
        descripcion: "Pollo sazonado con especias y cocinado lentamente al fuego.",
        precio: "RD$ 450",
        imagen:
          "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
        etiqueta: "",
      },
      {
        nombre: "Pechuga Grill",
        descripcion: "Pechuga a la parrilla con hierbas y guarnición.",
        precio: "RD$ 520",
        imagen:
          "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=85",
        etiqueta: "",
      },
      {
        nombre: "Alitas BBQ",
        descripcion: "Alitas doradas con nuestra salsa barbacoa.",
        precio: "RD$ 380",
        imagen:
          "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
        etiqueta: "Popular",
      },
    ],
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    platos: [
      {
        nombre: "Brasa Burger",
        descripcion: "Carne a la parrilla, queso, lechuga, tomate y salsa especial.",
        precio: "RD$ 480",
        imagen:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
        etiqueta: "Favorita",
      },
      {
        nombre: "Doble Brasa",
        descripcion: "Doble carne, doble queso y sabor intenso a la parrilla.",
        precio: "RD$ 620",
       imagen: 
         "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85",
       etiqueta: "",
      },
      {
        nombre: "Crispy Chicken Burger",
        descripcion: "Pollo crujiente, vegetales frescos y salsa de la casa.",
        precio: "RD$ 420",
        imagen:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
        etiqueta: "",
      },
    ],
  },
];

export default function MenuPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("");

  return (
    <main className="min-h-screen scroll-smooth bg-[#10100e] text-white">

      <section className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-[#191916]">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
            Del fuego a tu mesa
          </p>
          <h1 className="text-5xl font-black sm:text-7xl">
            Nuestro <span className="text-orange-500">Menú</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Carnes jugosas, pollo a la parrilla y hamburguesas preparadas para disfrutar cada bocado. Encuentra tu próximo plato favorito.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {categorias.map((categoria) => (
              <a
                key={categoria.id}
                href={`#${categoria.id}`}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`rounded-full border px-5 py-3 text-sm transition ${
                  categoriaActiva === categoria.id
                    ? "border-orange-500 bg-orange-500 text-black"
                    : "border-white/15 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
                }`}
              >
                {categoria.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categorias.map((categoria) => (
        <section
          key={categoria.id}
          id={categoria.id}
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 md:py-20"
        >
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                Preparado al momento
              </p>
              <h2 className="text-3xl font-black sm:text-4xl">
                {categoria.nombre}
              </h2>
            </div>
            <span className="hidden text-sm text-white/40 sm:block">
              {categoria.platos.length} opciones
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoria.platos.map((plato) => (
              <article
                key={plato.nombre}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#191916] transition hover:-translate-y-1 hover:border-orange-500/50"
              >
                <div className="relative h-60 overflow-hidden bg-[#24231f]">
                  <img
                    src={plato.imagen}
                    alt={plato.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  {plato.etiqueta && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange-600 px-3 py-1.5 text-xs font-bold">
                      {plato.etiqueta}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold">{plato.nombre}</h3>
                    <span className="shrink-0 font-bold text-orange-500">
                      {plato.precio}
                    </span>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-white/60">
                    {plato.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="border-t border-white/10 bg-[#0b0b0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <Link href="/" className="font-bold tracking-wider">
            CASA <span className="text-orange-500">BRASA</span>
          </Link>
          <p className="text-sm text-white/40">
            Precios de ejemplo sujetos a cambios.
          </p>
          <Link href="/" className="text-sm text-orange-500 transition hover:text-orange-400">
            Volver al inicio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
