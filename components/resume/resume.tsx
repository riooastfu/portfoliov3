import { NavigationHeader } from "../navigation/navigation-header"

export const ResumeScreen = () => {
    return (
        <div id="resume" className="flex flex-col h-[100vh] p-4 items-center">
            <NavigationHeader />
            <div className="flex flex-col gap-y-2 w-full h-full">
                <p className="text-3xl font-extrabold">Resume.</p>
                <div className="grid grid-cols-2">
                    <div>
                        <p className="font-extrabold text-lg">Education</p>
                    </div>
                    <div>
                        <p className="font-extrabold text-lg">Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}