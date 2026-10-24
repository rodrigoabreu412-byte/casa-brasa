
import Link from "next/link";

const hours = [
  { day: "Lunes - Jueves", time: "12:00 PM - 10:00 PM" },
  { day: "Viernes - Sábado", time: "12:00 PM - 11:00 PM" },
  { day: "Domingo", time: "12:00 PM - 9:00 PM" },
];

export default function LocationPage() {
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
            <Link href="/menu" className="transition hover:text-orange-500">
              Menú
            </Link>
            <Link
              href="/about"
              className="hidden transition hover:text-orange-500 sm:block"
            >
              Nosotros
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

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Encuéntranos
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Tu próxima comida favorita
            <span className="text-orange-500"> te espera.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Descubre nuestra ubicación de referencia y conoce los horarios
            propuestos para Casa Brasa.
          </p>
        </div>
      </section>

      <section
        id="ubicacion"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#181818]">
            <iframe
              title="Mapa de referencia de Santo Domingo"
              src="https://maps.google.com/maps?q=Santo%20Domingo%2C%20Rep%C3%BAblica%20Dominicana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-[#181818] p-6">
            <h2 className="text-xl font-bold">Nuestra ubicación</h2>

            <p className="mt-3 leading-7 text-gray-400">
              Santo Domingo, República Dominicana
            </p>

            <p className="mt-3 text-sm leading-6 text-orange-400">
              Ubicación de referencia. Casa Brasa es un restaurante ficticio
              y todavía no tiene una dirección real.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Santo+Domingo+Republica+Dominicana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-white/20 px-5 py-3 font-bold transition hover:border-orange-500 hover:text-orange-500"
            >
              Abrir Google Maps ↗
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div
            id="horarios"
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#181818] p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Horario de atención
            </p>

            <h2 className="mt-3 text-3xl font-black">¿Cuándo visitarnos?</h2>

            <div className="mt-7 divide-y divide-white/10">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-gray-300">{item.day}</span>
                  <span className="text-sm text-orange-400">{item.time}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Horarios ficticios para fines de presentación del proyecto.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-7">
            <h2 className="text-2xl font-black">¿Necesitas ayuda?</h2>

            <p className="mt-3 leading-7 text-gray-400">
              Consulta nuestra página de contacto para conocer las opciones
              disponibles en esta demostración.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400"
            >
              Contáctanos →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#181818]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Casa Brasa
            </p>
            <h2 className="mt-2 text-3xl font-black">
              El sabor merece una visita.
            </h2>
          </div>

          <Link
            href="/menu"
            className="rounded-full border border-white/20 px-6 py-3 font-bold transition hover:border-orange-500 hover:text-orange-500"
          >
            Explorar el menú
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
