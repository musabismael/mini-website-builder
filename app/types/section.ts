export interface HeaderProps {
  title: string;
  links: string[];
}

export interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface FooterProps {
  text: string;
  links: string[];
}

export interface ContentProps {
  title: string;
  text: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FeaturesProps {
  title: string;
  features: Feature[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
}

export interface PricingProps {
  title: string;
  tiers: PricingTier[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TeamProps {
  title: string;
  members: TeamMember[];
}

export interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
}

export type SectionProps =
  | HeaderProps
  | HeroProps
  | FooterProps
  | ContentProps
  | FeaturesProps
  | TestimonialsProps
  | PricingProps
  | TeamProps
  | CTAProps;

export interface Section {
  id: string;
  type: 'header' | 'hero' | 'footer' | 'content' | 'features' | 'cta' | 'testimonials' | 'pricing' | 'team';
  props: SectionProps;
}

