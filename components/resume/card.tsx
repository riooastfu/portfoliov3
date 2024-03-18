import { GraduationCap } from "lucide-react"

interface CardProps {
    item: {
        id?: number,
        period?: string,
        title?: string,
        subtitle?: string,
        desc?: string
    }
}

export const Card = ({ item }: CardProps) => {
    return (

        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-zinc-400 rounded-full mt-1.5 -start-1.5 border border-zinc-50 dark:border-zinc-400 dark:bg-zinc-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500">{item.period}</time>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</h3>
            <p className="mb-4 text-base font-normal text-zinc-500 dark:text-gray-400">{item.subtitle}</p>
            {
                item.desc &&
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.desc}</p>
            }
        </li>
    )
}