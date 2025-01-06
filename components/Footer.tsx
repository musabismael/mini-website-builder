import { Theme } from '@/app/types/theme'

interface FooterProps {
  text: string
  links: string[]
  theme: Theme
}

export default function Footer({ text, links, theme }: FooterProps) {
  return (
    <footer style={{ backgroundColor: theme.secondaryColor }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0" style={{ color: theme.backgroundColor }}>{text}</p>
          <nav>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-gray-300 transition duration-300" style={{ color: theme.backgroundColor }}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

