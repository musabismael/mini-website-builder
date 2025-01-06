import { Theme } from '../../types/theme'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  theme: Theme
}

export default function CTA({ title, description, buttonText, theme }: CTAProps) {
  return (
    <section className="py-20" style={{ backgroundColor: theme.primaryColor }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: theme.backgroundColor }}>{title}</h2>
        <p className="text-xl mb-8" style={{ color: theme.backgroundColor }}>{description}</p>
        <button className="px-8 py-3 rounded-lg text-lg font-semibold transition duration-300" style={{ backgroundColor: theme.backgroundColor, color: theme.primaryColor }}>
          {buttonText}
        </button>
      </div>
    </section>
  )
}

