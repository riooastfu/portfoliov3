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

type dataType = {
    id: number,
    name: string,
    type: string,
    ico: string
}

export const data: dataType[] = [
    {
        id: 1,
        name: "Javascript",
        type: "language",
        ico: js
    },
    {
        id: 2,
        name: "Typescript",
        type: "language",
        ico: ts
    },
    {
        id: 3,
        name: "Python",
        type: "language",
        ico: py
    },
    {
        id: 4,
        name: "PHP",
        type: "language",
        ico: php
    },
    {
        id: 5,
        name: "HTML",
        type: "language",
        ico: html
    },
    {
        id: 6,
        name: "NextJS",
        type: "framework",
        ico: nextjs
    },
    {
        id: 7,
        name: "ReactJS",
        type: "framework",
        ico: reactjs
    },
    {
        id: 8,
        name: "React Native",
        type: "framework",
        ico: rn
    },
    {
        id: 9,
        name: "Laravel",
        type: "framework",
        ico: laravel
    },
    {
        id: 10,
        name: "Codeigniter",
        type: "framework",
        ico: ci
    },
    {
        id: 11,
        name: "MySql",
        type: "dbms",
        ico: mysql
    },
    {
        id: 12,
        name: "SSMS",
        type: "dbms",
        ico: ssms
    },
    {
        id: 13,
        name: "CSS",
        type: "other",
        ico: css
    },
    {
        id: 14,
        name: "Tailwind",
        type: "other",
        ico: tailwind
    },
    {
        id: 15,
        name: "Bootstrap",
        type: "other",
        ico: bootstrap
    },
    {
        id: 16,
        name: "NodeJS",
        type: "other",
        ico: nodejs
    },
]