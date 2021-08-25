import mercuryImage from '../../../assets/images/planet-mercury.svg';
import mercuryInternalImage from '../../../assets/images/planet-mercury-internal.svg';
import mercuryGeoImage from '../../../assets/images/planet-mercury-geology.png';
export const data = {
    name: 'Mercurio',
    overview: {
        content:
            "Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.Al ser un planeta cuya órbita es inferior a la de la Tierra, lo observamos pasar periódicamente delante del Sol, fenómeno que se denomina tránsito astronómico. ",
        source: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)',
        image: mercuryImage,
    },
    structure: {
        content:
            "Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra. Este planeta es el más pequeño de los cuatro, con un diámetro de 4879 km en el ecuador. La densidad de este planeta es la segunda más grande de todo el sistema solar, siendo su valor de 5430 kg/m³, solo un poco menor que la densidad de la Tierra.",
        source: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)#Estructura_interna',
        image: mercuryInternalImage,
    },
    geology: {
        content:
            "La superficie de Mercurio, como la de la Luna, presenta numerosos impactos de meteoritos que oscilan entre unos metros hasta miles de kilómetros. Algunos de los cráteres son relativamente recientes, de algunos millones de años de edad, y se caracterizan por la presencia de un pico central.",
        source: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)#Geolog%C3%ADa_y_superficie',
        image: mercuryImage,
        geo: mercuryGeoImage,
    },
    sectionColor: 'hsl(194, 48%, 49%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '184px',
    mobileImgWidth: '111px',
    rotation: '58.6 Dias',
    revolution: '87.97 Dias',
    radius: '2,439.7 KM',
    temperature: '430°c',
};