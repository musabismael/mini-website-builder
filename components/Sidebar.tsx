'use client'

import { Droppable, Draggable } from 'react-beautiful-dnd'
import { sectionTypes } from '@/app/utils/sectionUtils'
import { useEffect, useState } from 'react'

export default function Sidebar() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Sections</h2>
        <ul className="space-y-2">
          {sectionTypes.map((type) => (
            <li
              key={type.id}
              className="bg-gray-100 p-3 rounded shadow-sm hover:bg-gray-200 transition duration-300 flex items-center space-x-2"
            >
              <type.icon className="w-5 h-5" />
              <span>{type.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Sections</h2>
      <Droppable droppableId="sidebar" isDropDisabled={true}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {sectionTypes.map((type, index) => (
              <Draggable key={type.id} draggableId={type.id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`bg-gray-100 p-3 rounded shadow-sm hover:bg-gray-200 transition duration-300 flex items-center space-x-2 ${
                      snapshot.isDragging ? 'opacity-50' : ''
                    }`}
                  >
                    <type.icon className="w-5 h-5" />
                    <span>{type.name}</span>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  )
}