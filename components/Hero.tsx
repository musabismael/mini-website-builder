import Image from 'next/image'
import { Theme } from '../../types/theme'

interface HeroProps {
  title: string
  description: string
  imageUrl: string
  theme: Theme
}

export default function Hero({ title, description, imageUrl, theme }: HeroProps) {
  return (
    <section style={{ backgroundColor: theme.secondaryColor }}>
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme.backgroundColor }}>{title}</h2>
          <p className="text-xl mb-8" style={{ color: theme.backgroundColor }}>{description}</p>
          <button className="px-6 py-3 rounded-lg text-lg font-semibold transition duration-300" style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}>
            Learn More
          </button>
        </div>
        <div className="md:w-1/2">
          <Image src={imageUrl} alt="Hero Image" width={800} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

