import { Theme } from '@/app/types/theme'

interface PricingTier {
  name: string
  price: string
  features: string[]
  cta: string
}

interface PricingProps {
  title: string
  tiers: PricingTier[]
  theme: Theme
}

export default function Pricing({ title, tiers, theme }: PricingProps) {
  return (
    <section className="py-16" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.textColor }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.primaryColor }}>{tier.name}</h3>
              <p className="text-3xl font-bold mb-6" style={{ color: theme.textColor }}>{tier.price}</p>
              <ul className="mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2 flex items-center" style={{ color: theme.textColor }}>
                    <svg className="w-4 h-4 mr-2 fill-current" style={{ color: theme.primaryColor }} viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded" style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

