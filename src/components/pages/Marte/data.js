import marsImage from '../../../assets/images/planet-mars.svg'
import marsInternalImage from '../../../assets/images/planet-mars-internal.svg'
import marsGeoImage from '../../../assets/images/planet-mars-geology.png'
export const data = {
    name: 'Mars',
    overview: {
        content:
            'Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio. El periodo de rotación y los ciclos estacionales son similares a los de la Tierra, ya que la inclinación es lo que genera las estaciones.',
        source: 'https://es.wikipedia.org/wiki/Marte_(planeta)',
        image: marsImage,
    },
    structure: {
        content:
            'Al igual que la Tierra, Marte tiene diferenciados un denso núcleo metálico recubierto por materiales menos densos. Los modelos actuales sugieren un núcleo con un radio de aproximadamente 1,794 ± 65 kilómetros (1,115 ± 40 mi), consistente principalmente en níquel y hierro con aproximadamente un 16-17 % de azufre.',
        source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
        image: marsInternalImage,
    },
    geology: {
        content:
            'Marte es un planeta rocoso compuesto por minerales que contienen silicio, oxígeno, metales y otros elementos que normalmente componen las rocas. La superficie de Marte está compuesta principalmente por basalto toleítico con un alto contenido en óxidos de hierro que proporcionan el característico color rojo de su superficie.',
        source: 'https://es.wikipedia.org/wiki/Marte_(planeta)#Geolog%C3%ADa',
        image: marsImage,
        geo: marsGeoImage,
    },
    sectionColor: 'hsl(10, 63%, 51%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '213px',
    mobileImgWidth: '129px',
    rotation: '1.03 Days',
    revolution: '1.88 Years',
    radius: '3,389.5 KM',
    temperature: '-28°c',
};