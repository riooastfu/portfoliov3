import { NavigationHeader } from "../navigation/navigation-header"
import { ScrollArea } from "@/components/ui/scroll-area"

import { data } from "./data"
import Image from "next/image"

export const ArtScreen = () => {
    return (
        <div id="art" className="flex flex-col h-[100vh] p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-2 w-full h-full">
                <p className="text-3xl font-extrabold">Collection.</p>
                <ScrollArea className="w-full h-[85vh] whitespace-nowrap rounded-md">
                    <div className="w-full columns-2 md:columns-3 gap-2">
                        {
                            data.map((item) => (
                                <div key={item.id} className="mb-2">
                                    <Image src={item.src} alt={item.alt} className="" />
                                </div>
                            ))
                        }
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}