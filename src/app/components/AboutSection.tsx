import Image from 'next/image'
import Link from 'next/link'

interface AboutSectionProps {
  title: string
  description: string
  AnotherDescription?: string
  buttonHref?: string
  buttonText?: string
  image?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
}

const AboutSection = ({
  title,
  description,
  AnotherDescription,
  buttonHref,
  buttonText,
  image,
  imageAlt,
  imagePosition = 'right'
}: AboutSectionProps) => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10 md:flex-row">
        <div
          className={`flex-1 ${
            imagePosition === 'right' ? 'order-last' : 'order-first'
          } hidden lg:block
          `}
        >
          {image !== undefined && imageAlt !== undefined && (
            <Image
              src={image}
              alt={imageAlt}
              width="0"
              height="0"
              sizes="100%"
              className="mx-auto object-cover rounded-lg w-full h-full max-h-96 object-center"
            />
          )}
        </div>
        <div className="flex-1">
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
      </div>
    </section>
  )
}

export default AboutSection
