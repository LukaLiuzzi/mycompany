import Link from 'next/link'

interface AboutSectionProps {
  title: string
  description: string
  AnotherDescription?: string
  buttonHref?: string
  buttonText?: string
}

const AboutSection = ({
  title,
  description,
  AnotherDescription,
  buttonHref,
  buttonText
}: AboutSectionProps) => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl text-headline font-bold">{title}</h2>
        <p className="text-paragraph mt-4 text-lg leading-8">{description}</p>
        {AnotherDescription !== undefined && (
          <p className="text-paragraph mt-4 text-lg leading-8">
            {AnotherDescription}
          </p>
        )}
        <div className="flex justify-center">
          {buttonHref !== undefined && buttonText !== undefined && (
            <Link
              href={buttonHref}
              className="bg-button text-buttonText text-xl font-bold text-center px-6 py-2 rounded-full mt-4"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
