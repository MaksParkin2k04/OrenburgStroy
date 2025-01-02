import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function NavBarMenu({ cities, menuItems, navigatedPage = (page) => { } }) {
    const [setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        //setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };




    return (
        <AppBar position="static" sx={{ borderRadius: '11px', bgcolor: '#f6f6f6' }}>
            <Container maxWidth="xl" >
                <Toolbar sx={{ justifyContent: "space-between" }}>

                    <Box sx={{ flexGrow: 0, color: '#000000', display: { xs: 'flex', md: 'none' } }}>


                        {menuItems.map((menuItem) => (
                            <Button
                                key={menuItem.id}
                                onClick={() => { handleCloseNavMenu(); navigatedPage(menuItem); }}
                                sx={{ my: 2, color: '#424242', display: 'block' }}
                            >
                                {menuItem.name}
                            </Button>
                        ))}

                        <IconButton sx={{ p: 0, m: 0 }}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"

                        >

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
                        {menuItems.map((menuItem) => (
                            <Button
                                key={menuItem.id}
                                onClick={() => { handleCloseNavMenu(); navigatedPage(menuItem); }}
                                sx={{ my: 2, color: '#424242', display: 'block' }}
                            >
                                {menuItem.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, color: '#000000', display: { xs: 'none', md: 'flex' } }}>

                        <IconButton 
                            size="large"
                            aria-label="location"
                            aria-controls="location-appbar"
                            aria-haspopup="true"
                            style={{ backgroundColor: 'transparent' }}
                            color="inherit"
                        >
                            <LocationOnIcon />

                            <Typography sx={{ textAlign: 'center' }}>  {cities ? cities.map((city, index) => (<div key={city.id}> {city.name}</div>)) : <div>Города не найдены</div>}</Typography>

                        </IconButton>


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
