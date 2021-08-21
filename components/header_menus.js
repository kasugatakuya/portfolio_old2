import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const HeaderMenus = (props) => {
  return (
    <>
      <IconButton onClick={e => props.handleDrawerToggle(e)}>
        <MenuIcon />
      </IconButton>
    </>
  )
};

export default HeaderMenus;