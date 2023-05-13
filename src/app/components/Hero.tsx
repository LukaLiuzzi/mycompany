import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/hero.jpg"
        alt="Hero background"
        width={1920}
        height={700}
        className="w-full h-full max-h-[700px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl text-black text-center tracking-widest">
          Especialistas en
        </h2>
        <h1 className="text-5xl text-black font-bold text-center">
          Desarrollo de software
        </h1>
        <button className="bg-button text-buttonText text-xl font-bold px-6 py-2 rounded-full mt-4">
          Conocer mas
        </button>
      </div>
    </section>
  )
}
export default Hero
