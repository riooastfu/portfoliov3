"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Blocks, BriefcaseBusiness, Facebook, Github, GraduationCap, Instagram, Linkedin, LinkedinIcon, Menu, Moon, Palette, Sun, Twitter, User } from "lucide-react";
import { useTheme } from "next-themes";
import { scrollToHash } from "@/lib/scrollhash";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import Typewriter from 'typewriter-effect';

export const HomeScreen = () => {
    const { setTheme, theme } = useTheme();
    return (
        <div className="flex flex-col h-[100vh] justify-center items-center">
            <div className="flex flex-col bg-[url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center w-full h-5/6 justify-between">
                <div className="flex w-full p-4 text-[#e7ffa6] items-center justify-between">
                    <p className="font-bold">riooasbr.</p>
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
                            <Separator />
                            <div className="flex flex-col">
                                <Button variant="ghost" onClick={() => setTheme('light')} className="justify-start p-2">
                                    <Sun className="mr-2 h-4 w-4" />
                                    <span>Light Theme</span>
                                </Button>
                                <Button variant="ghost" onClick={() => setTheme('dark')} className="justify-start p-2">
                                    <Moon className="mr-2 h-4 w-4" />
                                    <span>Dark Theme</span>
                                </Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="flex flex-col w-full p-4 text-[#e7ffa6] justify-center items-center">
                    <p className="text-5xl font-semibold">Hi Folks</p>
                    <Typewriter
                        options={{
                            strings: ['Wassup?', 'Welcome to my portfolio page'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <div className="flex w-full p-4 gap-x-2 text-[#e7ffa6] justify-center items-center">
                    <a href="https://github.com/riooastfu" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Github size={25} />
                    </a>
                    <a href="#" className="hover:scale-125 transition ease-in-out">
                        <Facebook size={25} />
                    </a>
                    <a href="https://www.instagram.com/riooasbr/" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Instagram size={25} />
                    </a>
                    <a href="#" className="hover:scale-125 transition ease-in-out">
                        <Twitter size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/rio-ozora-alaska-sembiring-b025b2210/" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Linkedin size={25} />
                    </a>
                </div>
            </div>
        </div>
    )
}