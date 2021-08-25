import uranusImage from '../../../assets/images/planet-uranus.svg'
import uranusInternalImage from '../../../assets/images/planet-uranus-internal.svg'
import uranusGeoImage from '../../../assets/images/planet-uranus-geology.png'
export const data = {
    name: 'Urano',
    overview: {
        content:
            'Urano es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Aunque es detectable a simple vista en el cielo nocturno, no fue catalogado como planeta por los astrónomos de la antigüedad debido a su escasa luminosidad y a la lentitud de su órbita.',
        source: 'https://en.wikipedia.org/wiki/Uranus',
        image: uranusImage,
    },
    structure: {
        content:
            "La masa de Urano es 14,5 veces la de la Tierra haciéndolo el menos masivo de los planetas gigantes, mientras que su densidad, 1,27 g/cm³. Aunque tiene un diámetro ligeramente mayor que el de Neptuno (unas cuatro veces el de la Tierra), tiene menos masa. Estos valores indican que está compuesto principalmente de diversos tipos de «hielos», como agua, amoníaco y metano.",
        source: 'https://es.wikipedia.org/wiki/Urano_(planeta)#Composici%C3%B3n_y_estructura_interna',
        image: uranusInternalImage,
    },
    geology: {
        content:
            "Aunque no hay una superficie sólida bien definida en el interior de Urano, la parte más exterior de la envoltura gaseosa de Urano que es accesible por sensores remotos se llama atmósfera.",
        source: 'https://es.wikipedia.org/wiki/Urano_(planeta)#Atm%C3%B3sfera',
        image: uranusImage,
        geo: uranusGeoImage,
    },
    sectionColor: 'hsl(169, 73%, 44%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '290px',
    mobileImgWidth: '176px',
    rotation: '17.2 Hours',
    revolution: '84 Years',
    radius: '25,362 KM',
    temperature: '-195°c',
};