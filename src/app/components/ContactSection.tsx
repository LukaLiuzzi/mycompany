import Image from 'next/image'
import Link from 'next/link'

const ContactSection = () => {
  return (
    <section className="mt-96">
      <div className="relative h-[500px]">
        <Image
          src="/images/hero.jpg"
          alt="Contact"
          width={1920}
          height={1080}
          className="object-cover h-full w-full opacity-70"
        />
        <div className="absolute bg-gradient-to-b from-primary to-transparent z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 backdrop-blur-[3px]">
          <div className="max-w-md z-40">
            <h2 className="text-2xl text-background z-20 text-center lg:text-4xl">
              ¿Tenés alguna consulta? ¿Querés contactarnos?
            </h2>
            <p className="text-lg text-background text-bg z-20 text-center mt-6 leading-8 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ad
              consectetur ut sint molestias itaque eaque id doloribus ratione
              ex, eius veniam. Quisquam, voluptatum.
            </p>
            <Link href="/contact" className="flex justify-center items-center">
              <button className="bg-button text-buttonText text-lg font-bold px-6 py-2 rounded-full z-20 mt-6">
                Contactanos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
