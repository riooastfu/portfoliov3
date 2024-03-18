import { NavigationHeader } from "../navigation/navigation-header"
import { Card } from "./card"
import { edu, exp } from "./data"

export const ResumeScreen = () => {
    return (
        <div id="resume" className="flex flex-col h-[100vh] p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-2 w-full h-full">
                <p className="text-3xl font-extrabold">Resume.</p>
                <div className="md:grid md:grid-cols-2 gap-x-5 h-full">
                    <div className="flex flex-col w-full md:h-full mb-3 gap-y-2">
                        <p className="font-extrabold text-lg">Education</p>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            {
                                edu.map((item, index) => (
                                    <Card key={index} item={item} />
                                ))
                            }
                        </ol>
                    </div>
                    <div className="flex flex-col w-full md:h-full gap-y-2">
                        <p className="font-extrabold text-lg">Experience</p>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            {
                                exp.map((item, index) => (
                                    <Card key={index} item={item} />
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}