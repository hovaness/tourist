import styles from "components/NavButton/navButton.module.css"
import { Link } from 'react-router-dom'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';



function NavButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={styles.container}>
      <BottomNavigationAction  value="nearby" icon={<>
        <Link to="/">
          <img width={40} height={40} src="/src/assets/location.svg"/>
        </Link>
      </>} />
      <BottomNavigationAction  value="recents" icon={ <Link to="/profile">
          <img width={50} height={50} src="/src/assets/user.svg"/>
        </Link>} />
    </BottomNavigation>
  );
}

export default NavButton