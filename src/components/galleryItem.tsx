import { useState } from "react";
import type CodeFile from "../interfaces/codeFile";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Square2StackIcon } from "@heroicons/react/24/outline";

interface GalleryItemProps {
  name: string;
  description: string;
  component: React.ReactNode;
  files: CodeFile[];
}

export default function GalleryItem({
  component,
  name,
  description,
  files,
}: GalleryItemProps) {
  const [activeTab, setActiveTab] = useState<string>("live");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const handleCopyCode = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy);
    setCopyButtonText("Copied!");
    setTimeout(() => setCopyButtonText("Copy"), 2000);
  };

  const renderTabs = () => (
    <div className="inline-flex overflow-hidden">
      <button
        onClick={() => setActiveTab("live")}
        className={`cursor-pointer bg-gray-50 dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] px-4 py-2 text-sm font-medium ${
          activeTab === "live" ? "text-gray-900 dark:text-white" : "text-gray-400"
        }`}
        style={{ borderRadius: 0 }}
      >
        Live
        {activeTab === "live" && (
          <div
            className="w-full h-1 bg-gray-900 dark:bg-white"
            style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
          ></div>
        )}
      </button>
      {files.map((file) => (
        <button
          key={file.fileName}
          onClick={() => setActiveTab(file.fileName)}
          className={`cursor-pointer bg-gray-50 dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] px-4 py-2 text-sm font-medium ${
            activeTab === file.fileName ? "text-gray-900 dark:text-white" : "text-gray-400"
          }`}
          style={{ borderRadius: 0 }}
        >
          {file.fileName}
          {activeTab === file.fileName && (
            <div
              className="w-full h-1 bg-gray-900 dark:bg-white"
              style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
            ></div>
          )}
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "live") {
      return <div className="p-4">{component}</div>;
    }

    const activeFile = files.find((file) => file.fileName === activeTab);
    if (!activeFile) return null;

    return (
      <div className="relative">
        <button
          onClick={() => handleCopyCode(activeFile.code)}
          className="absolute cursor-pointer top-2 right-2 px-3 py-1 text-gray-900 dark:text-white text-xs font-semibold rounded-md transition-colors hover:underline flex items-center"
          style={{ background: "none" }}
        >
          <Square2StackIcon className="w-4 h-4 mr-1" /> {copyButtonText}
        </button>
        <SyntaxHighlighter
          language="tsx"
          style={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? vscDarkPlus
              : materialLight
          }
          showLineNumbers
          customStyle={{
            borderRadius: "0 0 0.5rem 0.5rem",
            margin: 0,
            paddingTop: "2.5rem",
            backgroundColor: "transparent",
          }}
        >
          {activeFile.code.trim()}
        </SyntaxHighlighter>
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 grid grid-cols-1 rounded-lg space-y-2 shadow-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {name}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="flex-grow">
        <nav className="-mb-px flex space-x-2">{renderTabs()}</nav>
        <div className="bg-gray-50 dark:bg-[#1a1a1a]">{renderContent()}</div>
      </div>
    </div>
  );
}
