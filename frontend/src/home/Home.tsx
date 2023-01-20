import classnames from 'classnames/bind';
import { Typography } from '@mui/material';

import t from '../translations/en.json';

import styles from './Home.module.scss';

const cx = classnames.bind(styles);

/**
 * Home page component
 */
function Home() {
  return (
    <div className={cx('home-container')}>
      <Typography variant="h2" fontWeight={700} color="primary">
        {t.home.welcomeTo + ' Team Blue'}
        {/* <br />
        {t.home.eventName} */}
        {/* <br /> */}
      </Typography>

      <Typography variant="h6" component="span">
        {/* {t.home.description}
        <br /> */}
        Names
      </Typography>
    </div>
  );
}

export default Home;
