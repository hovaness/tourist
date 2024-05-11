import { Carousel } from 'antd';
import LogoWithNav from 'components/LogoWithNav/LogoWithNav';
import NavButton from 'components/NavButton/NavButton';
import Player from 'components/Player/Player';
import tours from 'data';
import styles from 'pages/Excurtion/exucrtion.module.css'
import { useParams } from 'react-router-dom'

function Excurtion() {
    const { tourId, excursionId } = useParams();
    const currExc = tours.get(tourId).excurtions.find((exc) => exc.slug === excursionId)
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        width:'auto',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#82b5e8',
    };

    return (
        <>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <h1>{currExc.name}</h1>
                </div>
                <Carousel style={{ marginBottom: 100 }} arrows dotPosition="left" infinite={false}>
                    <div>
                        <h3 style={contentStyle}>
                        Пример текста
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Пример текста 2 </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Пример текста 3 </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Пример текста 4</h3>
                    </div>
                </Carousel>
                <div className={styles.container}>
                    <img src='/src/assets/player.svg'/>
                </div>
                <img />
                <NavButton />
            </div>
        </>

    )
}

export default Excurtion