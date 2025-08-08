"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import { Button } from "@/components/ui/button";
import { courseData } from "@/lib/course-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Fireworks from "@/components/animations/Fireworks";

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const { slug } = React.use(params);
  const course = courseData[slug];

  useEffect(() => {
    if (course) {
      setCode(course.starterCode);
    }
  }, [course]);

  const courseName = slug.replace(/-/g, " ");

  const handleRunCode = async () => {
    setIsLoading(true);
    const language = slug.includes("python")
      ? "python"
      : slug.includes("sql")
      ? "sql"
      : "javascript";

    const response = await fetch("/api/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, language }),
    });

    const data = await response.json();
    const userOutput = data.run.output;
    setOutput(userOutput);
    setIsLoading(false);

    // Check if the answer is correct
    if (course && userOutput.trim() === course.expectedOutput.trim()) {
      setShowFireworks(true);
    }
  };

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Course not found</h1>
      </div>
    );
  }

  // Extract the goal from the question (everything before "Guidance:")
  const goalMatch = course.question.match(/\*\*Goal:\*\*([\s\S]*?)(?=\*\*Guidance:\*\*|$)/);
  const goal = goalMatch ? goalMatch[1].trim() : course.question;

  // Extract the guidance (everything after "Guidance:")
  const guidanceMatch = course.question.match(/\*\*Guidance:\*\*([\s\S]*)/);
  const guidance = guidanceMatch ? guidanceMatch[1].trim() : "";

  return (
    <div className="flex min-h-screen">
      <Fireworks 
        isVisible={showFireworks} 
        onComplete={() => setShowFireworks(false)} 
      />
      <main className="flex-1 p-8">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            &larr; Back to Courses
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-8">
          Course: {courseName}
        </h1>
        <div className="flex gap-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Question</h2>
            <p className="whitespace-pre-wrap mb-4">{goal}</p>
            
            {guidance && (
              <div className="mb-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowHint(!showHint)}
                  className="mb-2"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>
                {showHint && (
                  <div className="border rounded-md p-4 bg-blue-50">
                    <h3 className="font-bold mb-2">💡 Guidance:</h3>
                    <div className="whitespace-pre-wrap text-sm">{guidance}</div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Code Editor</h2>
            <CodeEditor value={code} onChange={(value) => setCode(value || "")} />
            <div className="mt-4 flex justify-end">
              <Button onClick={handleRunCode} disabled={isLoading}>
                {isLoading ? "Running..." : "Run Code"}
              </Button>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Output</h3>
              <div className="border rounded-md p-4 h-32 bg-gray-100">
                <pre>{output}</pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}