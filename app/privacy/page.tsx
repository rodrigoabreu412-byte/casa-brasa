
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-black tracking-tight">
            CASA <span className="text-orange-500">BRASA</span>
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-300 transition hover:text-orange-500"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <section className="border-b border-white/10 bg-[#181818]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Información legal
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Política de privacidad
          </h1>
          <p className="mt-5 leading-7 text-gray-400">
            En esta página explicamos cómo Casa Brasa pretende gestionar la
            información de los visitantes de su sitio web.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Última actualización: 23 de octubre de 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-6 py-14 leading-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-white">
            1. Información general
          </h2>
          <p className="mt-3">
            Esta política describe las prácticas de privacidad previstas para
            el sitio web de Casa Brasa. Antes de publicar el sitio, el negocio
            debe verificar que este documento coincida con sus operaciones
            reales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            2. Información que podemos recopilar
          </h2>
          <p className="mt-3">
            Si incorporamos formularios de contacto, podremos solicitar datos
            como nombre, correo electrónico, número de teléfono y el contenido
            del mensaje, únicamente cuando sean necesarios para atender la
            solicitud.
          </p>
          <p className="mt-3">
            Los servicios técnicos utilizados para mantener el sitio también
            podrían procesar datos básicos de conexión. La información
            efectivamente recopilada dependerá de las herramientas instaladas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            3. Uso de la información
          </h2>
          <p className="mt-3">
            La información recibida podrá utilizarse para responder consultas,
            prestar los servicios solicitados, mantener la seguridad del sitio
            y mejorar la experiencia de los visitantes, según corresponda.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            4. Compartir información
          </h2>
          <p className="mt-3">
            Casa Brasa no debe vender los datos personales de sus visitantes.
            Si se utilizan proveedores para alojar el sitio o procesar
            solicitudes, el negocio debe informar sobre esos servicios y
            compartir únicamente los datos necesarios para su funcionamiento
            legítimo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            5. Cookies y tecnologías similares
          </h2>
          <p className="mt-3">
            El sitio podría utilizar cookies o tecnologías similares para
            funciones esenciales, preferencias o análisis, si estas herramientas
            se incorporan. Las categorías utilizadas y las opciones de control
            deberán explicarse de acuerdo con la configuración real del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            6. Seguridad y conservación
          </h2>
          <p className="mt-3">
            Se deben aplicar medidas razonables para proteger los datos
            personales y conservarlos solo durante el tiempo necesario para
            cumplir la finalidad correspondiente o las obligaciones legales
            aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            7. Derechos de los usuarios
          </h2>
          <p className="mt-3">
            Los visitantes pueden solicitar información sobre el tratamiento
            de sus datos o comunicar una inquietud mediante los canales de
            contacto oficiales del negocio. Las solicitudes se atenderán de
            acuerdo con las leyes aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            8. Cambios en esta política
          </h2>
          <p className="mt-3">
            Esta política puede actualizarse cuando cambien el sitio, sus
            funciones o los requisitos legales. La fecha de actualización
            deberá modificarse cada vez que se publique una revisión.
          </p>
        </section>

        <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
          <h2 className="text-xl font-bold text-white">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="mt-3">
            Visita nuestra página de contacto para consultar los canales
            disponibles.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400"
          >
            Ir a contacto →
          </Link>
        </section>
      </article>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <Link href="/" className="font-black text-white">
            CASA <span className="text-orange-500">BRASA</span>
          </Link>
          <p>© 2026 Casa Brasa. Todos los derechos reservados.</p>
          <Link href="/terms" className="transition hover:text-orange-500">
            Términos y condiciones
          </Link>
        </div>
      </footer>
    </main>
  );
}
