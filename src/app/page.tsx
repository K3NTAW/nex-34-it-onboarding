import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const courses = [
    // Level 1
    { id: 1, title: "Print Your Name", description: "🔰 Level 1: Super Simple", href: "/courses/print-your-name" },
    { id: 2, title: "Simple Addition", description: "🔰 Level 1: Super Simple", href: "/courses/simple-addition" },
    { id: 3, title: "Greet the User", description: "🔰 Level 1: Super Simple", href: "/courses/greet-the-user" },
    { id: 4, title: "Even or Odd", description: "🔰 Level 1: Super Simple", href: "/courses/even-or-odd" },
    // Level 2
    { id: 5, title: "Age in 5 Years", description: "🧩 Level 2: Building Logic", href: "/courses/age-in-5-years" },
    { id: 6, title: "Number Comparison", description: "🧩 Level 2: Building Logic", href: "/courses/number-comparison" },
    { id: 7, title: "Simple Calculator", description: "🧩 Level 2: Building Logic", href: "/courses/simple-calculator" },
    { id: 8, title: "Guess the Number", description: "🧩 Level 2: Building Logic", href: "/courses/guess-the-number" },
    // Level 3
    { id: 9, title: "Count to 10", description: "⚙️ Level 3: Using Loops and Conditions", href: "/courses/count-to-10" },
    { id: 10, title: "Multiplication Table", description: "⚙️ Level 3: Using Loops and Conditions", href: "/courses/multiplication-table" },
    { id: 11, title: "Sum of Numbers from 1 to N", description: "⚙️ Level 3: Using Loops and Conditions", href: "/courses/sum-of-numbers" },
    { id: 12, title: "FizzBuzz (Mini Version)", description: "⚙️ Level 3: Using Loops and Conditions", href: "/courses/fizzbuzz" },
    // Level 4
    { id: 13, title: "Find the Maximum", description: "🧠 Level 4: Problem Solving", href: "/courses/find-the-maximum" },
    { id: 14, title: "Reverse a Word", description: "🧠 Level 4: Problem Solving", href: "/courses/reverse-a-word" },
    { id: 15, title: "Palindrome Checker", description: "🧠 Level 4: Problem Solving", href: "/courses/palindrome-checker" },
  ];

  const externalLinks = [
    { id: 1, title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 2, title: "W3Schools JavaScript", url: "https://www.w3schools.com/js/" },
    { id: 3, title: "JavaScript.info", url: "https://javascript.info/" },
    { id: 4, title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
    { id: 5, title: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS" },
    { id: 6, title: "JavaScript30", url: "https://javascript30.com/" },
  ];

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link href={course.href} key={course.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Start learning now!
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <aside className="w-64 p-8 border-l">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <ul>
          {externalLinks.map((link) => (
            <li key={link.id} className="mb-2">
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}