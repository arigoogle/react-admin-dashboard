// import PropTypes from 'prop-types'
import { AppBar, Badge, Box, IconButton, Toolbar } from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';

function AppHeader({onToggleClicked, isOpen}) {

  return (
    <AppBar
      position='sticky'
      sx={styles.appBar}
    >
      <Toolbar>
        <IconButton
          onClick={() => onToggleClicked(!isOpen)}
          color='secondary'
        >
          <MenuTwoToneIcon />
        </IconButton>
        <Box
          component='img'
          sx={styles.appLogo}
          src='/src/assets/sample-logo-2.svg'
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          title='Notification'
          color='secondary'
        >
          <Badge
            badgeContent={7}
            color='error'
          >
            <NotificationsNoneTwoToneIcon />
          </Badge>
        </IconButton>
        <IconButton
          title='Settings'
          color='secondary'
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          title='Logout'
          color='secondary'
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: 'neutral.main',
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    ml: 2,
    cursor: 'pointer',
  },
};

AppHeader.propTypes = {
    onToggleClicked: PropTypes.func,
    isOpen: PropTypes.bool
  }
  

export default AppHeader;
// cui install pake npm?