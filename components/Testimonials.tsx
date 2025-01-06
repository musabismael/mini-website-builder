import { Theme } from '@/app/types/theme'
import Image from 'next/image'

interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

interface TestimonialsProps {
  title: string
  testimonials: Testimonial[]
  theme: Theme
}

export default function Testimonials({ title, testimonials, theme }: TestimonialsProps) {
  return (
    <section className="py-16" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.textColor }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4" style={{ color: theme.textColor }}>{testimonial.content}</p>
              <div className="flex items-center">
                <Image src={testimonial.avatar} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold" style={{ color: theme.primaryColor }}>{testimonial.name}</h3>
                  <p className="text-sm" style={{ color: theme.textColor }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

