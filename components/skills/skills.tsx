"use client"

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavigationHeader } from "../navigation/navigation-header";
import { Card } from './card';
import { skills, SkillType } from './data';

interface SkillsGridProps {
    skills: SkillType[];
    type: SkillType['type'];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, type }) => {
    const filteredSkills = skills.filter(item => item.type === type);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export const SkillsScreen: React.FC = () => {
    const categories = [
        { value: 'language', label: 'Languages' },
        { value: 'framework', label: 'Frameworks' },
        { value: 'dbms', label: 'Databases' },
        { value: 'other', label: 'Other Tools' }
    ] as const;

    return (
        <div id="skills" className="flex flex-col min-h-screen p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-6 w-full max-w-7xl mx-auto">
                <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold">Skills.</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Technical skills and technologies I work with
                    </p>
                </div>

                <Tabs defaultValue="language" className="w-full">
                    <TabsList className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {categories.map(category => (
                            <TabsTrigger
                                key={category.value}
                                value={category.value}
                                className="w-full"
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map(category => (
                        <TabsContent
                            key={category.value}
                            value={category.value}
                            className="mt-0 min-h-[300px]"
                        >
                            <SkillsGrid skills={skills} type={category.value} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default SkillsScreen;