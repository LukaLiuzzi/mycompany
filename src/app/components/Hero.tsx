import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subTitle?: string
  image: string
  imageAlt: string
  imageWidth?: number
  imageHeight?: number
  titlePosition?: 'left' | 'center' | 'right'
  buttonHref?: string
  buttonText?: string
}

const Hero = ({
  title,
  subTitle,
  image,
  imageAlt,
  imageWidth = 1920,
  imageHeight = 700,
  titlePosition = 'center',
  buttonHref,
  buttonText
}: HeroProps) => {
  return (
    <section className="relative">
      <div className="opacity-30">
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-full max-h-[700px] object-cover"
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-${titlePosition} items-center`}
      >
        <h2 className="text-2xl text-paragraph text-center tracking-widest">
          {subTitle}
        </h2>
        <h1 className="text-5xl text-headline font-bold text-center">
          {title}
        </h1>
        {buttonHref !== undefined && buttonText !== undefined && (
          <Link
            href={buttonHref}
            className="bg-button text-buttonText text-xl font-bold px-6 py-2 rounded-full mt-4"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  )
}
export default Hero
