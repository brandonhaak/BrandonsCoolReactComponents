// src/App.tsx
import GalleryItem from "./components/galleryItem";
import GlassParent from "./components/glass/glassParent";
import "./styles/tailwind.css"; // Ensure this path is correct

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col flex-grow">
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Brandon's Gallery of Cool React Components
        </h1>
        <GalleryItem
          name="Glass Effect Tile"
          description="An attempt at creating a glass effect, similar to the new Apple OS 26 design, using Tailwind CSS."
          component={<GlassParent />}
          files={[
        {
          fileName: "glass.tsx",
          code: `
            interface GlassProps {
  className?: string;
  children: React.ReactNode;
}

export default function Glass({ children, className }: GlassProps) {
  return (
    <div
      className={\`
    relative bg-gray-300/15 border border-gray-300 dark:border-gray-700
    backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md shadow-gray-500/20
    dark:shadow-gray-900/50 \${className}
      \`}
    >
      {children}
    </div>
  );
}
          `,
        },
        {
          fileName: "glassParent.tsx",
          code: `
          import Glass from "./glass";
          
export default function GlassParent() {
  return (
    <div
      className="flex items-center justify-center p-4 min-h-[50vh] relative"
      style={{
        backgroundImage: "url('./nature-background-40.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Glass className="rounded-lg">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Glass Effect Tile
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is a simple glass effect tile using Tailwind CSS.
          </p>
        </div>
      </Glass>
    </div>
  );
}
          `
        }    
      ]}
        />
      </div>
      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Brandon Haak</p>
      </footer>
    </div>
  );
}

export default App;
