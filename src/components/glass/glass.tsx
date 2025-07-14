interface GlassProps {
  className?: string;
  children: React.ReactNode;
}

export default function Glass({ children, className }: GlassProps) {
  return (
    <>
      <div
        className={`relative bg-gray-300/15 border border-gray-300 dark:border-gray-700 backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md shadow-gray-500/20 dark:shadow-gray-900/50 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
