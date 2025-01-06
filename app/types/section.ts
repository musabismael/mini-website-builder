export interface Section {
  id: string
  type: 'header' | 'hero' | 'footer' | 'content' | 'features' | 'cta'
  props: any
}

