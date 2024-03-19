import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export const NavigationFooter = () => {
    return (
        <div className="flex w-full h-60 p-4 mt-8 text-zinc-700 dark:text-zinc-50 items-center">
            <div className="flex flex-col h-full w-96 items-start md:items-center justify-center">
                <p className="text-lg md:text-xl font-extrabold bg-lime-300">riooasbr.</p>
                <p className="text-[12px] md:text-xs md:text-center">This app build using Typescript, NextJS, Shadcn/ui.</p>
            </div>
            <div className="flex flex-col h-full w-full ml-4 gap-y-1 justify-center items-end">
                <p className="text-lg md:text-xl font-extrabold">Hit me up!</p>
                <a href="mailto:rio.alaska123@gmail.com" className="bg-lime-300 text-[12px] underline md:no-underline hover:cursor-pointer hover:underline">rio.alaska123@gmail.com</a>
                <div className="flex gap-x-1">
                    <a href="https://github.com/riooastfu" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Github size={20} />
                    </a>
                    <a href="#" className="hover:scale-125 transition ease-in-out">
                        <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/riooasbr/" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="hover:scale-125 transition ease-in-out">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/rio-ozora-alaska-sembiring-b025b2210/" target="_blank" className="hover:scale-125 transition ease-in-out">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

        </div>
    )

}