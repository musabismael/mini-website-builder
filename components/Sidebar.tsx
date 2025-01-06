import { Droppable, Draggable } from 'react-beautiful-dnd'
import { LayoutTemplate, Type, Image, FootprintsIcon as FooterIcon, Star, PhoneCall } from 'lucide-react'
import { sectionTypes } from '../utils/sectionUtils'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Sections</h2>
      <Droppable droppableId="sidebar" isDropDisabled={true}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {sectionTypes.map((type, index) => (
              <Draggable key={type.id} draggableId={type.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-gray-100 p-3 rounded shadow-sm hover:bg-gray-200 transition duration-300 flex items-center space-x-2"
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

