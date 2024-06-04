import LogoWithNav from 'components/LogoWithNav/LogoWithNav';
import NavButton from 'components/NavButton/NavButton';
import tours from 'data';
import styles from 'pages/Excurtion/exucrtion.module.css'
import { useParams } from 'react-router-dom'


function Excurtion() {
    const { tourId, excursionId } = useParams();
    const currExc = tours.get(tourId).excurtions.find((exc) => exc.slug === excursionId)
    const imagePaths = [
        '/src/assets/china_1.png',
        '/src/assets/china_2.png',
        '/src/assets/china_3.png',
        '/src/assets/china_4.png',
        '/src/assets/china_5.png',
        '/src/assets/china_6.png',
        '/src/assets/china_7.png',
        '/src/assets/china_8.png',
        '/src/assets/china_9.png',
        '/src/assets/china_10.png',
        '/src/assets/china_11.png',
        '/src/assets/china_12.png',
        '/src/assets/china_13.png',
        '/src/assets/china_14.png',
    ]
    return (
        <>
        <div className={styles.wrapper}>

            <div className={styles.container}>
                <h1>{currExc.name}</h1>
            </div>
            <div className={styles.carousel}>
                {currExc.text.map((text, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <p className={styles.carouselText}>{text}</p>
                        <img src={imagePaths[index]} alt={`Carousel Image ${index + 1}`} className={styles.carouselImage}/>
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.container}>
            <audio style={{marginBottom:'160px'}} controls src="/src/assets/excurtion.mp3"></audio>
        </div>
        <LogoWithNav/>
</>

)
}

export default Excurtion