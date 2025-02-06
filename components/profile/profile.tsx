import Image from "next/image";
import { NavigationHeader } from "../navigation/navigation-header"
import ava from '@/public/svg/blob.svg';

export const ProfileScreen = () => {
    return (
        <div id="profile" className="flex flex-col h-[100vh] p-4 items-center">
            <NavigationHeader />
            <div className="md:grid md:grid-cols-2 h-full items-center">
                <div>
                    <Image src={ava} alt="ava" className="h-56 md:h-96" />
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-3xl font-extrabold">About Me.</p>
                    <p className="text-justify">
                        {`Hello! I'm Rio, a passionate full-stack developer with a strong foundation in both web and mobile application development. With expertise in modern technologies like React, Next.js, and Node.js, I focus on building efficient, scalable, and user-friendly solutions.`} <br /> <br />

                        {`Beyond coding, I have a creative side that fuels my love for digital art. I enjoy working on vector illustrations, WPAP artwork, and designing logos and posters.`} <br /> <br />

                        {`When I’m not developing or creating art, you’ll probably find me playing guitar or diving into competitive PC games like Apex Legends, Valorant, CS:GO, and Dota.`} <br /> <br />

                        {`I'm always eager to explore new technologies, refine my skills, and take on new challenges in the ever-evolving world of tech.`}
                    </p>
                </div>
            </div>
        </div>
    )
}