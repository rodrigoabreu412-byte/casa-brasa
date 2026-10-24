
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Sabor auténtico",
    description:
      "El fuego, los buenos ingredientes y el cuidado en cada preparación son la base de nuestra cocina.",
  },
  {
    number: "02",
    title: "Calidad en cada plato",
    description:
      "Buscamos que cada plato tenga el sabor, la presentación y la calidad que nuestros clientes merecen.",
  },
  {
    number: "03",
    title: "Momentos para compartir",
    description:
      "Creemos que una buena comida se disfruta más cuando se comparte con las personas que queremos.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CASA <span className="text-orange-500">BRASA</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm text-gray-300">
            <Link href="/" className="transition hover:text-orange-500">
              Inicio
            </Link>
            <Link
              href="/menu"
              className="transition hover:text-orange-500"
            >
              Menú
            </Link>
            <Link
              href="/location"
              className="hidden transition hover:text-orange-500 sm:block"
            >
              Ubicación
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-4 py-2 font-bold text-black transition hover:bg-orange-400"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Conoce Casa Brasa
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              La pasión
              <br />
              se cocina
              <br />
              <span className="text-orange-500">al fuego.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-400">
              Somos una propuesta gastronómica inspirada en el sabor de la
              parrilla, los buenos ingredientes y el placer de compartir una
              buena comida.
            </p>

            <Link
              href="/menu"
              className="mt-9 inline-flex rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400"
            >
              Descubre nuestro menú →
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl border border-orange-500/30" />
            <img
              src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85"
              alt="Carne preparada a la parrilla"
              className="relative h-[420px] w-full rounded-2xl object-cover md:h-[520px]"
            />
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-black/75 px-5 py-4 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-orange-400">
                Nuestra esencia
              </p>
              <p className="mt-1 text-lg font-bold">El sabor del fuego</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Nuestra filosofía
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Más que una comida, una experiencia.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-gray-400">
          <p>
            En Casa Brasa, el protagonista es el sabor. Nos inspira la cocina
            a la parrilla y la idea de convertir cada comida en un momento
            especial.
          </p>
          <p>
            Queremos crear un ambiente donde las personas puedan reunirse,
            disfrutar de platos preparados con dedicación y volver por una
            experiencia que valga la pena repetir.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#181818]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Lo que nos representa
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Nuestra forma de hacer las cosas.
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Cada detalle importa, desde la selección de los ingredientes
              hasta el momento en que el plato llega a la mesa.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-white/10 bg-[#111111] p-7 transition hover:-translate-y-1 hover:border-orange-500/50"
              >
                <span className="text-sm font-black tracking-widest text-orange-500">
                  {value.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
          Tu próxima experiencia
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black md:text-6xl">
          ¿Listo para descubrir el sabor de Casa Brasa?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          Explora nuestras opciones y encuentra tu próximo plato favorito.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/menu"
            className="rounded-full bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400"
          >
            Ver el menú
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-7 py-4 font-bold transition hover:border-orange-500 hover:text-orange-500"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <Link href="/" className="font-black tracking-tight text-white">
            CASA <span className="text-orange-500">BRASA</span>
          </Link>
          <p>© 2026 Casa Brasa. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-orange-500">
              Privacidad
            </Link>
            <Link href="/terms" className="transition hover:text-orange-500">
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
