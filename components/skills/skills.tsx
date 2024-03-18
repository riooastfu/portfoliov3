import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { NavigationHeader } from "../navigation/navigation-header"

import { data } from "@/components/skills/data";

export const SkillsScreen = () => {
    return (
        <div id="skills" className="flex flex-col h-[100vh] p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-2 h-full w-full">
                <p className="text-3xl font-extrabold">Skills.</p>
                <Tabs defaultValue="language" className="w-full h-full">
                    <TabsList>
                        <TabsTrigger value="language">Language</TabsTrigger>
                        <TabsTrigger value="framework">Framework</TabsTrigger>
                        <TabsTrigger value="dbms">DBMS</TabsTrigger>
                        <TabsTrigger value="other">Other</TabsTrigger>
                    </TabsList>
                    <TabsContent value="language">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "language" &&
                                    <TooltipProvider key={item.id}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col h-36 p-2 items-center justify-center bg-zinc-100 rounded-md hover:cursor-pointer">
                                                    <Image src={item.ico} alt="ava" className="h-16" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" align="end">
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="framework">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "framework" &&
                                    <TooltipProvider key={item.id}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col h-36 p-2 items-center justify-center bg-zinc-100 rounded-md hover:cursor-pointer">
                                                    <Image src={item.ico} alt="ava" className="h-16" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" align="end">
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="dbms">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "dbms" &&
                                    <TooltipProvider key={item.id}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col h-36 p-2 items-center justify-center bg-zinc-100 rounded-md hover:cursor-pointer">
                                                    <Image src={item.ico} alt="ava" className="h-16" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" align="end">
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="other">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "other" &&
                                    <TooltipProvider key={item.id}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="flex flex-col h-36 p-2 items-center justify-center bg-zinc-100 rounded-md hover:cursor-pointer">
                                                    <Image src={item.ico} alt="ava" className="h-16" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="bottom" align="end">
                                                <p>{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}