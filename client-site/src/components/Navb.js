import React, {useState} from 'react';
import styled from 'styled-components';
import useStyles from './styles';
import {AppBar, Toolbar, IconButton, Box, Typography, Container, Button} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from 'react-router-dom'
import Modal from './Modals'

const Navb = () => {
  const classes = useStyles()


  const pages = ['Home', 'Film', 'Contact'];
  const links = ['/', 'work', 'Contact'];

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <AppBar position="static" elevation={0} style={{backgroundColor: '#F5F2EB', justifyContent: 'space-between',}}>
      <Container maxWidth="xl" style={{padding: ' 2rem 7vw 0rem 7vw', justifyContent: 'space-between',}}>
        <Toolbar disableGutters style={{justifyContent: 'space-between',}}>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'}  }}
            style ={{color: '#D96ED4', fontFamily: 'Festive, cursive'}}
          >
            Pink Picture
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
          </Typography>
          <Box  justifyContent={"center"} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                style={{ fontSize: '20px' ,fontFamily: 'Gideon Roman, cursive', marginRight: '3vw'}}
                component={Link} to={links[index]}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{width: '50px', height: 'auto'}} onClick={handleOpen}/>
          </IconButton >
        </Toolbar>
      </Container>
      <Modal open ={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>
    </AppBar>
    )
};



export default Navb;