import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { HeaderMenus, ClosableDrawer } from './index';
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "444",
  },
  toolBar: {
    margin: '0 auto',
    maxWidth: 1024,
    width: '100%'
  },
  iconButton: {
    margin: '0 0 0 auto'
  },
  title: {
    color: "#212121",
    fontWeight: "bold"
  }
});

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = useCallback((e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(!open)

  }, [setOpen, open]);

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.menuBar}>
          <Toolbar className={classes.toolBar}>
            <div>
              <Link href="/">
                <a className={classes.title}>Kasuga Portfolio</a>
              </Link>
            </div>
            <div className={classes.iconButton}>
              <HeaderMenus handleDrawerToggle={handleDrawerToggle}/>
            </div>
          </Toolbar>
        </AppBar>
        <ClosableDrawer open={open} onClose={handleDrawerToggle} />
    </div>
  )
}

export default Header;