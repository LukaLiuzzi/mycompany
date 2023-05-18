import { IconType } from 'react-icons/lib'

interface InformationFrameProps {
  title: string
  description: string
  icon: IconType
}

const InformationFrame = ({
  title,
  description,
  icon
}: InformationFrameProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4 bg-background p-10 shadow-md mx-8 max-w-md">
      <div className="h-full w-full">
        {icon({ className: 'text-5xl text-primary' })}
        <h3 className="text-2xl text-headline">{title}</h3>
        <p className="text-paragraph leading-8">{description}</p>
      </div>
    </div>
  )
}

export default InformationFrame
