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
          className="object-cover h-full w-full"
        />
        <div className="absolute bg-gradient-to-b from-primary via-primary to-transparent z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4">
          <h2 className="text-2xl text-background z-20 text-center">
            ¿Tenés alguna consulta? ¿Querés contactarnos?
          </h2>
          <p className="text-md text-background text-bg z-20 text-center mt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ad
            consectetur ut sint molestias itaque eaque id doloribus ratione ex,
            eius veniam. Quisquam, voluptatum.
          </p>
          <Link href="/contact">
            <button className="bg-button text-buttonText text-lg font-bold px-6 py-2 rounded-full z-20 mt-6">
              Contactanos
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
