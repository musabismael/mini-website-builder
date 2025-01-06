import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Section, SectionProps, HeaderProps, HeroProps, FooterProps, ContentProps, FeaturesProps, TestimonialsProps, PricingProps, TeamProps, CTAProps } from '@/app/types/section'
import { Theme } from '@/app/types/theme'
import { Edit, Trash2 } from 'lucide-react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'))
const Hero = dynamic(() => import('@/components/Hero'))
const Footer = dynamic(() => import('@/components/Footer'))
const Content = dynamic(() => import('@/components/Content'))
const Features = dynamic(() => import('@/components/Features'))
const CTA = dynamic(() => import('@/components/CTA'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Pricing = dynamic(() => import('@/components/Pricing'))
const Team = dynamic(() => import('@/components/Team'))

interface PreviewAreaProps {
  sections: Section[]
  updateSection: (id: string, newProps: SectionProps) => void
  deleteSection: (id: string) => void
  theme: Theme
}

export default function PreviewArea({ sections, updateSection, deleteSection, theme }: PreviewAreaProps) {
  const renderSection = (section: Section) => {
    const commonProps = { theme };
    switch (section.type) {
      case 'header':
        return <Header {...commonProps} {...(section.props as HeaderProps)} />
      case 'hero':
        return <Hero {...commonProps} {...(section.props as HeroProps)} />
      case 'footer':
        return <Footer {...commonProps} {...(section.props as FooterProps)} />
      case 'content':
        return <Content {...commonProps} {...(section.props as ContentProps)} />
      case 'features':
        return <Features {...commonProps} {...(section.props as FeaturesProps)} />
      case 'cta':
        return <CTA {...commonProps} {...(section.props as CTAProps)} />
      case 'testimonials':
        return <Testimonials {...commonProps} {...(section.props as TestimonialsProps)} />
      case 'pricing':
        return <Pricing {...commonProps} {...(section.props as PricingProps)} />
      case 'team':
        return <Team {...commonProps} {...(section.props as TeamProps)} />
      default:
        return null
    }
  }

  return (
    <div className="flex-1 p-4 overflow-auto" style={{ backgroundColor: theme.backgroundColor }}>
      <h2 className="text-xl font-bold mb-4" style={{ color: theme.textColor }}>Preview</h2>
      <Droppable droppableId="preview">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="min-h-full border-2 border-dashed border-gray-300 p-4 rounded-lg">
            {sections.map((section, index) => (
              <Draggable key={section.id} draggableId={section.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-4 relative group"
                  >
                    <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={() => {
                          const newProps = prompt('Enter new props (JSON format):', JSON.stringify(section.props, null, 2))
                          if (newProps) {
                            try {
                              updateSection(section.id, JSON.parse(newProps) as SectionProps)
                            } catch (error) {
                              console.error('Invalid JSON:', error)
                            }
                          }
                        }}
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {renderSection(section)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}