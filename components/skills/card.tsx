"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillType } from './data';

interface CardProps {
    item: SkillType;
}

export const Card: React.FC<CardProps> = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <motion.div
                        className="relative h-36 w-full rounded-md bg-zinc-100 dark:bg-zinc-800 cursor-pointer overflow-hidden"
                        initial={false}
                        whileHover={{
                            scale: 1.02,
                            rotateX: 10,
                            rotateY: 10,
                            translateZ: 20
                        }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        style={{
                            transformStyle: "preserve-3d",
                            transform: "perspective(1000px)",
                        }}
                    >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 h-full w-full rounded-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />

                        {/* Content */}
                        <div className="relative flex flex-col h-full w-full items-center justify-center p-4">
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Hover overlay */}
                            <div className="bg-lime-200 absolute left-0 top-0 h-full w-full transition rounded-md opacity-0 group-hover:opacity-80" />
                        </div>

                        {/* Title label */}
                        <span className="text-zinc-100 bg-zinc-800 p-1 rounded-br-md rounded-bl-md absolute top-0 left-[1.5rem] inline-block translate-y-[-40px] duration-300 group-hover:translate-y-0 text-sm">
                            {item.name}
                        </span>

                        {/* 3D lighting effect */}
                        <div
                            className={cn(
                                "absolute inset-0 rounded-md opacity-0 transition-opacity duration-300",
                                "bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20",
                                isHovered ? "opacity-100" : ""
                            )}
                        />
                    </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-zinc-500">{item.experience}</p>
                    {item.description && (
                        <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};