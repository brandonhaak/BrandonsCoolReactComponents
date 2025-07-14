import Glass from "./glass";

export default function GlassParent() {
  return (
    <div
      className="flex items-center justify-center p-4 min-h-[50vh] relative"
      style={{
        backgroundImage: "url('https://jooinn.com/images/nature-background-40.jpg')",
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
