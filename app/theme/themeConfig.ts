export const defaultTheme = {
    primaryColor: '#3B82F6',
    secondaryColor: '#1F2937',
    backgroundColor: '#F3F4F6',
    textColor: '#111827',
  }
  
  export type Theme = typeof defaultTheme
  
  export function setTheme(theme: Theme) {
    document.documentElement.style.setProperty('--color-primary', theme.primaryColor)
    document.documentElement.style.setProperty('--color-secondary', theme.secondaryColor)
    document.documentElement.style.setProperty('--color-background', theme.backgroundColor)
    document.documentElement.style.setProperty('--color-text', theme.textColor)
  }
  
  