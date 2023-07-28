import React, { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@emotion/react'
import theme from './config/theme';
import { Box, CssBaseline } from '@mui/material';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
function App() {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader onToggleClicked={setSidebarIsOpen} isOpen={sidebarIsOpen} />
          <Box sx={StyleSheet.container}>
            <SideNav isOpen={sidebarIsOpen}/>
            <Box component={'main'} sx={styles.mainSection}>
            </Box>
          </Box>
      </ThemeProvider>
    </React.Fragment>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
  
};

export default App
