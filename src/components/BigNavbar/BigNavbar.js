// import React, {useEffect, useState} from 'react';
// import {Nav, Navbar} from "react-bootstrap";
// import {About, Contact, Home, Portfolio, WhoIAm, Services} from "../index";
//
// export default function BigNavBar({component}) {
//     const [expanded, setExpanded] = useState(false);
//     const scrollChange = () => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 0) {
//                 document.getElementById('navBar').style.backgroundColor = "#efda5d"
//                 document.getElementById('navBar').style.height = "7%"
//             } else if (window.scrollY < 1) {
//                 document.getElementById('navBar').style.backgroundColor = "transparent"
//                 document.getElementById('navBar').style.height = "10%"
//                 document.getElementById('navBar').style.transitionDuration = "0.2s"
//             }
//         })
//     }
//
//     useEffect(scrollChange, [window.scrollY])
//
//     return (
//         <div>
//             <Navbar expand="lg" id="navBar" className={"dropdown"}>
//                 <Navbar.Brand ><span id="navLogo">MB</span></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{setExpanded(true)}}  className="toggle"/>
//                 <Navbar.Collapse id="basic-navbar-nav" >
//                     <Nav className={ expanded ? "navlink d-flex flex-column justify-content-center align-items-center" : "collapse"} >
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<Home/>)
//                         }}> <i className="fas fa-home"/> Accueil</Nav.Link>
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<About/>)
//                         }}> <i className="far fa-address-card"/> A propos</Nav.Link>
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<WhoIAm/>)
//                         }}> <i className="fas fa-male"/>  Qui Suis-je</Nav.Link>
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<Services/>)
//                         }}><i className="fas fa-network-wired"/> Services</Nav.Link>
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<Portfolio/>)
//                         }}><i className="fas fa-briefcase"/> Portfolio</Nav.Link>
//                         <Nav.Link href="https://startergatsbyblog92382.gatsbyjs.io/" target={"blank"}><i
//                             className="fab fa-wordpress"/> Blog</Nav.Link>
//                         <Nav.Link onClick={() => {
//                             setExpanded(false)
//                             component(<Contact/>)
//                         }}><i className="fas fa-address-book"/> Contactez-moi</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div>
//     );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from './bigNavbar.module.scss'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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
        <AppBar position="static" className={styles.container}>
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap

                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="./images/logo/mb.png" style={{height: '4rem'}} alt="logo"/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="./images/logo/mb.png" style={{height: '4rem'}} alt="logo"/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;