import {
  AiFillApple,
  AiFillChrome,
  AiOutlineInsertRowLeft
} from 'react-icons/ai'
import { MdOutlineSettingsSystemDaydream } from 'react-icons/md'

export const carrousellSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export const professionalServices = [
  {
    id: 1,
    title: 'Páginas web',
    description:
      'Creamos una página web profesional, con un diseño moderno y atractivo, que destaque tu negocio ante la competencia para aumentar tus ventas.',
    icon: AiFillChrome
  },
  {
    id: 3,
    title: 'Sistemas web',
    description:
      'Desarrollamos software personalizado a tus necesidades para simplificar tus procesos y aumentar tu productividad.',
    icon: MdOutlineSettingsSystemDaydream
  },
  {
    id: 4,
    title: 'Aplicaciones moviles',
    description:
      'Desarrollamos aplicaciones móviles para Android y iOS, practicas y fáciles de usar, que te permitan llegar a más clientes.',
    icon: AiFillApple
  },
  {
    id: 2,
    title: 'Diseño grafico',
    description:
      'Hacemos diseños unicos para tu marca, creando una identidad visual para tu negocio.',
    icon: AiOutlineInsertRowLeft
  }
]
