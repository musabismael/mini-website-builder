'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import Sidebar from './Sidebar'
import PreviewArea from './PreviewArea'
import { Section } from '@/app/types/section'
import { Theme } from '@/app/types/theme'
import { nanoid } from 'nanoid'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDebounce } from '@/app/hooks/useDebounce'
import ColorPicker from './ColorPicker'
import { getDefaultProps } from '@/app/utils/sectionUtils'

export default function WebsiteBuilder() {
  const [sections, setSections] = useState<Section[]>([])
  const [theme, setTheme] = useState<Theme>({
    primaryColor: '#3B82F6',
    secondaryColor: '#1F2937',
    textColor: '#111827',
    backgroundColor: '#F3F4F6',
  })

  const debouncedTheme = useDebounce(theme, 300)

  const onDragEnd = useCallback((result: DropResult) => {
    const { source, destination } = result

    if (!destination) return

    if (source.droppableId === 'sidebar' && destination.droppableId === 'preview') {
      const newSection: Section = {
        id: nanoid(),
        type: result.draggableId as Section['type'],
        props: getDefaultProps(result.draggableId as Section['type'])
      }
      setSections(prevSections => [...prevSections, newSection])
      toast.success('Section added successfully!')
    } else if (source.droppableId === 'preview' && destination.droppableId === 'preview') {
      setSections(prevSections => {
        const newSections = Array.from(prevSections)
        const [reorderedSection] = newSections.splice(source.index, 1)
        newSections.splice(destination.index, 0, reorderedSection)
        return newSections
      })
      toast.info('Section reordered successfully!')
    }
  }, [])

  const updateSection = useCallback((id: string, newProps: any) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === id ? { ...section, props: { ...section.props, ...newProps } } : section
      )
    )
    toast.success('Section updated successfully!')
  }, [])

  const deleteSection = useCallback((id: string) => {
    setSections(prevSections => prevSections.filter(section => section.id !== id))
    toast.error('Section deleted successfully!')
  }, [])

  const exportConfig = useCallback(() => {
    const config = JSON.stringify({ sections, theme }, null, 2)
    const blob = new Blob([config], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'website-config.json'
    a.click()
    toast.success('Configuration exported successfully!')
  }, [sections, theme])

  const importConfig = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        try {
          const { sections: importedSections, theme: importedTheme } = JSON.parse(content)
          setSections(importedSections)
          setTheme(importedTheme)
          toast.success('Configuration imported successfully!')
        } catch (error) {
          console.error('Error parsing imported file:', error)
          toast.error('Error importing configuration. Please check the file format.')
        }
      }
      reader.readAsText(file)
    }
  }, [])

  const memoizedSections = useMemo(() => sections, [sections])

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor)
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor)
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor)
    document.documentElement.style.setProperty('--text-color', theme.textColor)
  }, [theme])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mini Website Builder</h1>
            <div className="flex space-x-4">
              <ColorPicker label="Primary Color" color={theme.primaryColor} onChange={(color) => setTheme(prev => ({ ...prev, primaryColor: color }))} />
              <ColorPicker label="Secondary Color" color={theme.secondaryColor} onChange={(color) => setTheme(prev => ({ ...prev, secondaryColor: color }))} />
              <ColorPicker label="Text Color" color={theme.textColor} onChange={(color) => setTheme(prev => ({ ...prev, textColor: color }))} />
              <ColorPicker label="Background Color" color={theme.backgroundColor} onChange={(color) => setTheme(prev => ({ ...prev, backgroundColor: color }))} />
              <button onClick={exportConfig} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Export
              </button>
              <label className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 cursor-pointer">
                Import
                <input type="file" onChange={importConfig} className="hidden" accept=".json" />
              </label>
            </div>
          </div>
          <PreviewArea 
            sections={memoizedSections} 
            updateSection={updateSection}
            deleteSection={deleteSection}
            theme={debouncedTheme}
          />
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </DragDropContext>
  )
}

