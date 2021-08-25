import jupiterImage from '../../../assets/images/planet-jupiter.svg'
import jupiterInternalImage from '../../../assets/images/planet-jupiter-internal.svg'
import jupiterGeoImage from '../../../assets/images/planet-jupiter-geology.png'
export const data = {
    name: 'Jupiter',
    overview: {
        content:
            'Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase. ',
        source: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
        image: jupiterImage,
    },
    structure: {
        content:
            "En el interior del planeta el hidrógeno, el helio y el argón (gas noble que se acumula en la superficie de Júpiter) se comprimen progresivamente. El hidrógeno molecular se comprime de tal manera que se transforma en un líquido de carácter metálico a profundidades de unos 15 000 km bajo la superficie. ",
        source: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)#Estructura_interna',
        image: jupiterInternalImage,
    },
    geology: {
        content:
            'La atmósfera de Júpiter no presenta una frontera clara con el interior líquido del planeta; la transición se va produciendo de una manera gradual. Se compone en su mayoría de hidrógeno (87 %) y helio (13 %), además de contener metano, vapor de agua, amoníaco y sulfuro de hidrógeno, todas estas con < 0,1 % de la composición de la atmósfera total.',
        source: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)#Atm%C3%B3sfera',
        image: jupiterImage,
        geo: jupiterGeoImage,
    },
    sectionColor: 'hsl(2, 68%, 53%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '369px',
    mobileImgWidth: '224px',
    rotation: '9.93 Hours',
    revolution: '11.86 Years',
    radius: '69,911 KM',
    temperature: '-108°c',
};