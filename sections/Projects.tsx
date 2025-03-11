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
}

const ProjectCard = ({
  title,
  description,
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
  },
  {
    id: 2,
    title: "Lead Database Engineer",
    description: "This is a description of project 2.",
    icon: <DatabaseIcon className="w-10 mb-2" />,
    haveLink: false,
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a description of project 3.",
    icon: <Globe className="w-10 mb-2" />,
    haveLink: false,
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
