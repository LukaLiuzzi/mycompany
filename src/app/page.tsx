import AboutSection from './components/AboutSection'
import Carrousell from './components/Carrousell'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InformationFrame from './components/InformationFrame'
import Navbar from './components/Navbar'
import { professionalServices } from './constants'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image="/images/hero.jpg"
          imageAlt="Hero background"
          title="Desarrollo de software"
          subTitle="Especialistas en"
          buttonText="Conocer mas"
          buttonHref="/about"
          titlePosition="center"
        />
        <AboutSection
          title="Red de Consultoría"
          description="Ofreciendo un servicio diferencial, nos hemos posicionado en el mercado argentino como referente en consultoría de negocios."
          AnotherDescription="Nuestra red de Consultoría, esta conformado por profesionales especializados en el diseño, desarrollo y obtención de nuevas oportunidades de negocios para nuestros clientes."
          buttonHref="/about"
          buttonText="Ver mas"
        />
        <Carrousell
          title="Servicios Profesionales"
          components={professionalServices.map((service) => (
            <InformationFrame
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
