import venusImage from '../../../assets/images/planet-venus.svg'
import venusInternalImage from '../../../assets/images/planet-venus-internal.svg'
import venusGeoImage from '../../../assets/images/planet-venus-geology.png'
export const data = {
    name: 'Venus',
    overview: {
        content:
            "Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte.Se trata de un planeta interior de tipo rocoso y caliente, llamado con frecuencia el planeta hermano de la Tierra, ya que ambos son similares en cuanto a tamaño, masa y composición.",
        source: 'https://es.wikipedia.org/wiki/Venus_(planeta)',
        image: venusImage,
    },
    structure: {
        content:
            'Sin información sísmica o detalles, momento de inercia, existen pocos datos directos sobre la geoquímica y la estructura interna de Venus. Sin embargo, la similitud en tamaño y densidad entre Venus y la Tierra sugiere que ambos comparten una estructura interna afín: un núcleo, un manto, y una corteza. Al igual que la Tierra, se especula que el núcleo de Venus es al menos parcialmente líquido.',
        source: 'https://es.wikipedia.org/wiki/Venus_(planeta)#Estructura_interna',
        image: venusInternalImage,
    },
    geology: {
        content:
            'Venus tiene una lenta rotación retrógrada, lo que significa que gira de este a oeste, en lugar de hacerlo de oeste a este como lo hacen la mayoría de los demás planetas mayores. El interior de Venus es probablemente similar al de la Tierra: un núcleo de hierro de unos 3000 km de radio, con un manto rocoso que forma la mayor parte del planeta. ',
        source: 'https://es.wikipedia.org/wiki/Venus_(planeta)#Geolog%C3%ADa_de_Venus',
        image: venusImage,
        geo: venusGeoImage,
    },
    sectionColor: 'hsl(33, 82%, 61%)',
    desktopImgWidth: '90%',
    tabletImgWidth: '253px',
    mobileImgWidth: '154px',
    rotation: '243 Days',
    revolution: '224.7 Days',
    radius: '6,051.8 KM',
    temperature: '471°c',
};