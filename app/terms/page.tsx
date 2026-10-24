
import Link from "next/link";

export default function TermsPage() {
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
            Términos y condiciones
          </h1>
          <p className="mt-5 leading-7 text-gray-400">
            Estas condiciones describen las reglas generales previstas para
            utilizar el sitio web de Casa Brasa.
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Última actualización: 23 de octubre de 2026
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl space-y-10 px-6 py-14 leading-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-white">
            1. Aceptación de las condiciones
          </h2>
          <p className="mt-3">
            Al acceder al sitio web, el visitante acepta cumplir estas
            condiciones. Si no está de acuerdo, debe abstenerse de utilizar
            las funciones del sitio que dependan de ellas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            2. Uso del sitio web
          </h2>
          <p className="mt-3">
            El visitante se compromete a utilizar el sitio de forma legal y
            responsable. No debe intentar interrumpir su funcionamiento,
            acceder sin autorización a sus sistemas ni utilizarlo para
            actividades fraudulentas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            3. Menú y precios
          </h2>
          <p className="mt-3">
            La información sobre platos, ingredientes, disponibilidad y precios
            que aparezca en el sitio debe confirmarse con el negocio antes de
            publicar la página. Los precios y la disponibilidad pueden cambiar.
          </p>
          <p className="mt-3">
            Las fotografías son ilustrativas y pueden no representar exactamente
            la presentación final de cada plato.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            4. Pedidos y pagos
          </h2>
          <p className="mt-3">
            La versión actual del sitio puede mostrar información del
            restaurante sin permitir pedidos ni pagos en línea. Si se añaden
            esas funciones, deberán publicarse las condiciones específicas
            sobre confirmaciones, métodos de pago, entregas, cancelaciones y
            reembolsos antes de activarlas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            5. Propiedad intelectual
          </h2>
          <p className="mt-3">
            Los nombres comerciales, logotipos, textos, diseños y otros
            materiales pertenecientes a Casa Brasa están protegidos por las
            normas aplicables. No se permite reproducirlos o utilizarlos sin
            autorización cuando esta sea necesaria.
          </p>
          <p className="mt-3">
            Las imágenes de terceros se rigen por las licencias y condiciones
            de sus respectivos propietarios o proveedores.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            6. Enlaces externos
          </h2>
          <p className="mt-3">
            El sitio puede incluir enlaces a páginas de terceros. Casa Brasa
            deberá revisar esos enlaces, pero no controla necesariamente el
            contenido, las políticas ni la disponibilidad de los sitios
            externos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            7. Disponibilidad y cambios
          </h2>
          <p className="mt-3">
            Se procurará mantener el sitio disponible y actualizado, aunque no
            se garantiza que funcione sin interrupciones o errores. Las
            funciones y el contenido pueden modificarse cuando sea necesario.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            8. Responsabilidad y legislación
          </h2>
          <p className="mt-3">
            Estas condiciones deben interpretarse de acuerdo con las leyes
            aplicables. Nada de lo aquí indicado pretende excluir derechos o
            responsabilidades que legalmente no puedan excluirse.
          </p>
          <p className="mt-3">
            Antes de publicar este documento, el negocio debe confirmar su
            identidad legal, jurisdicción y las condiciones específicas de
            sus servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            9. Modificaciones de los términos
          </h2>
          <p className="mt-3">
            Casa Brasa podrá actualizar estas condiciones cuando cambien los
            servicios o las necesidades del negocio. La fecha de actualización
            deberá reflejar la última revisión publicada.
          </p>
        </section>

        <section className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
          <h2 className="text-xl font-bold text-white">
            ¿Necesitas más información?
          </h2>
          <p className="mt-3">
            Puedes visitar nuestra página de contacto para consultar los
            canales disponibles.
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
          <Link href="/privacy" className="transition hover:text-orange-500">
            Política de privacidad
          </Link>
        </div>
      </footer>
    </main>
  );
}
