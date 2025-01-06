# Mini Website Builder

Mini Website Builder is a Next.js application that allows users to create simple websites using a drag-and-drop interface. Users can add pre-made sections, customize themes, and export/import their designs.

## Features

- Drag-and-drop interface for adding and reordering sections
- Pre-made sections: Header, Hero, Content, Features, Call to Action, and Footer
- Live preview of the website
- Theme customization with color pickers
- Export and import functionality for saving and loading designs
- Responsive design

## Technologies Used

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- react-beautiful-dnd for drag-and-drop functionality
- react-toastify for notifications
- react-color for color picking

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/musabismael/mini-website-builder
   cd mini-website-builder
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. **Adding Sections**: Drag sections from the sidebar on the left into the preview area.
2. **Reordering Sections**: Drag and drop sections within the preview area to reorder them.
3. **Editing Sections**: Hover over a section in the preview area and click the edit (pencil) icon to modify its content.
4. **Deleting Sections**: Hover over a section and click the delete (trash) icon to remove it.
5. **Customizing Theme**: Use the color pickers at the top of the page to change the primary, secondary, text, and background colors.
6. **Exporting Design**: Click the "Export" button to download your current design as a JSON file.
7. **Importing Design**: Click the "Import" button to upload a previously exported JSON file and load the design.

## Project Structure

- \`app/\`: Contains the main application code
  - \`components/\`: React components used in the application
  - \`types/\`: TypeScript type definitions
  - \`utils/\`: Utility functions
  - \`hooks/\`: Custom React hooks
  - \`layout.tsx\`: Root layout component
  - \`page.tsx\`: Main page component
- \`public/\`: Static assets
- \`tailwind.config.js\`: Tailwind CSS configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

