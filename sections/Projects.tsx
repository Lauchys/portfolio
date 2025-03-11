"use client";

import * as React from "react";
import { ArrowUpRight, DatabaseIcon, Gamepad2, Globe } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  haveLink: boolean;
  link?: string;
  icon?: React.ReactNode;
  tags: string[];
}

const ProjectCard = ({
  title,
  description,
  tags,
  icon,
  link,
  haveLink,
}: Omit<Project, "id">) => (
  <div
    className="dark:bg-[#212121] p-4 rounded-lg cursor-pointer border-2 border-gray-200 dark:border-[#222222] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    onClick={() => {
      if (haveLink) {
        window.open(link, "_blank");
      }
    }}
  >
    <div className="relative">
      {haveLink && (
        <ArrowUpRight className="absolute top-0 right-0 w-10 cursor-pointer" />
      )}
      <div className="flex items-center">{icon}</div>
    </div>
    <h2 className="text-lg my-4 font-bold">{title}</h2>
    <p className="dark:text-gray-300 text-gray-500 text-sm leading-5 font-mono">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="mt-1 bg-gray-200 dark:bg-gray-200 text-black px-2 py-0.5 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const projects: Project[] = [
  {
    id: 1,
    title: "Tetris AI",
    description:
      "Classic Tetris game with a twist. Score tracking, increasing difficulty, local or online multiplayer, and a player-vs-AI mode.",
    icon: <Gamepad2 className="w-10 mb-2" />,
    link: "https://github.com/lauchydev/tetris-ai",
    haveLink: true,
    tags: ["Java", "Swing", "Socket"],
  },
  {
    id: 2,
    title: "Lead Database Engineer",
    description:
      "Designed and implemented a sizable database system using MySQL and PostgreSQL for a fashion retailer.",
    icon: <DatabaseIcon className="w-10 mb-2" />,
    haveLink: false,
    tags: ["MySQL", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Web Developer",
    description:
      "Using agile development methodologies, I worked with a team of developers from the ground up to create a web application for a research company.",
    icon: <Globe className="w-10 mb-2" />,
    haveLink: false,
    tags: ["TailwindCSS", "Express", "Node.js", "Angular", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 mt-10 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Experience</h1>
        <div className="grid grid-cols-1 gap-6 my-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
