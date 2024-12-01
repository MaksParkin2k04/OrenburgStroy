import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';


const pages = ['Новостройки', 'Проекты', 'О компании', 'Контакты'];

const settings = [''];
function ResponsiveAppBar({ cities } ) {
    const [setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    //
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
      
       
        

        [theme.breakpoints.up('sm')]: {
         
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    //

    return (
        <AppBar position="static" sx={{ borderRadius: '11px', bgcolor: '#f6f6f6' }}>
            <Container maxWidth="xl" >
                <Toolbar  sx={{ justifyContent: "space-between" }}>


                

                    <Box sx={{ flexGrow: 0, color: '#000000', display: { xs: 'flex', md: 'none' } }}>
                        <IconButton sx={{ p: 0, m: 0 }}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"

                        >
                         
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="search"
                            aria-controls="search-appbar"
                            aria-haspopup="true"
                            color="inherit"

                        >
                            {/* <SearchIcon  />*/}

                            <Search >
                                <SearchIconWrapper >
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Поиск…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </IconButton>




                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5, m: 0.5 }}
                            size="large"
                            aria-label="location"
                            aria-controls="location-appbar"
                            aria-haspopup="true"
                            color="inherit"

                        >

                            <LocationOnIcon />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',

                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',

                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}


                        </Menu>

                        <IconButton sx={{ p: 0.5, m: 0.5 }}
                            size="large"
                            aria-label="location"
                            aria-controls="location-appbar"
                            aria-haspopup="true"
                            color="inherit"

                        >
                            <PersonIcon />
                        </IconButton>


                    </Box>


                    <Box sx={{ flexGrow: 1, color: '#424242', display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#424242', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>


                    <Box sx={{ flexGrow: 0, color: '#000000', display: { xs: 'none', md: 'flex' } }}>

                        <IconButton
                            size="large"
                            aria-label="search"
                            aria-controls="search-appbar"
                            aria-haspopup="true"
                            style={{ backgroundColor: 'transparent' }}
                            color="inherit"
                        >
                            {/*  <SearchIcon />*/}

                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Поиск…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                        </IconButton>


                        <IconButton onClick={handleOpenUserMenu}
                            size="large"
                            aria-label="location"
                            aria-controls="location-appbar"
                            aria-haspopup="true"
                            style={{ backgroundColor: 'transparent' }}
                            color="inherit"
                        >
                            <LocationOnIcon />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                         
                                <MenuItem >
                                <Typography sx={{ textAlign: 'center' }}>  {cities ? cities.map((city, index) => (<div key={city.id}>{index + 1}. {city.name}</div>)) : <div>Сервер не доступен</div>}</Typography>
                                </MenuItem>
                           
                          
                        </Menu>

                        <IconButton
                            size="large"
                            aria-label="location"
                            aria-controls="location-appbar"
                            aria-haspopup="true"
                            style={{ backgroundColor: 'transparent' }}
                            color="inherit"
                        >
                            <PersonIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;