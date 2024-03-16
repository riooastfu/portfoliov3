"use client"

import { Blocks, BriefcaseBusiness, GraduationCap, Menu, Palette, User } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Separator } from "../ui/separator"
import { scrollToHash } from "@/lib/scrollhash"

export const NavigationHeader = () => {
    return (
        <div className="flex w-full text-zinc-700 dark:text-zinc-50 items-center justify-end">
            <Popover>
                <PopoverTrigger>
                    <Button size="icon" variant="ghost">
                        <Menu size={20} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="flex flex-col p-2 gap-y-2">
                    <div className="px-2 flex justify-between items-center">
                        <p>riooasbr.</p>
                        <Avatar>
                            <AvatarImage src="/images/ava.jpeg" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <Separator />
                    <div className="flex flex-col">
                        <Button onClick={() => scrollToHash('profile')} variant="ghost" className="justify-start p-2">
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                        </Button>
                        <Button onClick={() => scrollToHash('resume')} variant="ghost" className="justify-start p-2">
                            <BriefcaseBusiness className="mr-2 h-4 w-4" />
                            <span>Resume</span>
                        </Button>
                        <Button variant="ghost" className="justify-start p-2">
                            <Blocks className="mr-2 h-4 w-4" />
                            <span>Skills</span>
                        </Button>
                        <Button variant="ghost" className="justify-start p-2">
                            <Palette className="mr-2 h-4 w-4" />
                            <span>Art</span>
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}