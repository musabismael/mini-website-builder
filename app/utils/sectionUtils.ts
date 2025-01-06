import { LayoutTemplate, Type, Image, FootprintsIcon as FooterIcon, Star, PhoneCall, MessageCircle, DollarSign, Users } from 'lucide-react'
import { Section, SectionProps, HeaderProps, HeroProps, FooterProps, ContentProps, FeaturesProps, TestimonialsProps, PricingProps, TeamProps, CTAProps } from '../types/section'

export const sectionTypes = [
  { id: 'header', name: 'Header', icon: LayoutTemplate },
  { id: 'hero', name: 'Hero', icon: Image },
  { id: 'content', name: 'Content', icon: Type },
  { id: 'features', name: 'Features', icon: Star },
  { id: 'testimonials', name: 'Testimonials', icon: MessageCircle },
  { id: 'pricing', name: 'Pricing', icon: DollarSign },
  { id: 'team', name: 'Team', icon: Users },
  { id: 'cta', name: 'Call to Action', icon: PhoneCall },
  { id: 'footer', name: 'Footer', icon: FooterIcon },
]

export function getDefaultProps(type: Section['type']): SectionProps {
  switch (type) {
    case 'header':
      return { title: 'Header', links: ['Home', 'About', 'Contact'] } as HeaderProps
    case 'hero':
      return { title: 'Welcome', description: 'This is a hero section', imageUrl: 'https://via.placeholder.com/800x400' } as HeroProps
    case 'footer':
      return { text: '© 2023 Mini Website Builder', links: ['Privacy Policy', 'Terms of Service'] } as FooterProps
    case 'content':
      return { title: 'Content Section', text: 'This is a content section. You can add your own content here.' } as ContentProps
    case 'features':
      return {
        title: 'Our Features',
        features: [
          { title: 'Feature 1', description: 'Description of feature 1' },
          { title: 'Feature 2', description: 'Description of feature 2' },
          { title: 'Feature 3', description: 'Description of feature 3' },
        ]
      } as FeaturesProps
    case 'testimonials':
      return {
        title: 'What Our Customers Say',
        testimonials: [
          { name: 'John Doe', role: 'CEO, Company A', content: 'This product has transformed our business!', avatar: 'https://via.placeholder.com/100' },
          { name: 'Jane Smith', role: 'CTO, Company B', content: 'Incredible support and features.', avatar: 'https://via.placeholder.com/100' },
          { name: 'Bob Johnson', role: 'Freelancer', content: 'I can\'t imagine working without it now.', avatar: 'https://via.placeholder.com/100' },
        ]
      } as TestimonialsProps
    case 'pricing':
      return {
        title: 'Our Pricing Plans',
        tiers: [
          { name: 'Basic', price: '$9.99/mo', features: ['Feature 1', 'Feature 2', 'Feature 3'], cta: 'Start Basic' },
          { name: 'Pro', price: '$19.99/mo', features: ['Everything in Basic', 'Feature 4', 'Feature 5'], cta: 'Start Pro' },
          { name: 'Enterprise', price: 'Custom', features: ['Everything in Pro', 'Feature 6', 'Feature 7'], cta: 'Contact Us' },
        ]
      } as PricingProps
    case 'team':
      return {
        title: 'Meet Our Team',
        members: [
          { name: 'Alice Williams', role: 'CEO', bio: 'Visionary leader with 15 years of experience.', image: 'https://via.placeholder.com/200' },
          { name: 'Charlie Brown', role: 'CTO', bio: 'Tech genius behind our innovative solutions.', image: 'https://via.placeholder.com/200' },
          { name: 'Diana Martinez', role: 'Head of Design', bio: 'Creative mind shaping our user experiences.', image: 'https://via.placeholder.com/200' },
        ]
      } as TeamProps
    case 'cta':
      return { title: 'Call to Action', description: 'Sign up now!', buttonText: 'Sign Up' } as CTAProps
  }
}