'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const [active, setActive] = useState<string>(pathname)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full text-white shadow-lg md:block">
        <div className="lg:container lg:mx-auto lg:flex lg:items-center">
          <div className="flex relative lg:items-center lg:justify-center p-4 z-40">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
                alt="Logo"
                height={50}
                width={50}
              />
              <span className="ml-4 uppercase font-black text-center flex justify-center items-center">
                Luka
                <br />
                Liuzzi
              </span>
            </Link>
          </div>

          <nav
            className={`font-semibold text-base lg:text-lg lg:flex-1 lg:flex lg:justify-center ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
            <ul className="mx-auto flex flex-col lg:flex-row justify-center bg-background lg:bg-transparent w-full items-center text-white z-40">
              <Link href="/">
                <li
                  className={`p-4 xl:px-8 ${
                    active === '/' ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Inicio
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={`p-4 xl:px-8 ${
                    active === '/about' ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Nosotros
                </li>
              </Link>
              <Link href="/services">
                <li
                  className={`p-4 xl:px-8 ${
                    active === '/services' ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Servicios
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={`p-4 xl:px-8 ${
                    active === '/contact' ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Contacto
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <button
        className="absolute right-8 top-8 z-40 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <ImCross className="w-6 h-6 text-white" />
        ) : (
          <GiHamburgerMenu className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  )
}

export default Navbar
