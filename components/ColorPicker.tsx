import { useState, useCallback } from 'react'
import { SketchPicker } from 'react-color'

interface ColorPickerProps {
  label: string
  color: string
  onChange: (color: string) => void
}

export default function ColorPicker({ label, color, onChange }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false)

  const handleChange = useCallback((newColor: any) => {
    onChange(newColor.hex)
  }, [onChange])

  return (
    <div className="relative">
      <button
        className="w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <div className="fixed inset-0" onClick={() => setShowPicker(false)} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  )
}

