import { Theme } from '@/app/types/theme'

interface Feature {
  title: string
  description: string
}

interface FeaturesProps {
  title: string
  features: Feature[]
  theme: Theme
}

export default function Features({ title, features, theme }: FeaturesProps) {
  return (
    <section className="py-16" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.textColor }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.primaryColor }}>{feature.title}</h3>
              <p style={{ color: theme.textColor }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

