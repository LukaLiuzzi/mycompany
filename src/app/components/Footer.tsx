import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex lg:items-center lg:justify-center py-4 text-primary">
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
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="mailto:lukaliuzzidev@gmail.com"
                className="flex gap-2 justify-center items-center mr-4 hover:underline md:mr-6 "
              >
                <AiOutlineMail className="text-lg" /> lukaliuzzidev@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=541151196494&text=Hola+me+comunico+porque+ando+buscando+un+servicio+de+Luka+Liuzzi&type=phone_number&app_absent=0"
                className="flex gap-2 justify-center items-center mr-4 hover:underline md:mr-6"
              >
                <AiOutlineWhatsApp className="text-lg" /> +5491151196494
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <Link href="/" className="hover:underline">
            Luka Liuzzi™
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  )
}

export default Footer
