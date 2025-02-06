import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { NavigationHeader } from "../navigation/navigation-header";
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className="group relative overflow-hidden border-none">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-full gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full hover:bg-zinc-200 transition-colors"
                        >
                            <Github className="w-6 h-6 text-zinc-900" />
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-full hover:bg-zinc-200 transition-colors"
                            >
                                <ExternalLink className="w-6 h-6 text-zinc-900" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

// Sample project data
const sampleProjects: Project[] = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio built with Next.js and Tailwind CSS",
        tech: ["Next.js", "React", "Typescript", "Tailwind"],
        github: "https://github.com/riooastfu/portfoliov3",
        live: "https://portfolrioo.vercel.app/",
        image: "/images/projects/portfolrioo.png"
    },
    {
        id: 2,
        title: "Belik Dulu",
        description: "Simple backend app for e-commerce",
        tech: ["Node.js", "Express", "Typescript", "MySql"],
        github: "https://github.com/riooastfu/belikdulu-backend.git",
        live: "https://github.com/riooastfu/belikdulu-backend.git",
        image: "/images/projects/github-logo.jpeg"
    },
    {
        id: 3,
        title: "Discord Clone",
        description: "Clone web app - Discord",
        tech: ["Next.js", "React", "Typescript", "MySql"],
        github: "https://github.com/riooastfu/discord-clone.git",
        live: "https://github.com/riooastfu/discord-clone.git",
        image: "/images/projects/github-logo.jpeg"
    },
    {
        id: 4,
        title: "Auth App",
        description: "Simple authentication app using Auth.js",
        tech: ["Next.js", "React", "Typescript", "Auth.js", "MySql"],
        github: "https://github.com/riooastfu/auth-app.git",
        live: "https://github.com/riooastfu/auth-app.git",
        image: "/images/projects/github-logo.jpeg"
    },
    {
        id: 5,
        title: "Web Dashboard",
        description: "Dashboard for GIS, Plantation, and Admin control app",
        tech: ["Next.js", "React", "Node.js", "Typescript", "MySql"],
        github: "https://github.com/riooastfu/master-dashboard.git",
        live: "https://github.com/riooastfu/master-dashboard.git",
        image: "/images/projects/gis.png"
    },
    {
        id: 6,
        title: "Web Dashboard Backend",
        description: "Backend app for Web Dashboard",
        tech: ["Node.js", "Express", "MySql"],
        github: "https://github.com/riooastfu/eplantbe.git",
        live: "https://github.com/riooastfu/eplantbe.git",
        image: "/images/projects/github-logo.jpeg"
    }
];

export const ProjectsScreen: React.FC = () => {
    return (
        <div id="projects" className="flex flex-col min-h-screen p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-6 w-full max-w-7xl mx-auto">
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold">Projects.</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        A showcase of my recent work and side projects
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsScreen;