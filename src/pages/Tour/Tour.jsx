import { Outlet, useParams } from 'react-router-dom'
import tours from 'data';
import styles from 'pages/Tour/tour.module.css'
import { Select } from 'antd';
import { Link } from "react-router-dom";
import LogoWithNav from 'components/LogoWithNav/LogoWithNav';
import Logo from 'components/Logo/Logo';
import NavButton from 'components/NavButton/NavButton';

function Tour() {
  let {tourId} = useParams();
  const thisTour = tours.get(tourId);
  const tourItemList = thisTour.excurtions.map((excurtion) => ({
    label: (
      <>
      <Link to={`/tours/${tourId}/${excurtion.slug}`}>
        <div className={styles.optionContainer}>
          <p>{excurtion.name}</p>
          {excurtion.free ? (<></>) : (<strong>По подпискe</strong>)}
        </div>
      </Link>
      </>
    ),
  }))
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src='/src/assets/geo.svg'/>
          <h1>{thisTour.name}</h1>  
        </div>
        <Select
          className={styles.drop}
          size="middle"
          placeholder="Экскурсия"
          optionFilterProp="children"
          options={tourItemList}
        />
      <Logo/>
      <NavButton/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Tour