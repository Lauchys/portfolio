"use client";

import { Code2, GraduationCap, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["C", "C++", "Python", "Java", "JavaScript", "R", "CSS", "SQL"],
  },
  {
    title: "Technologies",
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Angular",
      "TailwindCSS",
      "Git",
      "Docker",
      "AWS",
    ],
  },
];

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 mt-5 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">About Me</h1>

        <div className="space-y-6">
          <p className="text-gray-500 dark:text-gray-300 leading-relaxed font-mono">
            Hey! I'm Lauchy, a passionate 3rd year Computer Science student with
            a focus on building scalable and efficient applications. I have a
            strong interest in full-stack development and cloud computing, where
            I combine my love for creating intuitive user experiences with
            robust backend systems.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="dark:bg-[#212121] p-4 rounded-lg border-2 border-gray-200 dark:border-stone-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-lg font-bold">{category.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="mt-1 bg-gray-200 dark:bg-gray-200 text-black px-2 py-0.5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
