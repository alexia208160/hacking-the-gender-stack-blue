import classnames from 'classnames/bind';
import {
  AccountTree,
  Forum,
  Home,
  Person,
  PieChart,
  Settings,
  ViewList,
} from '@mui/icons-material';
import { Badge, Paper } from '@mui/material';
import type { PaperProps } from '@mui/material';

import t from '../../translations/en.json';

import NavIconButton from './NavIconButton';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);

/**
 * User profile button rendered in the application sidebar
 */
function UserProfileButton(props: { notificationCount?: number }) {
  const { notificationCount } = props;

  const button = (
    <NavIconButton className={cx('profile-button')} icon={Person} title={t.sidebar.profileTitle} />
  );

  if (notificationCount) {
    return (
      <Badge className={cx('notification-badge')} badgeContent={notificationCount} color="error">
        {button}
      </Badge>
    );
  }

  return button;
}

/**
 * Application sidebar component
 */
function Sidebar(props: PaperProps) {
  return (
    <Paper {...props} className={cx('sidebar', props.className)} elevation={6}>
      <div className={cx('logo-icon')}>
        <img src="/images/logo.svg" alt={t.logoAlt} />
      </div>

      <div className={cx('button-stack')}>
        <NavIconButton icon={Home} path="/" title={t.home.pageTitle} exact />

        {/* Populate this sidebar item with the appropriate icon, path, and title for your application */}
        <NavIconButton icon={ViewList} path="comparison" title="Comparison" />

        <NavIconButton icon={PieChart} title={t.sidebar.pieTitle} />
        <NavIconButton icon={AccountTree} title={t.sidebar.treeTitle} />
        <NavIconButton icon={Forum} title={t.sidebar.feedbackTitle} />
      </div>

      <div className={cx('button-stack', 'user-pref-buttons')}>
        <NavIconButton
          className={cx('settings-button')}
          icon={Settings}
          title={t.sidebar.settingsTitle}
        />
        <UserProfileButton notificationCount={12} />
      </div>
    </Paper>
  );
}

export default Sidebar;
