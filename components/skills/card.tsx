import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";

interface CardProps {
    item: {
        id: number,
        name: string,
        type: string,
        ico: string
    }
}

export const Card = ({ item }: CardProps) => {
    return (
        <TooltipProvider key={item.id}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="relative overflow-hidden group">
                        <div className="flex flex-col h-36 p-2 items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-md hover:cursor-pointer group">
                            <Image src={item.ico} alt="ava" className="h-16" />
                            <div className="bg-lime-200 absolute left-0 top-0 h-full w-full transition rounded-md opacity-0 group-hover:opacity-80"></div>
                        </div>

                        <span className="text-zinc-100 bg-zinc-800 p-1 rounded-br-md rounded-bl-md absolute top-0 left-[1.5rem] inline-block translate-y-[-40px] duration-300 group-hover:translate-y-0 text-sm">{item.name}</span>
                        {/* <h3 className="text-zinc-900 absolute top-4 left-6 translate-y-[30px] opacity-0 font-bold duration-300 group-hover:opacity-100">{item.name}</h3> */}
                    </div>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end">
                    <p>{item.name}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}