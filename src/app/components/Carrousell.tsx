'use client'
import Slider from 'react-slick'
import { carrousellSettings } from '../constants'

interface CarrousellProps {
  title: string
  components: React.ReactNode[]
}

const Carrousell = ({ title, components }: CarrousellProps) => {
  return (
    <div className="bg-primary p-8 h-[200px]">
      <h3 className="text-2xl text-center text-bg p-10 font-bold">{title}</h3>
      <Slider {...carrousellSettings}>
        {components.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </Slider>
    </div>
  )
}

export default Carrousell
