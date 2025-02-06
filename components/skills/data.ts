// data.ts
import js from '@/public/icons/javascript.svg';
import ts from '@/public/icons/typescript.svg';
import py from '@/public/icons/py.svg';
import php from '@/public/icons/php.svg';
import html from '@/public/icons/html.svg';
import nextjs from '@/public/icons/nextjs.svg';
import reactjs from '@/public/icons/react-js-icon.svg';
import rn from '@/public/icons/react-native-app-icon.svg';
import laravel from '@/public/icons/laravel.svg';
import ci from '@/public//icons/codeigniter.svg';
import mysql from '@/public/icons/mysql.svg';
import ssms from '@/public/icons/ssms.svg';
import css from '@/public/icons/css3.svg';
import bootstrap from '@/public/icons/bootstrap.svg';
import tailwind from '@/public/icons/tailwind.svg';
import nodejs from '@/public/icons/nodejs.svg';

export type SkillType = {
    id: number;
    name: string;
    type: 'language' | 'framework' | 'dbms' | 'other';
    icon: string;
    proficiency: number; // 0-100
    experience: string;
    description?: string;
}

export const skills: SkillType[] = [
    {
        id: 1,
        name: "Javascript",
        type: "language",
        icon: js,
        proficiency: 90,
        experience: "2+ years",
        description: "Modern ES6+, Async/Await, DOM manipulation"
    },
    {
        id: 2,
        name: "Typescript",
        type: "language",
        icon: ts,
        proficiency: 85,
        experience: "2+ years",
        description: "Type-safe development, Interfaces, Generics"
    },
    {
        id: 3,
        name: "Python",
        type: "language",
        icon: py,
        proficiency: 75,
        experience: "1+ years",
        description: "Data analysis, Automation, Web scraping"
    },
    {
        id: 4,
        name: "PHP",
        type: "language",
        icon: php,
        proficiency: 80,
        experience: "2+ years",
        description: "Backend development, API integration"
    },
    {
        id: 5,
        name: "HTML",
        type: "language",
        icon: html,
        proficiency: 95,
        experience: "2+ years",
        description: "Semantic markup, Accessibility, SEO"
    },
    {
        id: 6,
        name: "NextJS",
        type: "framework",
        icon: nextjs,
        proficiency: 85,
        experience: "2+ years",
        description: "Server-side rendering, API routes, Static generation"
    },
    {
        id: 7,
        name: "ReactJS",
        type: "framework",
        icon: reactjs,
        proficiency: 90,
        experience: "2+ years",
        description: "Hooks, Context, Custom hooks, State management"
    },
    {
        id: 8,
        name: "React Native",
        type: "framework",
        icon: rn,
        proficiency: 80,
        experience: "2+ years",
        description: "Cross-platform mobile development"
    },
    {
        id: 9,
        name: "Laravel",
        type: "framework",
        icon: laravel,
        proficiency: 75,
        experience: "2+ years",
        description: "MVC architecture, Eloquent ORM"
    },
    {
        id: 10,
        name: "Codeigniter",
        type: "framework",
        icon: ci,
        proficiency: 70,
        experience: "1+ year",
        description: "PHP framework, MVC pattern"
    },
    {
        id: 11,
        name: "MySQL",
        type: "dbms",
        icon: mysql,
        proficiency: 85,
        experience: "2+ years",
        description: "Database design, Query optimization"
    },
    {
        id: 12,
        name: "SSMS",
        type: "dbms",
        icon: ssms,
        proficiency: 75,
        experience: "2+ years",
        description: "SQL Server Management, Data modeling"
    },
    {
        id: 13,
        name: "CSS",
        type: "other",
        icon: css,
        proficiency: 90,
        experience: "2+ years",
        description: "Flexbox, Grid, Animations, Responsive design"
    },
    {
        id: 14,
        name: "Tailwind",
        type: "other",
        icon: tailwind,
        proficiency: 90,
        experience: "2+ years",
        description: "Utility-first CSS, Custom configurations"
    },
    {
        id: 15,
        name: "Bootstrap",
        type: "other",
        icon: bootstrap,
        proficiency: 85,
        experience: "2+ years",
        description: "Responsive layouts, Components"
    },
    {
        id: 16,
        name: "NodeJS",
        type: "other",
        icon: nodejs,
        proficiency: 80,
        experience: "2+ years",
        description: "Express, API development, NPM"
    },
];