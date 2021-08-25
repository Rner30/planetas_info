import earthImage from '../../../assets/images/planet-earth.svg'
import earthInternalImage from '../../../assets/images/planet-earth-internal.svg'
import earthGeoImage from '../../../assets/images/planet-earth-geology.png'
export const data = {
    name: 'Tierra',
    overview: {
        content:
            "La superficie terrestre o corteza está dividida en varias placas tectónicas que se deslizan sobre el magma durante periodos de varios millones de años. La superficie está cubierta por continentes e islas; estos poseen varios lagos, ríos y otras fuentes de agua, que junto con los océanos de agua salada que representan cerca del 71 % de la superficie constituyen la hidrósfera.",
        source: 'https://es.wikipedia.org/wiki/Tierra',
        image: earthImage,
    },
    structure: {
        content:
            "El interior de la Tierra, al igual que el de los otros planetas terrestres, está dividido en capas según su composición química o sus propiedades físicas (reológicas), pero, a diferencia de los otros planetas terrestres, tiene un núcleo interno y externo distintos. Su capa externa es una corteza de silicato sólido, químicamente diferenciado, bajo la cual se encuentra un manto sólido de alta viscosidad. ",
        source: 'https://es.wikipedia.org/wiki/Tierra#Estructura_interna',
        image: earthInternalImage,
    },
    geology: {
        content:
            'La superficie del planeta se moldea a lo largo de períodos de tiempo geológicos, debido a la erosión tectónica. Las características de esta superficie formada o deformada mediante la tectónica de placas están sujetas a una constante erosión a causa de las precipitaciones, los ciclos térmicos y los efectos químicos.',
        source: 'https://es.wikipedia.org/wiki/Tierra#Superficie',
        image: earthImage,
        geo: earthGeoImage,
    },
    sectionColor: 'hsl(263, 67%, 51%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '285px',
    mobileImgWidth: '173px',
    rotation: '0.99 Days',
    revolution: '365.26 Days',
    radius: '6,371 KM',
    temperature: '16°c',
};