type dataType = {
    id: number, 
    period: string, 
    title: string, 
    subtitle: string,
    desc?: string,
}

export const edu: dataType[] = [
    {
        id: 1,
        period: '2015-2018',
        title: 'Vocational High School',
        subtitle: 'SMKS RK Bintang Timur Pematang Siantar - Software Engineering',
    },
    {
        id: 2,
        period: "2018-2022",
        title: "Bachelor's Degree",
        subtitle: 'Mikroskil University - Informatics Engineering',
    },
    {
        id: 3,
        period: "2022",
        title: "Bootcamp",
        subtitle: 'Sanbercode - Quality Assurance',
    },
]

export const exp: dataType[] = [
    {
        id: 1,
        period: '2023 - Current',
        title: 'Pasifik Agro Sentosa',
        subtitle: 'IT Staff',
        desc: 'Developing HRIS Mobile & Web App, Developing Mobile & Web App for Plantation Activity, Developing GIS Web App for Monitoring Field Condition'
    },
]