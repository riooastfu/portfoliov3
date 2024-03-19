import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { NavigationHeader } from "../navigation/navigation-header"

import { data } from "@/components/skills/data";
import { Card } from "./card";

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
                                    <Card item={item} />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="framework">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "framework" &&
                                    <Card item={item} />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="dbms">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "dbms" &&
                                    <Card item={item} />
                                ))
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="other">
                        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2">
                            {
                                data.map((item) => (
                                    item.type === "other" &&
                                    <Card item={item} />
                                ))
                            }
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}