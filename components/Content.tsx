import { Theme } from '../../types/theme'

interface ContentProps {
  title: string
  text: string
  theme: Theme
}

export default function Content({ title, text, theme }: ContentProps) {
  return (
    <section className="py-16" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: theme.textColor }}>{title}</h2>
        <p className="text-lg max-w-3xl mx-auto text-center" style={{ color: theme.textColor }}>{text}</p>
      </div>
    </section>
  )
}

