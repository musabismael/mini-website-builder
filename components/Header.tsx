import { Theme } from '@/app/types/theme'

interface HeaderProps {
  title: string
  links: string[]
  theme: Theme
}

export default function Header({ title, links, theme }: HeaderProps) {
  return (
    <header style={{ backgroundColor: theme.primaryColor }}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: theme.backgroundColor }}>{title}</h1>
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
    </header>
  )
}

