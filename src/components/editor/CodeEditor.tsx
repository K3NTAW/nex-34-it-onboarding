"use client";

import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
}

export default function CodeEditor({ value, onChange }: CodeEditorProps) {
  return (
    <Editor
      height="400px"
      defaultLanguage="javascript"
      value={value}
      onChange={onChange}
    />
  );
}