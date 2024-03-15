export const scrollToHash = (element : string) => {
    const e = document.getElementById(element);
    e?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
}