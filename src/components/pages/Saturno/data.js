import saturnImage from '../../../assets/images/planet-saturn.svg'
import saturnInternalImage from '../../../assets/images/planet-saturn-internal.svg'
import saturnGeoImage from '../../../assets/images/planet-saturn-geology.png'
export const data = {
    name: 'Saturno',
    overview: {
        content:
            'Saturno es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. El aspecto más característico de Saturno son sus brillantes anillos. ',
        source: 'https://es.wikipedia.org/wiki/Saturno_(planeta)',
        image: saturnImage,
    },
    structure: {
        content:
            "Los modelos planetarios típicos consideran que el interior del planeta es semejante al de Júpiter, con un núcleo rocoso rodeado por hidrógeno, helio y trazas de otras sustancias volátiles. Sobre él se extiende una extensa capa de hidrógeno líquido, debido a los efectos de las elevadas presiones y temperaturas.",
        source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
        image: saturnInternalImage,
    },
    geology: {
        content:
            "La atmósfera de Saturno posee un patrón de bandas oscuras y zonas claras similar al de Júpiter aunque la distinción entre ambas es mucho menos clara en el caso de Saturno.",
        source: 'https://es.wikipedia.org/wiki/Saturno_(planeta)#Atm%C3%B3sfera',
        image: saturnImage,
        geo: saturnGeoImage,
    },
    sectionColor: 'hsl(17, 73%, 46%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '422px',
    mobileImgWidth: '256px',
    rotation: '10.8 Hours',
    revolution: '29.46 Years',
    radius: '58,232 KM',
    temperature: '-138°c',
};