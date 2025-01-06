import { Theme } from '@/app/types/theme'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface TeamProps {
  title: string
  members: TeamMember[]
  theme: Theme
}

export default function Team({ title, members, theme }: TeamProps) {
  return (
    <section className="py-16" style={{ backgroundColor: theme.backgroundColor }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.textColor }}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.primaryColor }}>{member.name}</h3>
              <p className="text-sm mb-4" style={{ color: theme.textColor }}>{member.role}</p>
              <p className="text-sm" style={{ color: theme.textColor }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

