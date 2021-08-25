import neptuneImage from '../../../assets/images/planet-neptune.svg'
import neptuneInternalImage from '../../../assets/images/planet-neptune-internal.svg'
import neptuneGeoImage from '../../../assets/images/planet-neptune-geology.png'
export const data = {
    name: 'Neptuno',
    overview: {
        content:
            'Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.',
        source: 'https://en.wikipedia.org/wiki/Neptune',
        image: neptuneImage,
    },
    structure: {
        content:
            "La estructura interna de Neptuno se parece a la de Urano: un núcleo rocoso cubierto por una costra helada, oculto bajo una atmósfera gruesa y espesa. Los dos tercios interiores de Neptuno se componen de una mezcla de roca fundida, agua, amoníaco líquido y metano. El tercio exterior es una mezcla de gas caliente compuesto de hidrógeno, helio, agua y metano.",
        source: 'https://es.wikipedia.org/wiki/Neptuno_(planeta)#Composici%C3%B3n_y_estructura_interna',
        image: neptuneInternalImage,
    },
    geology: {
        content:
            "Al orbitar tan lejos del Sol, Neptuno recibe muy poco calor. Su temperatura en la superficie es de -218 °C (55 K). Sin embargo, el planeta parece tener una fuente interna de calor. Se piensa que puede ser un remanente del calor producido por la concreción de materia durante la creación del mismo, que ahora irradia calor lentamente hacia el espacio. ",
        source: 'https://es.wikipedia.org/wiki/Neptuno_(planeta)#Composici%C3%B3n_y_estructura_interna',
        image: neptuneImage,
        geo: neptuneGeoImage,
    },
    sectionColor: 'hsl(222, 87%, 56%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '285px',
    mobileImgWidth: '173px',
    rotation: '16.08 Hours',
    revolution: '164.79 Years',
    radius: '24,622 KM',
    temperature: '-201°c',
};