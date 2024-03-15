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
                        Hello! It's me Rio. I'm a passionate developer with a love for technology that began way back in high school.  For the past two years, I've been honing my skills as a full-stack developer, tackling both mobile and web projects. <br /> <br />

                        While coding is my primary focus, I also have a creative side that enjoys exploring the world of digital art.  I love working on vector art,  creating WPAP illustrations, and designing logos and posters. <br /> <br />

                        When I'm not coding or creating art, you might find me rocking out on my guitar or battling it out in some epic PC games!  Apex Legends, Valorant, CS:GO, and Dota are some of my current favorites. <br /> <br />

                        I'm always eager to learn and grow, and I'm excited to see what the future holds in the ever-evolving world of technology.\
                    </p>
                </div>
            </div>
        </div>
    )
}