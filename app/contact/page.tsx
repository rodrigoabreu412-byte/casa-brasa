
import Link from "next/link";

const whatsappNumber = "18299121956";
const whatsappMessage = encodeURIComponent(
  "Hola, estoy interesado en Casa Brasa. Me gustaría obtener más información."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const contactOptions = [
  {
    title: "Consultas generales",
    description: "Resuelve tus dudas sobre Casa Brasa.",
    icon: "✉",
  },
  {
    title: "Visítanos",
    description: "Consulta nuestra ubicación y horarios.",
    icon: "⌖",
  },
  {
    title: "Nuestro menú",
    description: "Descubre nuestras opciones de comida.",
    icon: "☰",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 bg-[#111111]">
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
            <Link href="/about" className="hidden transition hover:text-orange-500 sm:block">
              Nosotros
            </Link>
            <Link href="/location" className="hidden transition hover:text-orange-500 sm:block">
              Ubicación
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Estamos para ayudarte
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Hablemos de
            <br />
            <span className="text-orange-500">buen sabor.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            ¿Tienes alguna pregunta o quieres conocer más sobre Casa Brasa?
            Escríbenos y estaremos encantados de atenderte.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Ponte en contacto
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            ¿Cómo podemos ayudarte?
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Estamos disponibles para recibir tus consultas sobre nuestro menú,
            el restaurante y nuestros servicios.
          </p>

          <div className="mt-9 space-y-4">
            {contactOptions.map((option) => (
              <article
                key={option.title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-[#181818] p-5 transition hover:border-orange-500/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-2xl text-orange-500">
                  {option.icon}
                </div>

                <div>
                  <h3 className="font-bold">{option.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    {option.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#181818] p-7 md:p-9">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.2A8.4 8.4 0 1 1 21 11.5Z" />
              <path d="M8.5 9.5c.6 2 2 3.4 4 4" />
            </svg>
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Atención por WhatsApp
          </p>

          <h2 className="mt-3 text-3xl font-black">
            ¡Hablemos!
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Escríbenos directamente por WhatsApp para consultar cualquier
            información sobre Casa Brasa.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-4 font-bold text-black transition hover:bg-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.2A8.4 8.4 0 1 1 21 11.5Z" />
              <path d="M8.5 9.5c.6 2 2 3.4 4 4" />
            </svg>
            Escribir por WhatsApp
          </a>

          <p className="mt-4 text-center text-sm text-gray-500">
            WhatsApp: 829-912-1956
          </p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm leading-6 text-gray-500">
              Al pulsar el botón, se abrirá WhatsApp para que puedas revisar
              y enviar el mensaje preparado.
            </p>
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
              El buen sabor nos une.
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
