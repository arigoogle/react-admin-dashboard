import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RadioTwoToneIcon from '@mui/icons-material/RadioTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import TuneTwoToneIcon from '@mui/icons-material/TuneTwoTone';
import { Avatar, Box, Typography, useTheme } from '@mui/material';

import PropTypes from 'prop-types';

function SideNav({isOpen}) {
    
    const theme = useTheme();
    console.log(isOpen);
    return ( 
        <Sidebar collapsed={isOpen}
            style={{ 
                height: '100%',
                top: 'auto'
             }}
             breakPoint='md'
             backgroundColor={theme.palette.neutral.light}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt='Channel Name' src='src/assets/react.svg'></Avatar>
                {!isOpen ?  <Typography  variant='body2' sx={styles.yourChannel}>Your Channel</Typography>: null}
                {!isOpen ?  <Typography  variant='overline'>Reacth with Ari</Typography>: null}
            </Box>
            <Menu>
                <MenuItem active icon={<DashboardOutlinedIcon/>}> 
                    <Typography variant='body2'>Dashboard</Typography>
                </MenuItem>
                <MenuItem active icon={<RadioTwoToneIcon/>}> 
                    <Typography variant='body2'>Content</Typography>
                </MenuItem>
                <MenuItem active icon={<AnalyticsTwoToneIcon/>}> 
                    <Typography variant='body2'>Analytics</Typography>
                </MenuItem>
                <MenuItem active icon={<TuneTwoToneIcon/>}> 
                    <Typography variant='body2'>Customization</Typography>
                </MenuItem>
            </Menu>
        </Sidebar>
      );
}


/** @type {import("@mui/material").SxProps} */
const styles = {
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }
  };

SideNav.propTypes = {
    isOpen: PropTypes.bool
}

export default SideNav;