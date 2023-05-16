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
      breakpoint: 900,
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
    title: 'Paginas web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.',
    icon: AiFillChrome
  },
  {
    id: 3,
    title: 'Sistemas web',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: MdOutlineSettingsSystemDaydream
  },
  {
    id: 4,
    title: 'Aplicaciones moviles',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.',
    icon: AiFillApple
  },
  {
    id: 2,
    title: 'Diseño grafico',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.',
    icon: AiOutlineInsertRowLeft
  }
]
