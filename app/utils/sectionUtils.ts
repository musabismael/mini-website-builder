import { LayoutTemplate, Type, Image, FootprintsIcon as FooterIcon, Star, PhoneCall } from 'lucide-react'
import { Section } from '../types/section'

export const sectionTypes = [
  { id: 'header', name: 'Header', icon: LayoutTemplate },
  { id: 'hero', name: 'Hero', icon: Image },
  { id: 'content', name: 'Content', icon: Type },
  { id: 'features', name: 'Features', icon: Star },
  { id: 'cta', name: 'Call to Action', icon: PhoneCall },
  { id: 'footer', name: 'Footer', icon: FooterIcon },
]

export function getDefaultProps(type: Section['type']) {
  switch (type) {
    case 'header':
      return { title: 'Header', links: ['Home', 'About', 'Contact'] }
    case 'hero':
      return { title: 'Welcome', description: 'This is a hero section', imageUrl: 'https://via.placeholder.com/800x400' }
    case 'footer':
      return { text: '© 2023 Mini Website Builder', links: ['Privacy Policy', 'Terms of Service'] }
    case 'content':
      return { title: 'Content Section', text: 'This is a content section. You can add your own content here.' }
    case 'features':
      return {
        title: 'Our Features',
        features: [
          { title: 'Feature 1', description: 'Description of feature 1' },
          { title: 'Feature 2', description: 'Description of feature 2' },
          { title: 'Feature 3', description: 'Description of feature 3' },
        ]
      }
    case 'cta':
      return { title: 'Call to Action', description: 'Sign up now!', buttonText: 'Sign Up' }
    default:
      return {}
  }
}

